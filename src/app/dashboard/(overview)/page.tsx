import React from "react";
import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/dashboard/nav-links";

import Link from "next/link";
const Head = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center align-center space-x-2 p-2 grow">
        <Image src={`/logo.png`} alt="logo" width={55} height={55} />
        <h1
          className={`text-black text-4xl font-extrabold text-slate-800  ${nunito.className}`}
        >
          Toloka
        </h1>
      </div>
      <div className="flex-1 text-center ">
        <NavLinks />
      </div>
      <div className="flex-1 text-right">
        <Link
          href="/"
          className={`text-white pb-2.5 pt-2.5 pl-9 pr-9  bg-lime-700 rounded-full ${nunito.className}`}
        >
          УВІЙТИ
        </Link>
      </div>
    </div>
  );
};

export default Head;
