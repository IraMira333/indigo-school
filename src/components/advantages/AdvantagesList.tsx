import { AdvantageCard } from "./AdvantageCard";

const advantages = [
    {
        title: "Онлайн чи офлайн - вибір за вами",
        description: "Вчіться там, де зручно: у школі чи з дому",
        icon: "/icon1.png",
    },
    {
        title: "Формат для кожного",
        description: "Індивідуально або у міні-групі до 10 людей",
        icon: "/icon1.png",
    },
    {
        title: "Зручний графік",
        description: "Два рази на тиждень по 60 хвилин",
        icon: "/icon1.png",
    },
    {
        title: "Перший крок безкоштовно",
        description: "Приходьте на пробний урок і відчуйте атмосферу Indigo",
        icon: "/icon1.png",
    },
];

export const AdvantagesList = () => {
    return (
        <section
            id="advantages"
            className="pc:pb-16 pc:px-10 pc:text-xl -mt-6 px-4 pb-12 text-sm"
        >
            <ul className="pc:gap-10 flex flex-wrap justify-center gap-5">
                {advantages.map((adv, index) => (
                    <AdvantageCard key={index} advantage={adv} />
                ))}
            </ul>
        </section>
    );
};
