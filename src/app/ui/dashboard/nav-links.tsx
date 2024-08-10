"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { inter } from "@/app/ui/fonts";
const links = [
  { name: "Головна", href: "/dashboard/(overview)" },
  {
    name: "Про нас",
    href: "/dashboard/header/about",
  },
  { name: "Розклад", href: "/dashboard/header/schedule" },
  {
    name: "Блог",
    href: "/dashboard/header/blog",
  },
];
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `text-black text-lg font-medium text-slate-800 hover:text-lime-600 grow mx-38 ${inter.className} `,
              {
                "text-lime-600": pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
