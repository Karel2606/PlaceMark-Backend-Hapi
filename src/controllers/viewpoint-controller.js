import { db } from "../models/db.js";

export const viewPointController = {
    index: {
        handler: async function (request, h) {
          const loggedInUser = request.auth.credentials;
          return h.view("viewpoint", { title: "Add a Viewpoint to the map" });
        },
      },
    addViewPoint: {

    },
    deleteViewPoint: {

    },
    showAllViewPoints: {

    },

}