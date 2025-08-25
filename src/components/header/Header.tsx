"use client";

import { IconLogo } from "../shared/icons/IconLogo";
import Navbar from "./Navbar";

export const Header = () => {
    return (
        <header className="relative">
            <div className="pc:px-10 pc:max-w-[1440px] mx-auto flex h-[64px] items-center justify-between px-4">
                <IconLogo className="relative z-10 w-12" />

                <nav className="pc:gap-8 flex items-center justify-end">
                    <Navbar />
                </nav>
            </div>
        </header>
    );
};
