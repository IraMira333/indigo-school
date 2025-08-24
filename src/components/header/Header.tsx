"use client";

import { IconLogo } from "../shared/icons/IconLogo";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <header className="relative  ">
      <div className="h-[64px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto  flex items-center justify-between ">
        <IconLogo className="relative z-10 w-12 tab:w-[92px]" />

        <nav className="flex tab:gap-5 pc:gap-8 justify-end items-center ">
          <Navbar />
        </nav>
      </div>
    </header>
  );
};
