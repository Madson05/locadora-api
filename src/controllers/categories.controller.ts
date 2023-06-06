import { Request, Response } from "express";
import categoriesRepository from "../repositories/categories.repository";


import categoriesService from "../repositories/categories.repository";
import CreateCategoryService from "../services/CreateCategory.service";


class categoriesController {

  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    
    
    res.send(await CreateCategoryService.execute(name, description));

  }

  async list(req: Request, res: Response) {
    res.send(await categoriesRepository.list())
    
  }

  
}

export default new categoriesController();
