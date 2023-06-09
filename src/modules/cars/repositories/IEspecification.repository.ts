import { Specification } from "../models/Specicification";

export interface IEspecificationRepository {
  create: (specification: ICreateSpecificationDTO) => Promise<Specification>;
  findByName: (name: string) => Promise<Specification[] | null>;
  findById: (ids: string) => Promise<Specification>;
}

export interface ICreateSpecificationDTO{
  name: string;
  description: string;
}