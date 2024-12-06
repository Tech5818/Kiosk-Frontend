import { Category } from "./category";

export enum MenuType {
  NORMAL,
  NEW,
  SEASON,
  TIME,
}

export interface Menu {
  id: number;
  name: string;
  imgPath: string;
  price: number;
  type: MenuType;
  discount: number;
  calories: number;

  category: Category;
}
