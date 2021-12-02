import { OrderListItem } from './order-list-item';

export interface Order {
  _id?: string;
  date?: Date;
  order?: string;
  user?: string;
  list: OrderListItem[];
}
