import { Request, Response } from "express";


import createCategoryRepository from "../repositories/categories.repository";


class categoriesController {

  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const categoryAlreadyExists = await createCategoryRepository.findByName(name);
    if(categoryAlreadyExists){
      return res.status(400).json({error: "Category already exists"});
    }
    
    res.send(await createCategoryRepository.create(name, description))

  }

  async list(req: Request, res: Response) {
    res.send(await createCategoryRepository.list())
  }

  
}

export default new categoriesController();
