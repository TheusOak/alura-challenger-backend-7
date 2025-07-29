import mongoose from "mongoose";

const depoimetoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  }
}, {
  versionKey: false
});

const Depoimento = mongoose.model("Depoimento", depoimetoSchema);
export default Depoimento;