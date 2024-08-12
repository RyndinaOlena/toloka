"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { inter } from "./fonts";
const links = [
  { name: "Головна", href: "/" },
  {
    name: "Про нас",
    href: "/about",
  },
  { name: "Розклад", href: "/schedule" },
  {
    name: "Блог",
    href: "/blog",
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
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
