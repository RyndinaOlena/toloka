import Image from "next/image";
import { inter, nunito } from "./fonts";
import NavLinks from "./nav-links";
import Link from "next/link";
import React from "react";

import styles from "../_styles/scss/Header.module.scss";
import clsx from "clsx";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogoWrapper}>
        <Link className={styles.headerLogo} href={"/"}>
          <Image src={`/logo.png`} alt="logo" width={55} height={55} />
          <span className={clsx(styles.headerLogoText, inter.className)}>
            Toloka
          </span>
        </Link>
      </div>
      <div className={styles.headerNavigation}>
        <NavLinks />
      </div>
      <div className={styles.headerAccount}>
        <Link href="/">УВІЙТИ</Link>
      </div>
    </div>
  );
}

export default Header;
