import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function AppNavbar() {
  const routes = [
    { name: "Home", href: "/" },
    { name: "Games", href: "/games" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <NavigationMenu className="max-sm:hidden  bg-foreground fixed">
      <NavigationMenuList>
        {routes.map((route, index) => {
          return (
            <NavigationMenuItem
              key={index}
              className="w-32 h-10 rounded-lg text-center bg-[#D9D9D9]"
            >
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink>{route.name}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
