import { userApi } from "./api/users-api.js";
import { viewPointApi } from "./api/viewpoint-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/viewpoint", config: viewPointApi.findAll},
  { method: "GET", path: "/api/viewpoint/{id}", config: viewPointApi.findOne},
  { method: "GET", path: "/api/viewpoint/user/{id}", config: viewPointApi.findByUser},
  { method: "POST", path: "/api/viewpoint/user/{id}", config: viewPointApi.create}, 
  { method: "DELETE", path: "/api/viewpoint/{id}", config: viewPointApi.deleteOne},
  { method: "DELETE", path: "/api/viewpoint", config: viewPointApi.deleteAll}, 
];