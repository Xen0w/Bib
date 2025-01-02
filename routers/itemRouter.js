import { Router } from "express";
const itemRouter = Router();
import { itemDetaile } from "../controllers/itemController.js";

itemRouter.get("/item/:id", itemDetaile);

export default itemRouter;
