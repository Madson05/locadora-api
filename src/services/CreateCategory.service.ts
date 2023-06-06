import categoriesRepository from "../repositories/categories.repository";

class CreateCategoryService{

  public async execute(name: string, description: string){
    const categoryAlreadyExists = await categoriesRepository.findByName(name);
    if(categoryAlreadyExists){
      return {error: "Category already exists"};
    }
    await categoriesRepository.create(name, description);
  }

}

export default new CreateCategoryService 