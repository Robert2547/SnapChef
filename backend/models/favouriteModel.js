import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  recipeId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

export default Favourite;
