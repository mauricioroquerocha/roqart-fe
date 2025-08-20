import { TypographyH3, TypographyH4 } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  url: string;
  title: string;
  description: string;
  price: string;
  thumbnail: string;
};

export default function ProductCard({
  url,
  title,
  description,
  price,
  thumbnail,
}: Props) {
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
