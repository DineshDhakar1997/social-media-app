import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://dhakar1997:Dinesh1234@cluster0.eppckk2.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5050))
  .then(() => console.log("Connected To Database and listening on 5000"))
  .catch((err) => console.log(err));

app.listen(5000);
