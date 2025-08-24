"use client";

import { navList } from "../data/navList";

export const Menu = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const handleLinkClick = (id: string) => {
    if (onClick) onClick();

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul className={`${className}`}>
      {navList.map((content, idx) => {
        return (
          <li key={idx}>
            <button
              onClick={() => handleLinkClick(content.path)}
              className=" uppercase font-montserrat text-xs"
            >
              {content.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
