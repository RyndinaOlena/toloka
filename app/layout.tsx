import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./_components/header";
import Footer from "./_components/footer";
import clsx from "clsx";
import "./globals.css";
import style from './_styles/scss/main.module.scss'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toloka",
  description: "Help us make the world a better place",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(style.mainStyle, inter.className)}>
        <Header />
        <main className={style.content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
