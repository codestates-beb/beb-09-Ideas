import mongoose from "mongoose";

/**
 * Score Collection Schema
 */
const scoreSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
});
