import { motion } from "framer-motion";

import { SocialList } from "../footer/SocialList";
import { Menu } from "./Menu";

export interface HeaderMenuProps {
    isHeaderMenuOpened: boolean;
    setIsHeaderMenuOpened: (_value: boolean) => void;
}

export const MobileMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    const handleMenuClick = () => {
        setIsHeaderMenuOpened(false);
    };
    return (
        <motion.nav
            initial={{ height: 0 }}
            animate={{ height: isHeaderMenuOpened ? "100vh" : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="pc:hidden pc:px-8 bg-blue-light-custom absolute top-0 left-0 z-[7] w-[100vw] overflow-hidden px-4"
        >
            <div className="relative flex h-full flex-col justify-between pt-[65px] pb-[140px]">
                <Menu
                    onClick={handleMenuClick}
                    className="mt-[65px] flex flex-col items-center gap-6"
                />
                <SocialList menu />
            </div>
        </motion.nav>
    );
};
