import React from "react";
import Image from "next/image";
import { nunito } from "./fonts";
import Link from "next/link";
import clsx from "clsx";

import styles from "../_styles/scss/Footer.module.scss";
const Footer = () => {
  return <div className={styles.footerContainer}>
    <div className={styles.footerLogoWrapper}>
      <Link className={styles.headerLogo} href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={55} height={55} />
        <span className={clsx(styles.headerLogoText, nunito.className)}>
          Toloka
        </span>
      </Link>
      <p className={styles.textLogo}>Разом ми сильніші і можемо досягти<br /> чого завгодно, бо ми українці!</p>
    </div>

  </div>;
};

export default Footer;
