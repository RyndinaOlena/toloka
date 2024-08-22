"use client";
import Link from "next/link";
import clsx from "clsx";

import React from 'react';
import NotFound from '../not-found';
import { usePathname } from 'next/navigation';
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
const ModalComponent = (props: any) => {
    const { handleClose } = props;
    const pathname = usePathname();
    if (!pathname) {
        <NotFound />;
    }
    return (
        <div>
            <div className="flex">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(styles.headerNavigationMobile, {
                                [styles.navLinksSelected]: pathname === link.href,
                            })}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </div>


    );
};

export default ModalComponent;
