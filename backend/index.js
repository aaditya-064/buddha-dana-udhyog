import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

const whitelist = config.ALLOWED_SITES.split(",");

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use("/user", userRouter);

db.then(() => {
  console.log("DATABASE CONNECTED");
}).catch((err) => {
  console.log(err);
});

app.listen(
  config.PORT,
  console.log(`SERVER IS RUNNING AT PORT ${config.PORT}`)
);
