import { Request, Response } from "express";
import ICreateCategore from "../@types/ICreateCategore";
import categoriesRepository from "../repositories/categories.repository";

import CreateCategoryService from "../services/CreateCategory.service";


class categoriesController {

  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const category: ICreateCategore = {name, description};
    
    res.send(await CreateCategoryService.execute(category));

  }

  async list(req: Request, res: Response) {
    res.send(await categoriesRepository.list())
    
  }

  
}

export default new categoriesController();
