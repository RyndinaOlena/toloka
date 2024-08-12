import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./_components/header";
import Footer from "./_components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toloka",
  description: "Help us make the world a better place",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
