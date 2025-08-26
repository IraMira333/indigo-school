"use client";
import { useEffect, useState } from "react";

import { Menu } from "./Menu";
import { MenuBurgerButton } from "./MenuBurgerButton";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        document.body.style.overflow = isHeaderMenuOpened ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isHeaderMenuOpened]);

    return (
        <>
            <div className="pc:hidden">
                <MenuBurgerButton
                    isHeaderMenuOpened={isHeaderMenuOpened}
                    toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                />
            </div>
            <MobileMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />

            <Menu
                header
                className="pc:flex pc:gap-5 pc:text-xl hidden items-center font-semibold"
            />
        </>
    );
};

export default Navbar;
