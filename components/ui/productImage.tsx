import Image from 'next/image';

type Props = {
  height?: number;
  width?: number;
};

export default function ProductImage({ height, width }: Props) {
  if (height || width)
    return (
      <Image
        alt=""
        height={192}
        width={180}
        object-fit="cover"
        src="/diablada-item.png"
      />
    );
}
