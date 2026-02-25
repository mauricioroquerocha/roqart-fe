import { TypographyH1, TypographyH4 } from '@/components/ui/typography';
import '../ui/global.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
  const title = 'Bring Your Ideas to Life Or Discover Ready-Made Creations';

  return (
    <div className="flex flex-col items-center md:flex-row md:gap-10 lg:flex-row xl:flex-row xl:items-start xl:gap-0">
      <div className="flex flex-col gap-9 self-center md:w-2/3 md:gap-10 lg:gap-10 lg:px-0 xl:gap-10 xl:px-0">
        <TypographyH1 className="text-center md:w-full lg:w-full xl:w-1/2 xl:text-left">
          {title}
        </TypographyH1>
        <TypographyH4 className="text-center md:w-full lg:w-full xl:w-1/2 xl:text-left ">
          With <b>Roqart</b>, bring your 3D ideas to life or explore our store
          filled with ready-made creations crafted by talented designers.
        </TypographyH4>
        <div className="flex flex-row gap-3 self-center xl:self-start ">
          <Button>Store</Button>
          <Button variant="outline">Contact a Designer</Button>
        </div>
      </div>
      <div className="relative aspect-square w-96 lg:w-[900px] xl:w-[900px]">
        <Image
          src="/diablada-item.png"
          alt="Dragon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
