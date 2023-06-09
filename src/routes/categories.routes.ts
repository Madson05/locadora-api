import { Router } from "express";
import categoriesControllerInstance from "../modules/cars/factories/categories.factory";

const routerCategories = Router();

routerCategories.post("/", categoriesControllerInstance.create);
routerCategories.get("/", categoriesControllerInstance.list);

export default routerCategories;
