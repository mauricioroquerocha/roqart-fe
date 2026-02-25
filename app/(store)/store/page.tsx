import { ProductApi } from '@/lib/api/ProductApi';
import { Product } from '@/types';
import ProductCard from './ProductCard';

export const dynamic = 'force-dynamic';

export default async function StorePage() {
  const { data: products } = await ProductApi.getAllProducts();

  return (
    <>
      {products.length === 0 ? (
        <div className="flex flex-row justify-center px-28">
          <p className="col-span-full h-fit text-center text-gray-500">
            No products available
          </p>
        </div>
      ) : (
        <div className="flex flex-row justify-center px-28">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5">
            {products.map((product: Product) => (
              <ProductCard
                key={product.id}
                url={`/products/${product.id}`}
                product={product}
              ></ProductCard>
            ))}
          </div>
          <div className="h-fit w-80">
            <div className="h-96">{/* Filters */}</div>
          </div>
        </div>
      )}
    </>
  );
}
