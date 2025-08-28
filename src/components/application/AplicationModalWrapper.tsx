"use client";
import { useState } from "react";

import { SubmitFnType } from "@/types/contentTypes";
import { ModalBase } from "../shared/ModalBase";
import { AplicationForm } from "./ApplicationForm";
import { ErrorMessage } from "./ErrorMessage";
import { SuccessMessage } from "./SuccessMessage";

export const AplicationModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            setModalContent(<SuccessMessage />);
        } catch (error) {
            console.error(error);
            setModalContent(<ErrorMessage />);
        } finally {
            setIsOpen(true);
        }
    };

    return (
        <>
            <AplicationForm notificationHandler={notificationHandler} />

            <ModalBase
                isModalOpen={isOpen}
                onCloseModal={() => setIsOpen(false)}
            >
                <div className="h-auto w-[90%] max-w-[600px] min-w-[288px]">
                    {modalContent}
                </div>
            </ModalBase>
        </>
    );
};
