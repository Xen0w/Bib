import express from "express";
import dotenv from "dotenv";
import categoryRouter from "./routers/categoryRouter.js";
import itemRouter from "./routers/itemRouter.js";

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", itemRouter);

app.use("/", categoryRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
