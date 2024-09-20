"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import styles from "../_styles/scss/Header.module.scss";
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
            className={clsx(styles.header_navigation, {
              [styles.nav_links_selected]: pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
