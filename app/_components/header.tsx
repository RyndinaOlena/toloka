"use client";
import Image from "next/image";
import { inter, nunito } from "./fonts";
import NavLinks from "./nav-links";
import Link from "next/link";
import React, { useState } from "react";

import scss from "../_styles/scss/button.module.scss";
import styles from "../_styles/scss/Header.module.scss";
import clsx from "clsx";
import Modal from "./modal";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@mui/material/Button";
import ModalComponent from "../_components/modal"; // Проверьте путь к вашему компоненту
import { IoIosArrowUp } from "react-icons/io";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogoWrapper}>
          <Link className={styles.headerLogo} href={"/"}>
            <Image src={`/logo.png`} alt="logo" width={55} height={55} />
            <span className={clsx(styles.headerLogoText, nunito.className)}>
              Toloka
            </span>
          </Link>
        </div>
        <div>
          <NavLinks />
        </div>
        <div className={styles.headerAccount}>
          <Link className={scss.btnLogin} href="/">
            УВІЙТИ
          </Link>
        </div>
        <div>
          <Button
            variant="contained"
            className={styles.navigation_btn}
            onClick={toggleMenu}
          >
            Навігація
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </Button>
        </div>
      </div>
      <div>
        {open && <ModalComponent open={open} handleClose={toggleMenu} />}
      </div>
    </div>
  );
}

export default Header;
