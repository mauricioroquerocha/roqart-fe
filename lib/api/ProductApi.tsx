import {
  Product,
  Paginated,
  ProductResponse,
  CURRENCY_CODE,
  DEFAULT_CURRENCY,
} from '@/types';
import { Api } from './Api';

export const ProductApi = {
  // async getItem(id: string) {
  //   // const res = await fetch(`https://api.example.com/items/${id}`);
  //   return res.json(id);
  // },

  async getAllProducts(currency?: CURRENCY_CODE): Promise<Paginated<Product>> {
    const res = await Api.get<Paginated<Product>>('store/products', {
      currency: currency ?? DEFAULT_CURRENCY,
    });

    return res;
  },

  async getProductById(
    productId: string,
    currency?: CURRENCY_CODE
  ): Promise<ProductResponse> {
    const res = await Api.get<ProductResponse>(`store/products/${productId}`, {
      currency: currency ?? DEFAULT_CURRENCY,
    });

    return res;
  },

  // static async listItems(page = 1, pageSize = 10): Promise<PaginatedItems> {
  //   return BaseAPI.get(`/items?page=${page}&pageSize=${pageSize}`);
  // }
};
