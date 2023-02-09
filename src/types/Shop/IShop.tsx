export interface IShopResponse {
  data: IShop[];
  count: number;
}

export interface IShop {
  id: number;
  title: string;
  street: string;
  phone: string;
  imageUrl: string;
  email: string;
}
