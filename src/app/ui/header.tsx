// components/Header.js
// import '../styles/components/Header.module.scss';

import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";
import React from "react";

import styles from "../styles/scss/Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className="header-logo">
        <Image src={`/logo.png`} alt="logo" width={55} height={55} />
        <Link
          className={`text-black text-4xl font-extrabold text-slate-800 ${nunito.className}`}
          href={"/"}
        >
          Toloka
        </Link>
      </div>
      <div className="header-navigation">
        <NavLinks />
      </div>
      <div className="header-user">
        <Link
          href="/"
          className={`text-white pb-2.5 pt-2.5 pl-9 pr-9  bg-lime-700 rounded-full ${nunito.className}`}
        >
          УВІЙТИ
        </Link>
      </div>
    </div>
  );
}

export default Header;
