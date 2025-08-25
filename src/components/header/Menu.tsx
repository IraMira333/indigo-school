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
            {navList.map(item => (
                <li key={item.name} className="group uppercase">
                    <a
                        href={`#${item.path}`}
                        onClick={() => handleLinkClick(`#${item.path}`)}
                        className="transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};
