import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { IconClose } from "./icons/IconClose";

interface ModalBaseProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    className?: string;
}

export const ModalBase = ({
    isModalOpen,
    onCloseModal,
    className = "",
    children,
}: PropsWithChildren<ModalBaseProps>) => {
    const onClickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === "backdrop") {
            onCloseModal();
        }
    };
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isModalOpen]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCloseModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isModalOpen ? { opacity: 1 } : { opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-50 flex h-lvh w-dvw items-center justify-center bg-black/70"
                    onClick={onClickBackdrop}
                    aria-label="backdrop"
                    id="backdrop"
                >
                    <div
                        className={twMerge(
                            "bg-blue-light-custom pc:max-w-[900px] relative z-[10] w-full max-w-[360px] p-5",
                            className
                        )}
                    >
                        <button
                            aria-label="close modal"
                            onClick={onCloseModal}
                            className="relative z-10 mr-0 ml-auto flex h-11 w-11 cursor-pointer items-center justify-center p-1 text-[#0D2098] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_12px_3px_rgba(13,32,152,0.5)] focus-visible:shadow-[0_0_12px_3px_rgba(13,32,152,0.5)]"
                        >
                            <IconClose />
                        </button>

                        <div>{children}</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
