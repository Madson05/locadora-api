import ICreateCategore from "../@types/ICreateCategore";
import Category from "../models/Category";
import categoriesRepository from "../repositories/categories.repository";

class CreateCategoryService{

  public async execute(category: ICreateCategore): Promise<Category| {error: string}>{
    const categoryAlreadyExists = await categoriesRepository.findByName(category.name);
    if(categoryAlreadyExists){
      return {error: "Category already exists"};
    }
    return await categoriesRepository.create(category);
  }

}

export default new CreateCategoryService 