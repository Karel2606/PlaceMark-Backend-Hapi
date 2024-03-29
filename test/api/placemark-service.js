import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.placemarkUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async getAllViewpoints() {
    const res = await axios.get(`${this.placemarkUrl}/api/viewpoint`);
    return res.data;
  },

  async getViewpoint(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/viewpoint/${id}`);
    return res.data;
  },

  async getViewpointsByUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/viewpoint/user/${id}`);
    return res.data;
  },

  async createViewpoint(placemark) {
    const res = await axios.post(`${this.placemarkUrl}/api/viewpoint/user/${id}`, placemark);
    return res.data;
  },

  async deleteViewpoint(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/viewpoint/${id}`);
    return res;
  },

  async deleteAllViewpoints() {
    const res = await axios.delete(`${this.placemarkUrl}/api/viewpoint`);
    return res.data;
  },
};