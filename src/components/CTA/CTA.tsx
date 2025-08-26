import { ButtonGet } from "../shared/ButtonGet";

export const CTA = ({ cta }: { cta: { title: string; text: string } }) => {
    return (
        <section className="bg-hero-bg pc:py-24 py-16 text-center">
            <h2 className="text-shadow pc:text-5xl pc:mb-6 mb-4 text-3xl font-bold">
                {cta.title}
            </h2>
            <p className="text-shadow pc:text-2xl pc:max-w-[800px] pc:mb-10 mx-auto mb-6 max-w-[600px] text-lg whitespace-pre-line">
                {cta.text}
            </p>
            <ButtonGet />
        </section>
    );
};
