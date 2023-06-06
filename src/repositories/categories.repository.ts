import Category from "../models/Category";

class categoriesRepository{
  private categories: Category[];
  constructor(){
    this.categories = [];
  }
  
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