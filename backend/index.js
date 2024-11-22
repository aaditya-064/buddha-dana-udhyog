import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/auth.routes.js";
import contactRouter from "./routes/contact.routes.js";

const app = express();
app.use(express.json());

const whitelist = config.ALLOWED_SITES.split(",");

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      //for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use("/user", userRouter);
app.use("/", contactRouter);

db.then(() => {
  console.log("DATABASE CONNECTED");
}).catch((err) => {
  console.log(err);
});

app.listen(
  config.PORT,
  console.log(`SERVER IS RUNNING AT PORT ${config.PORT}`)
);
