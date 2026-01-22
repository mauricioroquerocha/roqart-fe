import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import { Circle } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-20 pb-6">
      <TypographyH1>About Us</TypographyH1>
      <div className="flex h-fit w-full flex-row items-stretch overflow-hidden rounded-xl bg-backgroundSecondary shadow-md">
        <div className="flex min-h-[30rem] w-1/2 flex-col justify-center p-16">
          <TypographyH2 className="self-center">Who We Are</TypographyH2>
          <TypographyP className="text-center">
            We are a 3D design and printing studio based in Cochabamba, Bolivia,
            bringing ideas to life through creativity, technology, and
            collaboration. Our platform brings together independent designers
            from different specialties, offering both custom-made designs and a
            growing catalog of ready-to-print models. We believe that 3D
            printing is more than a tool. It is a way to transform imagination
            into tangible objects.
          </TypographyP>
        </div>
        <div className="relative w-1/2">
          <Image
            src="/about_us/who_we_are.jpg"
            alt="Who we are"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
      <div className="flex h-fit w-full flex-row items-stretch overflow-hidden rounded-xl bg-backgroundSecondary shadow-md">
        <div className="relative w-1/2">
          <Image
            src="/about_us/what_we_do.jpg"
            alt="What we do"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="flex min-h-[30rem] w-1/2 flex-col p-16">
          <TypographyH2 className="self-center">What We Do</TypographyH2>
          <TypographyP className="text-center">We specialize in:</TypographyP>
          <TypographyP className="text-center">
            3D Design Services: Custom 3D modeling for personal, artistic, and
            functional purposes.
          </TypographyP>
          <TypographyP className="text-center">
            3D Printing: High-quality prints using modern equipment and
            carefully selected materials.
          </TypographyP>
          <TypographyP className="text-center">
            Designers: A curated space where designers show its specializations
            and comments.
          </TypographyP>
          <TypographyP className="text-center">
            Ready-Made Designs: A catalog of tested and optimized 3D models
            available for immediate purchase and printing.
          </TypographyP>
        </div>
      </div>
      <div className="flex h-fit w-full flex-row items-stretch overflow-hidden rounded-xl bg-backgroundSecondary shadow-md">
        <div className="flex min-h-[30rem] w-1/2 flex-col justify-center p-16">
          <TypographyH2 className="self-center">Our Designers</TypographyH2>
          <TypographyP className="text-center">
            Our team is made up of designers from diverse backgrounds,
            including: Artistic and cultural modeling, Functional and mechanical
            parts, Decorative objects and collectibles, Prototypes and custom
            solutions, Each designer brings their own style, experience, and
            creativity, allowing us to offer a wide variety of designs in one
            place.
          </TypographyP>
        </div>
        <div className="relative w-1/2">
          <Image
            src="/about_us/our_designers.jpg"
            alt="What we do"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
      <div className="-mx-28 flex h-fit flex-row items-stretch overflow-hidden rounded-xl bg-backgroundSecondary shadow-md">
        <div className="flex min-h-[30rem] w-1/2 flex-col justify-center p-16">
          <TypographyH2 className="self-center">Our Mission</TypographyH2>
          <TypographyP className="text-center">
            To empower designers and make 3D design and printing accessible to
            everyone, while delivering high-quality products that meet real
            needs. We aim to connect creativity with technology, supporting
            local talent and encouraging innovation in Bolivia.
          </TypographyP>
        </div>
        <div className="flex min-h-[30rem] w-1/2 flex-col justify-center p-16">
          <TypographyH2 className="self-center">Our Vision</TypographyH2>
          <TypographyP className="text-center">
            To become a reference platform for 3D design and printing in Bolivia
            and Latin America, fostering a community where designers and clients
            grow together.
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <TypographyH2>Why Choose Us</TypographyH2>
        <div className="flex flex-row items-center gap-2">
          <Circle className="mt-6"></Circle>
          <TypographyP className="text-center">
            Based in Cochabamba, Bolivia
          </TypographyP>
          <Circle className="mt-6"></Circle>
          <TypographyP className="text-center">
            Multiple designers, multiple styles
          </TypographyP>
          <Circle className="mt-6"></Circle>
          <TypographyP className="text-center">
            Professional 3D printing quality
          </TypographyP>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Circle className="mt-6"></Circle>
          <TypographyP className="text-center">
            Optimized and tested designs
          </TypographyP>
          <Circle className="mt-6"></Circle>
          <TypographyP className="text-center">
            Support for local and independent creators
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
