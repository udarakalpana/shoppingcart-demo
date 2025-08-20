export interface IProduct {
  id: number;
  product_name: string;
  product_price: number;
}

export interface IProductProps {
  product: IProduct;
}

export interface ICartSliceState {
  products: IProduct[];
}
