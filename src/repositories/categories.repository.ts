import ICreateCategore from "../@types/ICreateCategore";
import Category from "../models/Category";

class categoriesRepository{
  private categories: Category[];
  constructor(){
    this.categories = [];
  }
  
  public async create(category: ICreateCategore): Promise<Category>{
    const categoryCreated = new Category();
    Object.assign(categoryCreated, {
      ...category,
      created_at: new Date()
    });
    this.categories.push(categoryCreated);
    
    return categoryCreated;
  }

  public async list(): Promise<Category[]>{
    return this.categories;
  }

  public async findByName(name: string): Promise<Category | null>{
    const category = this.categories.find(category => category.name === name);
    if(!category){
      return null;
    }
    return category;
  }
}

export default new categoriesRepository();