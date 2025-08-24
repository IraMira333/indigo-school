"use client";
import { ArrowIcon } from "../shared/icons/ArrowIcon";

export const UpButton = ({ className }: { className?: string }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
            aria-label="scroll to top button"
            className={`group text-light-text relative flex h-[50px] w-[50px] -rotate-90 items-center justify-center overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-[0_0_12px_3px_rgba(245,245,245,0.5)] focus-visible:shadow-[0_0_12px_3px_rgba(245,245,245,0.5)] ${className}`}
            onClick={scrollToTop}
        >
            <ArrowIcon />
        </button>
    );
};
