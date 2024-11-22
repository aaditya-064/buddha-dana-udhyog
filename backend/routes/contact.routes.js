import express from "express";
const router = express.Router();
import { userEmailHome } from "../controller/front.contact.controller.js";
import { postDetails, getDetails } from "../controller/contact.controller.js";

router.post("/user/email", userEmailHome);
router.post("/post/user/contact", postDetails);
router.get("/get/user/contacts", getDetails);

export default router;
