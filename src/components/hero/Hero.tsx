import Image from "next/image";
import { AnimatedText } from "../shared/AnimatedText";
import { ButtonGet } from "../shared/ButtonGet";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="pc:pt-32 pc:pb-20 bg-hero-bg text-shadow pt-12 pb-12"
        >
            <div className="pc:px-10 relative mx-auto flex max-w-[1440px] flex-wrap items-center justify-between px-4">
                <div className="">
                    <h1 className="font-montserrat pc:text-[52px] pc:max-w-[430px] pc:mb-12 mb-6 max-w-[350px] text-4xl font-bold">
                        Англійська та німецька мови для дітей
                    </h1>
                    <AnimatedText text="Перетворимо навчання на улюблену звичку!" />
                    <p className="pc:max-w-[430px] pc:text-2xl pc:mb-12 mb-4 max-w-[400px]">
                        Запишіться зараз на безкоштовний пробний урок
                    </p>
                    <ButtonGet />
                </div>
                <div className="pc:max-w-[54%] mt-6 mr-0 ml-auto max-w-[500px]">
                    <Image
                        src="/hero.png"
                        alt="Indigo School"
                        width={1000}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
};
