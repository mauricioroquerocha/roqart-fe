'use client';

import { selectCurrency } from '@/lib/redux/slices/currencySlice';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import { ProductApi } from '@/lib/api/ProductApi';
import { getCurrencySymbol, Product, Variant } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/redux/hooks';
import { Button } from '@/components/ui/button';

export default function ProductClient({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>();

  const currency = useAppSelector(selectCurrency);
  const [product, setProduct] = useState<Product>();
  const currencySymbol = getCurrencySymbol(currency);

  useEffect(() => {
    async function fetchProduct() {
      const { id } = await params;

      const { data } = await ProductApi.getProductById(id);
      setProduct(data);
      setSelectedVariant(data.variants[0]);
    }
    fetchProduct();
  }, [params]);

  if (!product || !selectedVariant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 px-96">
      <div className="flex flex-row">
        <div className="relative h-[35rem] w-[32rem] rounded-xl border border-border bg-background">
          <Image
            alt=""
            fill
            objectFit="cover"
            className="rounded-xl border border-border"
            src={
              selectedVariant?.variant_images?.thumbnail?.trim()
                ? selectedVariant.variant_images.thumbnail
                : product.thumbnail
            }
          />
        </div>
        <div className="flex w-2/5 flex-col px-10 py-6">
          <TypographyH1>{product.title}</TypographyH1>
          <TypographyH2 className="text-gray-600">
            {selectedVariant.title}
          </TypographyH2>
          <TypographyH2>{`${selectedVariant.price} ${currencySymbol}`}</TypographyH2>
          <TypographyP className="h-4/5 text-gray-600">
            {product.description}
          </TypographyP>
          <Button className="text-white">Add to Cart</Button>
        </div>
      </div>
      <Carousel>
        <CarouselContent className="-ml-0">
          {product.variants.map((variant) => {
            return (
              <CarouselItem
                key={variant.id}
                className="basis-1/8 relative h-44 w-40 cursor-pointer rounded-xl border border-border bg-background p-1"
                onClick={() => {
                  setSelectedVariant(variant);
                }}
              >
                <Image
                  alt=""
                  fill
                  objectFit="cover"
                  src={
                    variant.variant_images?.thumbnail?.trim()
                      ? variant.variant_images.thumbnail
                      : product.thumbnail
                  }
                  className="rounded-xl"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
