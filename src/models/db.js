import { userMongoStore } from "./mongo/user-mongo-store.js";
import { viewPointMongoStore } from "./mongo/viewpoint-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  viewPointStore: null, 

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.viewPointStore = viewPointMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};