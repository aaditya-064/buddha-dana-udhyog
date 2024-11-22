import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  email: {
    type: String,
  },
});

const emailContactModel = mongoose.model("Emails", contactSchema);
export default emailContactModel;
