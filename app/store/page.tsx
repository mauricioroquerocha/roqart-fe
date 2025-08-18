import { ProductApi } from '@/lib/ProductApi';
import ProductCard from './ProductCard';
import { Product } from '@/types';
import { formatPriceRange } from '@/lib/utils';

export default async function StorePage() {
  const { data: products } = await ProductApi.getAllProducts();

  return (
    <div className="flex flex-row justify-center px-28">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            url={`/products/${product.id}`}
            name={product.title}
            description={product.description}
            price={formatPriceRange(product.priceRange)}
          ></ProductCard>
        ))}
      </div>
      <div className="h-fit w-80">
        <div className="h-96">{/* Filters */}</div>
      </div>
    </div>
  );
}
