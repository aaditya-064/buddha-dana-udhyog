import contactModel from "../model/contact.model.js";

export const postDetails = async (req, res) => {
  try {
    const createDetails = await contactModel.create({
      ...req.body,
    });
    res.json(createDetails);
  } catch (err) {
    res.json({ msg: err?.message });
  }
};

export const getDetails = async (req, res) => {
  try {
    const userDetails = await contactModel.find();
    res.json(userDetails);
  } catch (err) {
    res.json({ msg: err?.message });
  }
};
