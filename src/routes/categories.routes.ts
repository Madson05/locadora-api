import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";

const routerCategories = Router();

routerCategories.post("/", createCategoryController.execute)

export default routerCategories;
