'use client';

import { TypographyH3, TypographyH4 } from '@/components/ui/typography';
import { formatPriceRange } from '@/lib/utils';
import { getCurrencySymbol, Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { selectCurrency } from '../../lib/redux/slices/currencySlice';
import { useAppSelector } from '@/lib/redux/hooks';

type Props = {
  url: string;
  product: Product;
};

export default function ProductCard({ url, product }: Props) {
  const currency = useAppSelector(selectCurrency);
  const [price, setPrice] = useState<string>();
  const { title, thumbnail, description } = product;

  useEffect(() => {
    setPrice(formatPriceRange(product.priceRange, getCurrencySymbol(currency)));
  }, [product.priceRange, currency]);

  return (
    <Link href={url}>
      <div className="size-fit overflow-hidden rounded-xl border border-border">
        <div className="relative flex h-48 w-full justify-center bg-background px-5 py-2">
          <Image alt="" fill object-fit="cover" src={thumbnail} />
        </div>
        <div className="h-24 w-56 bg-backgroundSecondary px-5 py-3">
          <TypographyH3 className="line-clamp-1 overflow-hidden text-ellipsis">
            {title}
          </TypographyH3>
          <TypographyH4 className="line-clamp-1 overflow-hidden text-ellipsis text-gray-600">
            {description}
          </TypographyH4>
          <TypographyH3 className="line-clamp-1 overflow-hidden text-ellipsis">
            {price}
          </TypographyH3>
        </div>
      </div>
    </Link>
  );
}
