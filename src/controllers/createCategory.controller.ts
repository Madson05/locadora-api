import { Request, Response } from "express";

const categories = [];

class CriateCategoryController {
  execute(req: Request, res: Response) {
    const { name, description } = req.body;

    categories.push({
      name,
      description,
    });
    return res.status(201).end();
  }
}

export default new CriateCategoryController();
