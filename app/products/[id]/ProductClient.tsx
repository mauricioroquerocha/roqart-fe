'use client';

import { Button } from '@/components/ui/Button';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import { Product } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductClient({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const currencySymbol = '$';

  return (
    <div className="flex flex-col gap-4 px-96">
      <div className="flex flex-row">
        <div className="relative h-[35rem] w-[32rem] rounded-xl border border-border bg-background">
          {/* variant image */}
          <Image alt="" fill objectFit="cover" src="/diablada-item.png" />
        </div>
        <div className="flex w-2/5 flex-col px-10 py-6">
          <TypographyH1>{product.title}</TypographyH1>
          <TypographyH2>{`${selectedVariant.price} ${currencySymbol}`}</TypographyH2>
          <TypographyP className="h-4/5 text-gray-600">
            {product.description}
          </TypographyP>
          <Button className="text-white">Add to Cart</Button>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <ul className="flex w-fit flex-row gap-4">
          {product.variants.map((variant) => {
            return (
              <li
                key={variant.id}
                className="relative size-44 rounded-xl border border-border bg-background p-1"
              >
                <div
                  onClick={() => {
                    setSelectedVariant(variant);
                  }}
                  className="cursor-pointer"
                >
                  <Image
                    alt=""
                    fill
                    objectFit="cover"
                    src="/diablada-item.png"
                  />
                  <TypographyH1>{variant.title}</TypographyH1>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
