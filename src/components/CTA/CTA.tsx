import { ButtonGet } from "../shared/ButtonGet";

export const CTA = ({ cta }: { cta: { title: string; text: string } }) => {
    return (
        <section className="bg-hero-bg py-16 text-center">
            <h2 className="text-shadow mb-4 text-3xl font-bold">{cta.title}</h2>
            <p className="text-shadow mx-auto mb-6 max-w-[600px] text-lg whitespace-pre-line">
                {cta.text}
            </p>
            <ButtonGet />
        </section>
    );
};
