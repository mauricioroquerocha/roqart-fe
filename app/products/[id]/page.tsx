import { ProductApi } from '@/lib/ProductApi';
import ProductClient from './ProductClient';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product } = await ProductApi.getProductById(id);

  return <ProductClient product={product} />;
}
