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
  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={{ height: isHeaderMenuOpened ? "100vh" : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="pc:hidden absolute top-0 left-0 z-[7] w-[100vw] px-4 pc:px-8 overflow-hidden bg-blue-light-custom"
    >
      <div className="relative flex flex-col justify-between h-full pt-[65px] pb-[140px]">
        <Menu
          onClick={() => setIsHeaderMenuOpened(false)}
          className="flex flex-col gap-6 items-center mt-[65px]"
        />
        <SocialList />
      </div>
    </motion.nav>
  );
};
