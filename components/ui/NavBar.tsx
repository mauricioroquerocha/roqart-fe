import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="w-fill flex h-28 flex-row items-center justify-between gap-20 bg-background px-16 py-6 sm:px-20 md:px-24 lg:px-28">
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
          <NavigationMenuItem>
            <NavigationMenuLink>Custom Orders</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Designers</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>help</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Input
        id="search-input"
        className="w-64 bg-white placeholder-gray-400 border-primary"
        placeholder="Search"
        type="text"
      />
    </div>
  );
}
