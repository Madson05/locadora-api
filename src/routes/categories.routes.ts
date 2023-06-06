import { Router } from "express";
import createCategoryController from "../controllers/categories.controller";

const routerCategories = Router();

routerCategories.post("/", createCategoryController.create)
routerCategories.get("/", createCategoryController.list)

export default routerCategories;
