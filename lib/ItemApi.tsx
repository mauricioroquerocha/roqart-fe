import { Item, Paginated } from "@/types";
import { Api } from "./Api";

export class ItemApi {
  static async getItem(id: string) {
    const res = await fetch(`https://api.example.com/items/${id}`);
    return res.json();
  }

  static async getAllItems() : Promise<Paginated<Item>> {
    return Api.get<Paginated<Item>>("/items");
  }

   // static async listItems(page = 1, pageSize = 10): Promise<PaginatedItems> {
  //   return BaseAPI.get(`/items?page=${page}&pageSize=${pageSize}`);
  // }
}