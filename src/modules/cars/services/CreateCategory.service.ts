import ICreateCategore from "../../../@types/ICreateCategore";
import Category from "../models/Category";
import categoriesRepository from "../repositories/categories.repository";

class CreateCategoryService {
  constructor(private categoriesRepository: categoriesRepository) {}

  public async execute(
    category: ICreateCategore
  ): Promise<Category | { error: string }> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      category.name
    );
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }
    return await this.categoriesRepository.create(category);
  }
  // este metodo será removido
  list() {
    return this.categoriesRepository.list();
  }
}

export default CreateCategoryService;
