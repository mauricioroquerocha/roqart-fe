import Image from 'next/image';
import { Separator } from './separator';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './navigation-menu';
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons';

const Footer = () => {
  return (
    <footer className="bg-background shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <div className="relative aspect-[4/1] h-8 sm:h-10 md:h-12 lg:h-14">
          <Link href="/">
            <Image src="/logo.png" alt="logo" object-fit="cover" fill></Image>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="gap-12">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-primary" href="/store">
                Store
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
            <NavigationMenuLink>Custom Orders</NavigationMenuLink>
          </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink className="text-primary" href="/designers">
                Designers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-primary" href="/about_us">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink>help</NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <a href="#">
            <SiFacebook className="size-5" />
          </a>
          <a href="#">
            <SiInstagram className="size-5" />
          </a>
          <a href="#">
            <SiX className="size-5" />
          </a>
          <a href="#">
            <SiYoutube className="size-5" />
          </a>
        </div>
      </div>

      <Separator></Separator>

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{' '}
          <a href="#" className="hover:underline">
            roqart
          </a>
          , Making real your imagination.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
