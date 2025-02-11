"use client";

import Link from "next/link";

const routes = [
  { name: "Home", href: "/home" },
  { name: "Games", href: "/games" },
  { name: "Blog", href: "/blog" },
];
export default function NavLinks() {
  return (
    <>
      {routes.map((route) => {
        return (
          <Link
            className="w-in mr-4 ml-4 h-12 bg-[#D9D9D9] mt-10 rounded-lg text-left ps-5 pt-2 text-4xl"
            key={route.name}
            href={route.href}
          ><p>{route.name}</p></Link>
        );
      })}
    </>
  );
}
