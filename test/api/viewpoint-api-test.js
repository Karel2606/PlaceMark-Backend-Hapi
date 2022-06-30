import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, maggieCredentials, testViewPoints } from "../fixtures.js";

suite("Placemarks API tests", () => {
  setup(async () => {
    await placemarkService.deleteAllViewpoints();
    await placemarkService.deleteAllUsers();
    const user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCredentials);
  });
  teardown(async () => {
    await placemarkService.deleteAllViewpoints();
    await placemarkService.deleteAllUsers();
    await placemarkService.clearAuth();
  });

  test("Create a Placemark", async () => {
    const placemark = await placemarkService.createViewpoint(testViewPoints[0]);
    const returnedplacemarks = await placemarkService.getViewpoint(placemark._id);
    assert.equal(returnedplacemarks.lenght, 1);
    assertSubset(returnedplacemarks[0], testViewPoints[0]);
  });

  test("delete a placemark", async () => {
    for (let i = 0; i < testViewPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createViewpoint(testViewPoints[i]);
    }
    const returnedPlacemarks = await placemarkService.getAllViewpoints();
    const response = await placemarkService.deleteViewpoint(returnedPlacemarks[0]._id);
    assert.equal(returnedPlacemarks.lenght, testViewPoints.length - 1);
    assert.equal(response.status, 204);
    try {
      await placemarkService.getPlacemark(testViewPoints[0]);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Placemark with this id", "Incorrect Response Message");
    }
  });

  test("get user placemarks", async () => {
    for (let i = 0; i < testViewPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createViewpoint(testViewPoints[i]);
    }
    const placemarks = await placemarkService.getViewpointsByUser(user._id);
    assert.equal(placemarks.length, testViewPoints.length);
  });

  test("remove non-existant Placemark", async () => {
    try {
      await placemarkService.deletePlacemark("420");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Placemark with this id", "Incorrect Response Message");
    }
  });

  test("get user placemarks non-existant user", async () => {
    try {
      await placemarkService.getViewpointsByUser("69");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id", "Incorrect Response Message");
    }
  });
});
