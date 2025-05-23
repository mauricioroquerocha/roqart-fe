import { TypographyH3, TypographyH4 } from '@/components/ui/typography';
import Link from 'next/link';

type Props = {
  url: string;
  name: string;
  description: string;
};

export default function ItemCard({ url, name, description }: Props) {
  return (
    <Link href={url}>
      <div className="w-fit h-fit rounded-xl overflow-hidden border border-border">
        <div className="w-full h-full py-2 px-5 bg-background">
          <img className="h-48 w-44" src="/diablada-item.png" />
        </div>
        <div className="bg-backgroundSecondary py-3 px-5">
          <TypographyH3>{name}</TypographyH3>
          <TypographyH4>{description}</TypographyH4>
        </div>
      </div>
    </Link>
  );
}
