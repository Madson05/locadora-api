import Category from "../models/Category";

class CreateCategoryRepository{
  private categories: Category[] = [];
  public async create(name: string, description: string): Promise<Category>{
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });
    this.categories.push(category);
    
    return category;
  }
}

export default new CreateCategoryRepository();