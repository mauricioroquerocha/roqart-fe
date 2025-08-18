import { Product, Paginated, ProductResponse } from '@/types';
import { Api } from './Api';

export const ProductApi = {
  // async getItem(id: string) {
  //   // const res = await fetch(`https://api.example.com/items/${id}`);
  //   return res.json(id);
  // },

  async getAllProducts(): Promise<Paginated<Product>> {
    const res = await Api.get<Paginated<Product>>('store/products');

    return res;
  },

  async getProductById(productId: string): Promise<ProductResponse> {
    const res = await Api.get<ProductResponse>(`store/products/${productId}`);

    return res;
  },

  // static async listItems(page = 1, pageSize = 10): Promise<PaginatedItems> {
  //   return BaseAPI.get(`/items?page=${page}&pageSize=${pageSize}`);
  // }
};
