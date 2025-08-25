import Image from "next/image";

export const AdvantageCard = ({
    key,
    advantage,
}: {
    key: number;
    advantage: { icon: string; title: string; description: string };
}) => {
    return (
        <li
            key={key}
            className="shadow-button bg-white-custom relative z-[1] flex min-h-30 w-full max-w-[358px] items-center gap-3 rounded-3xl px-4 py-3"
        >
            <Image
                src={advantage.icon}
                alt={advantage.title}
                width={240}
                height={240}
                className="h-12 w-12"
            />
            <div>
                <h3 className="font-montserrat font-semibold">
                    {advantage.title}
                </h3>
                <p>{advantage.description}</p>
            </div>
        </li>
    );
};
