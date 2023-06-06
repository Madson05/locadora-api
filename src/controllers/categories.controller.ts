import { Request, Response } from "express";


import categoriesService from "../repositories/categories.repository";
import CreateCategoryService from "../services/CreateCategory.service";


class categoriesController {

  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    
    
    res.send(await new CreateCategoryService().execute(name, description));

  }

  async list(req: Request, res: Response) {
    res.send(await createCategoryRepository.list())
  }

  
}

export default new categoriesController();
