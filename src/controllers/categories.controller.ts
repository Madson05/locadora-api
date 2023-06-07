import { Request, Response } from "express";
import ICreateCategore from "../@types/ICreateCategore";
import CategoriesRepository from "../repositories/categories.repository";

import CreateCategoryService from "../services/CreateCategory.service";


class categoriesController {

  async create(req: Request, res: Response) {

    const categoriesRepository = new CategoriesRepository();

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    const { name, description } = req.body;
    const category: ICreateCategore = {name, description};
    res.send(await createCategoryService.execute(category));

  }

  async list(req: Request, res: Response) {
    const categoriesRepository = new CategoriesRepository();
    res.send(await categoriesRepository.list())
  }

  
}

export default new categoriesController();
