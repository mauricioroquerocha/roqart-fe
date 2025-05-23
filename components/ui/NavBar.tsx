import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import Link from "next/link"


export default function NavBar() {
  return (
    <div className="bg-background h-28 w-fill px-16 sm:px-20 md:px-24 lg:px-28 py-6 flex flex-row gap-20 items-center justify-between">
      <div className="relative h-8 sm:h-10 md:h-12 lg:h-14 aspect-[4/1]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            object-fit="cover"
            fill
        ></Image>
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-12">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-primary" href="/store">Store</NavigationMenuLink>
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
      <Input id="search-input" className="w-64 bg-white placeholder-gray-400 border-primary" placeholder="Search" type="text"/>
    </div>
  )
} 