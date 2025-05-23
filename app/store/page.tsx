import { ItemApi } from '@/lib/ItemApi';
import ItemCard from './ItemCard';
import { Item } from '@/types';

export default async function StorePage() {
  const items = (await ItemApi.getAllItems()).data;

  return (
    <div className="px-28 flex flex-row justify-center">
      <div className="grid grid-cols-5 gap-4">
        {items.map((item: Item) => (
          <ItemCard
            url={`/items/${item.id}`}
            name={item.name}
            description={item.decription}
          ></ItemCard>
        ))}
      </div>
      <div className="w-80 h-fit">
        <div className="h-96">{/* Filters */}</div>
      </div>
    </div>
  );
}
