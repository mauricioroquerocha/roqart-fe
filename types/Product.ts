import { Variant } from './Variant';

export interface ProductResponse {
  data: Product;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  priceRange: ProductPriceRange;
  variants: Variant[];
  thumbnail: string;
}

export interface ProductPriceRange {
  min: number;
  max: number;
}

export interface CreateItemDto {
  name: string;
  description: string;
  price: number;
}
