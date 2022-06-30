import { ViewPoint } from "./viewpoint.js";

// create, read, update, delete operations on Viewpoint object
export const viewPointMongoStore = {
  async getAllViewPoints() {
    const viewPoints = await ViewPoint.find().lean();
    return viewPoints;
  },

  async getViewPointById(id) {
    if (id) {
      const viewPoint = await ViewPoint.findOne({ _id: id }).lean();
      return viewPoint;
    }
    return null;
  },

  async getViewPointsByCategory(flag) {
    if (flag != null) {
      const viewPoints = await ViewPoint.find({ isLandscape: flag }).lean();
      return viewPoints;
    }
    return null;
  },

  async getViewPointsByUserId(id) {
    if (id) {
      const viewPoints = await ViewPoint.find({ userId: id }).lean();
      return viewPoints;
    }
    return null;
  },

  async sortViewPointsByaltitude() {
    const viewPoints = await this.getAllViewPoints();
    const sorted = viewPoints.sort({altitude: "desc"});
    return sorted;
  },

  async addViewPoint(viewPoint) {
    const newViewPoint = new ViewPoint(viewPoint);
    const viewPointObj = await newViewPoint.save();
    return newViewPoint;
  },

  async deleteViewPointById(id) {
    try {
      await ViewPoint.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteCategoryViewPoints(flag) {
    try {
      await ViewPoint.deleteMany({ isLandscape: flag });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteUserViewPoints(id) {
    try {
      await ViewPoint.deleteMany({ userId: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAll() {
    await ViewPoint.deleteMany({});
  },

  async editViewPoint(id, updatedViewPoint) {
    await ViewPoint.findByIdAndUpdate(id, {
      name: updatedViewPoint.name,
      lat: updatedViewPoint.lat,
      long: updatedViewPoint.long,
      altitude: updatedViewPoint.altitude,
      isLandscape: updatedViewPoint.isLandscape,
    });
    const p = await this.getViewPointById(id);
    return p;
  },
};