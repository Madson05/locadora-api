import { Request, Response } from "express";


import createCategoryRepository from "../repositories/categories.repository";


class categoriesController {

  async create(req: Request, res: Response) {
    const { name, description } = req.body;


    res.send(await createCategoryRepository.create(name, description))

  }

  async list(req: Request, res: Response) {
    res.send(await createCategoryRepository.list())
  }

  
}

export default new categoriesController();
