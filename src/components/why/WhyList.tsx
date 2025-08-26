import { whyUs } from "../data/article";

export const WhyList = () => {
    return (
        <section
            id="why"
            className="pc:py-16 pc:px-10 overflow-hidden px-4 py-12"
        >
            <h2 className="font-montserrat pc:text-5xl pc:max-w-[410px] pc:mb-10 mb-6 max-w-[300px] text-3xl font-semibold">
                Чому саме ми?
            </h2>
            <ul className="pc:gap-10 flex flex-wrap justify-center gap-6">
                {whyUs.map((why, index) => (
                    <li
                        className="pc:max-w-[45%] flex w-full max-w-[750px] gap-4"
                        key={index}
                    >
                        <img
                            src="/pin.jpg"
                            alt={why}
                            className="pc:h-12 pc:w-12 h-10 w-10"
                        />
                        <p className="pc:text-xl text-sm">{why}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
