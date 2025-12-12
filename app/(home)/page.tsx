import { TypographyH1, TypographyH4 } from '@/components/ui/typography';
import '../ui/global.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
  const title = 'Bring Your Ideas to Life Or Discover Ready-Made Creations';

  return (
    <div className="flex flex-row gap-64 h-screen">
      <div className="flex flex-col gap-9 self-center">
        <TypographyH1>{title}</TypographyH1>
        <TypographyH4 className="pr-28">
          With <b>Roqart</b>, bring your 3D ideas to life or explore our store
          filled with ready-made creations crafted by talented designers.
        </TypographyH4>
        <div className="flex flex-row gap-3">
          <Button>Store</Button>
          <Button variant="outline">Contact a Designer</Button>
        </div>
      </div>
      <Image alt="Dragon" height={700} width={700} src="/diablada-item.png" />
    </div>
  );
}
