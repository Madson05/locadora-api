import { Request, Response } from "express";

import Category from "../models/Category";
import createCategoryRepository from "../repositories/createCategory.repository";


class CriateCategoryController {

  

  async execute(req: Request, res: Response) {
    const { name, description } = req.body;


    res.send(await createCategoryRepository.create(name, description))

  }
}

export default new CriateCategoryController();
