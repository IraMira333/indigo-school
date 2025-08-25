import { AnimatedText } from "../shared/AnimatedText";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="pc:pt-32 pc:pb-20 bg-hero-bg text-shadow min-h-[calc(100vh-64px)] pt-20 pb-16"
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
                    <button className="from-light-blue pc:text-2xl pc:py-5 pc:px-14 to-blue-custom relative rounded-full bg-gradient-to-b px-11 py-3 font-bold text-white uppercase shadow-[0_8px_20px_-5px_rgba(13,32,152,0.8)] transition-all hover:shadow-[0_10px_25px_-5px_rgba(13,32,152,0.9)] active:translate-y-1 active:shadow-none">
                        безкоштовний урок
                    </button>
                </div>
            </div>
        </section>
    );
};
