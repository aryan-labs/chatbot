import express from "express";
import { ConnectDb } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
const app = express();

const port = 4000;
app.use(express.json());

ConnectDb();
app.get("/", (req, res) => {
  res.send("api working");
});
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server star${port}`);
});
