import ProductClient from './ProductClient';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProductClient params={params} />;
  //Rest of the page
}
