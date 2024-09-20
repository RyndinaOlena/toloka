"use client";
import Link from "next/link";
import React from "react";
import styles from "../_styles/scss/Modal.module.scss";

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
const ModalComponent = (props: any) => {
  const { handleClose } = props;

  return (
    <div className={styles.menu_navigate}>
      <div className={styles.menu_navigate_link}>
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href} onClick={handleClose}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ModalComponent;
