import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const getUser = async (req, res) => {
  try {
    const findUser = await userModel.findOne({ email: req.body.email });
    console.log(findUser);
    if (!findUser) {
      const err = new Error("USER NOT FOUND");
      err.statusCode = 404;
      throw err;
    }
    res.json(findUser);
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const previousUser = await userModel.findOne({ email: req.body.email });
    if (previousUser) {
      const err = new Error("EMAIL ALREADY EXISTS");
      err.statusCode = 400;
      throw err;
    }
    const currentPassword = req.body.password;
    const hashedPassword = bcrypt.hashSync(currentPassword, 10);
    const saveUser = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });
    res.json(saveUser);
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};

export const logUser = async (req, res) => {
  try {
    const findUser = await userModel.findOne({ email: req.body.email });
    if (!findUser) {
      const err = new Error("USER NOT FOUND");
      err.statusCode = 404;
      throw err;
    }
    const comparePassword = bcrypt.compareSync(
      req.body.password,
      findUser.password
    );
    //   console.log(findUser.password, req.body.password);
    if (!comparePassword) {
      const err = new Error("PASSWORD INCORRECT");
      err.statusCode = 400;
      throw err;
    }
    const token = jwt.sign({ _id: findUser._id }, config.JWT_SECRET, {
      issuer: config.JWT_ISSUER,
      expiresIn: config.JWT_EXPIRY_DATE,
    });
    return res.json({ msg: "LOGGED IN ", accessToken: token });
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const findUser = await userModel.findOne({ email: req.body.email });
    if (!findUser) {
      const err = new Error("USER NOT FOUND");
      err.statusCode = 404;
      throw err;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const changedData = await userModel.findOneAndUpdate(
      { email: req.body.email },
      { $set: { password: hashedPassword } }
    );
    res.json(changedData);
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};
