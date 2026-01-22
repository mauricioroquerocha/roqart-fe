import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
} from '@/components/ui/typography';
import Image from 'next/image';

export default function DesignersPage() {
  const designers = [
    {
      name: 'Mauricio Roque',
      image: '/diablada-item.png',
      bio: 'Designer focused on creating traditional mask models and cultural pieces.',
    },
    {
      name: 'Lucía Andrade',
      image: '/designers/lucia.png',
      bio: '3D artist specialized in jewelry, ornaments, and small decorative objects.',
    },
    {
      name: 'Diego Quispe',
      image: '/designers/diego.png',
      bio: 'Industrial designer creating functional prints and mechanical components.',
    },
    {
      name: 'Camila Flores',
      image: '/designers/camila.png',
      bio: 'Character and toy designer focused on stylized and collectible models.',
    },
    {
      name: 'Andrés Molina',
      image: '/designers/andres.png',
      bio: 'Creator of props, cosplay accessories, and detailed fantasy models.',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <TypographyH1>Meet our designers</TypographyH1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {designers.map((designer) => (
          <div
            key={designer.name}
            className="size-fit overflow-hidden rounded-xl border border-border"
          >
            <div className="relative flex h-96 w-full justify-center bg-background px-5 py-2">
              <Image alt="" fill object-fit="cover" src={designer.image} />
            </div>
            <div className="h-32 w-96 bg-backgroundSecondary px-5 py-3">
              <TypographyH3 className="line-clamp-1 overflow-hidden text-ellipsis">
                {designer.name}
              </TypographyH3>
              <TypographyH4 className=" overflow-hidden text-ellipsis text-gray-600">
                {designer.bio}
              </TypographyH4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
