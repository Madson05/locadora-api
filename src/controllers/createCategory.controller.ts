import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

const categories = [];

class CriateCategoryController {
  execute(req: Request, res: Response) {
    const { name, description } = req.body;

    const category = {
      id: uuidV4(),
      name,
      description
    };
    categories.push({
      category
    });
    return res.status(201).send();
  }
}

export default new CriateCategoryController();
