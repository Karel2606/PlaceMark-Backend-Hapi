import Mongoose from "mongoose";

const { Schema } = Mongoose;

const viewPointSchema = new Schema({
  name: String,
  lat: Number, 
  long: Number, 
  altitude: Number, 
  // flag to categoriese if view of location is on landscape,
  // if false it is considert to be on a city-skyline
  isLandscape: Boolean,
  // refers to user who set data of POI
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ViewPoint = Mongoose.model("Viewpoint", viewPointSchema);