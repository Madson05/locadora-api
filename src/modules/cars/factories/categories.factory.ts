import categoriesController from "../controllers/categories.controller";
import CategoriesRepository from "../repositories/categories.repository";
import CreateCategoryService from "../services/CreateCategory.service";

const categoriesRepository = new CategoriesRepository();

const createCategoryService: CreateCategoryService = new CreateCategoryService(
  categoriesRepository
);
const categoriesControllerInstance = new categoriesController(
  createCategoryService
);

export default categoriesControllerInstance;
