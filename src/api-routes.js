import { userApi } from "./api/users-api.js";
import { viewPointApi } from "./api/viewpoint-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { methode: "GET", path: "api/viewpoint", config: viewPointApi.findAll},
  { methode: "GET", path: "api/viewpoint/{id}", config: viewPointApi.findOne},
  { methode: "GET", path: "api/viewpoint/user/{id}", config: viewPointApi.findByUser},
  { methode: "POST", path: "api/viewpoint/user/{id}", config: viewPointApi.create}, 
  { methode: "DELETE", path: "api/viewpoint{id}", config: viewPointApi.deleteOne}, 
];