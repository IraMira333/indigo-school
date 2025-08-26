"use client";

import { navList } from "../data/navList";

export const Menu = ({
    className,
    onClick,
    header,
}: {
    className?: string;
    onClick?: () => void;
    header?: boolean;
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
            {header && (
                <li
                    key="phone"
                    className="group ml-16 flex flex-col items-center justify-center gap-[6px]"
                >
                    <a
                        href="tel:+380631234567"
                        className="flex h-16 w-16 -rotate-90 items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#0d2098"
                            className="h-11 w-11"
                        >
                            <path
                                fill="#0d2098"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                        </svg>
                    </a>
                </li>
            )}
        </ul>
    );
};
