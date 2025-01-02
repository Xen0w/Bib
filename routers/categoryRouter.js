import {
    AllCategory,
    categoryCreatePost,
    categoryCreateGet,
    openCategory,
} from "../controllers/categoryController.js";
import { Router } from "express";
const categoryRouter = Router();

categoryRouter.get("/", AllCategory);
categoryRouter.get("/category", categoryCreateGet);
categoryRouter.post("/category", categoryCreatePost);
categoryRouter.get("/:category_name/:id", openCategory);

export default categoryRouter;
