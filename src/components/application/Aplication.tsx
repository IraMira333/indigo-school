import { AplicationModalWrapper } from "./AplicationModalWrapper";

export const Application = () => {
    return (
        <section
            id="application"
            className="bg-hero-bg pc:py-24 pc:px-10 px-4 py-16 text-center"
        >
            <h2 className="text-shadow pc:text-5xl pc:mb-10 mb-6 text-3xl font-bold">
                Запис на безкоштовний урок
            </h2>
            <AplicationModalWrapper />
        </section>
    );
};
