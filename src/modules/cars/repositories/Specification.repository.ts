import { Specification } from "../models/Specicification";
import { ICreateSpecificationDTO, IEspecificationRepository } from "./IEspecification.repository";

export class SpecificationRepository implements IEspecificationRepository{

  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }

  create = async ({ name, description }: ICreateSpecificationDTO): Promise<Specification> => {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
    return specification;
  }

  findByName = async (name: string): Promise<Specification[] | null> => {
    const specification = this.specifications.filter((specification) => specification.name === name);
    if (!specification) {
      return null;
    }
    return specification;
  }

  findById = async (id: string): Promise<Specification> => {
    const specification = this.specifications.find((specification) => specification.id === id);
    if (!specification) {
      throw new Error("Specification not found");
    }
    return specification;
  }


}