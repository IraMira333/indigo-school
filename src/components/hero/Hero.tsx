import { AnimatedText } from "../shared/AnimatedText";
import { ButtonGet } from "../shared/ButtonGet";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="pc:pt-32 pc:pb-20 bg-hero-bg text-shadow pc:min-h-[calc(100vh-96px)] min-h-[calc(100vh-64px)] pt-20 pb-16"
        >
            <div className="pc:px-10 relative mx-auto max-w-[1440px] px-4">
                <div className="">
                    <h1 className="font-montserrat pc:text-[52px] pc:max-w-[500px] pc:mb-12 mb-6 max-w-[350px] text-4xl font-bold">
                        Англійська мова для дітей
                    </h1>
                    <AnimatedText text="Перетворимо навчання на улюблену звичку!" />
                    <p className="pc:max-w-[500px] pc:text-2xl pc:mb-8 mb-4 max-w-[500px]">
                        Запишіться зараз на безкоштовний пробний урок
                    </p>
                    <ButtonGet />
                </div>
            </div>
        </section>
    );
};
