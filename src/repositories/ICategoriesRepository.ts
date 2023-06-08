import ICreateCategore from "../@types/ICreateCategore";
import Category from "../models/Category";

export interface ICategoryRepository{
  create: (category: ICreateCategore) => Promise<Category>;
  list: () => Promise<Category[]>;
  findByName: (name: string) => Promise<Category | null>;
}