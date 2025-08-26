import Image from "next/image";

export const AdvantageCard = ({
    advantage,
}: {
    key: number;
    advantage: { icon: string; title: string; description: string };
}) => {
    return (
        <li className="shadow-button bg-white-custom pc:max-w-[45%] pc:min-h-40 relative z-[1] flex min-h-30 w-full max-w-[358px] items-center gap-3 rounded-3xl px-4 py-3">
            <Image
                src={advantage.icon}
                alt={advantage.title}
                width={240}
                height={240}
                className="pc:h-20 pc:w-20 h-16 w-16 flex-shrink-0"
            />
            <div>
                <h3 className="font-montserrat pc:text-2xl font-semibold">
                    {advantage.title}
                </h3>
                <p>{advantage.description}</p>
            </div>
        </li>
    );
};
