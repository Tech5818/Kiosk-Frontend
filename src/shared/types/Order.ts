import { OrderMenu } from "./OrderMenu";
import { Table } from "./Table";

export enum OrderStatus {
  PENDING,
  CANCELED,
  COMPLETED,
}

export interface Order {
  id: number;
  table: Table;
  status: OrderStatus;
  orderMenus: OrderMenu[];
}
