import { Request, Response } from "express";
import ICreateCategore from "../../../@types/ICreateCategore";
import CreateCategoryService from "../services/CreateCategory.service";

class categoriesController {
  constructor(private service: CreateCategoryService) {}

  create = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const category: ICreateCategore = { name, description };
    res.send(await this.service.execute(category));
  }

  list = async (req: Request, res: Response) => {
    res.send(await this.service.list())
  }
}

export default categoriesController;
