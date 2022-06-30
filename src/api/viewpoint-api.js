import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const viewPointApi = {
        findAll: {
          auth: {
            strategy: "jwt",
          },
          handler: async function (request, h) {
            try {
              const viewpoints = await db.viewPointStore.getAllViewPoints();
              return viewpoints;
            } catch (err) {
              return Boom.serverUnavailable("Database Error");
            }
          },
        },
      
        findOne: {
          auth: {
            strategy: "jwt",
          },
          handler: async function (request, h) {
            try {
              const viewPoint = await db.viewPointStore.getviewPointById(request.params.id);
              if (!viewPoint) {
                return Boom.notFound("No viewPoint with this id");
              }
              return viewPoint;
            } catch (err) {
              return Boom.serverUnavailable("Database Error");
            }
          },
        },
      
        findByUser: {
          auth: {
            strategy: "jwt",
          },
          async handler(request) {
            try {
              const user = await db.userStore.getUserById(request.params.id);
              if (!user) {
                return Boom.notFound("No User with this id");
              }
              const viewpoints = await db.viewpointstore.getviewpointsByUserId(request.params.id);
              return viewpoints;
            } catch (err) {
              return Boom.serverUnavailable("Database Error");
            }
          },
        },
      
        create: {
          auth: {
            strategy: "jwt",
          },
          handler: async function (request, h) {
            try {
              const viewPoint = request.payload;
              const user = await db.userStore.getUserById(request.params.id);
              if (!user) {
                return Boom.notFound("No User with this id");
              }
              const newviewPoint = await db.viewPointStore.addviewPoint(viewPoint);
              if (newviewPoint) {
                return h.response(newviewPoint).code(201);
              }
              return Boom.badImplementation("error creating viewPoint");
            } catch (err) {
              console.log(err)
              return Boom.serverUnavailable("Database Error");
            }
          },
        },
    
        deleteOne: {
            auth: {
              strategy: "jwt",
            },
            handler: async function (request, h) {
              try {
                const viewPoint = await db.viewPointStore.getviewPointById(request.params.id);
                if (!viewPoint) {
                  return Boom.notFound("No viewPoint with this id");
                }
                await db.viewPointStore.deleteviewPointById(viewPoint._id);
                return h.response().code(204);
              } catch (err) {
                return Boom.serverUnavailable("Database Error");
              }
            },
          },
      
}