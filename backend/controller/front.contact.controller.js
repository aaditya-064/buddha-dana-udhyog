import emailContactModel from "../model/front.contact.model.js";

export const userEmailHome = async (req, res) => {
  try {
    const email = req.body.email;
    const addMail = await emailContactModel.create({ email: email });
    if (!addMail) {
      const err = new Error("INVALID");
      err.statusCode = 400;
      throw err;
    }
    res.json(addMail);
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};
