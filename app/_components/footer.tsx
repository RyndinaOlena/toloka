"use client";
import React from "react";
import Image from "next/image";
import { nunito, inter } from "./fonts";

import Link from "next/link";
import clsx from "clsx";

import styles from "../_styles/scss/Footer.module.scss";
import NotFound from "../not-found";
import { usePathname } from "next/navigation";

import { PiInstagramLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

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
  {
    name: "Контакти",
    href: "/",
  },
];

const Footer = () => {
  const pathname = usePathname();
  if (!pathname) {
    <NotFound />;
  }
  return (
    <div>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo_wrapper}>
          <Link className={styles.header_logo} href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={55} height={55} />
            <span className={clsx(styles.header_logo_text, nunito.className)}>
              Toloka
            </span>
          </Link>
          <p className={styles.text_logo}>
            Разом ми сильніші і можемо досягти
            <br /> чого завгодно, бо ми українці!
          </p>
        </div>

        <div className={styles.footer_navigation_container}>
          <div className={styles.navigation}>
            <div className={styles.navigation_link}>
              <h2 className={clsx(styles.navigation_title, nunito.className)}>
                навігація
              </h2>
              {links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(styles.footer_navigation, inter.className, {
                      [styles.navLinks_selected]: pathname === link.href,
                    })}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className={styles.navigation_container}>
              <h2
                className={clsx(styles.navigation_title_non, nunito.className)}
              >
                Ми в соцмережах
              </h2>
              <div />
              <div className={styles.social_icon_container}>
                <div className={styles.social_icon_img}>
                  <PiInstagramLogoBold />
                </div>
                <span className={styles.social_text}>Instagam</span>
              </div>

              <div className={styles.social_icon_container}>
                <div className={styles.social_icon_img}>
                  <FaFacebookF />
                </div>
                <span className={styles.social_text}>Facebook</span>
              </div>

              <div className={styles.social_icon_container}>
                <div className={styles.social_icon_img}>
                  <FaTwitter />
                </div>
                <span className={styles.social_text}>Twitter</span>
              </div>

              <div className={styles.social_icon_container}>
                <div className={styles.social_icon_img}>
                  <FaYoutube />
                </div>
                <span className={styles.social_text}>Youtube</span>
              </div>

              <div className={styles.social_icon_container}>
                <div className={styles.social_icon_img}>
                  <FaLinkedinIn />
                </div>
                <span className={styles.social_text}>LinkedIn</span>
              </div>
            </div>
            <div className={styles.address}>
              <h2 className={clsx(styles.navigation_title, nunito.className)}>
                Звʼязатись з нами
              </h2>
              <h3 className={styles.address_text}>м. Миколаїв</h3>
              <h3 className={styles.address_text}>toloka@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <h3 className={styles.footer_bottom_text}>
          Copyright © 2024 Toloka. All Right Reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
