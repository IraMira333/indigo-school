import Image from "next/image";

export const Article = ({
    article,
}: {
    article: { title: string; text: string[] };
}) => {
    return (
        <section
            id="about"
            className="pc:py-16 pc:px-10 pc:flex items-end justify-between overflow-hidden px-4 py-12"
        >
            <article className="pc:w-[55%] pc:mb-0 mb-6">
                <h2 className="font-montserrat pc:text-5xl pc:max-w-[410px] pc:mb-10 mb-6 max-w-[300px] text-3xl font-semibold">
                    {article.title}
                </h2>
                {article.text.map((paragraph, index) => (
                    <p
                        className="pc:mx-0 pc:text-xl pc:max-w-[1200px] mx-auto mb-4 max-w-[700px] whitespace-pre-line last:mb-0"
                        key={index}
                    >
                        {paragraph}
                    </p>
                ))}
            </article>
            <div className="pc:w-[40%] pc:max-w-[460px] pc:mx-0 mx-auto max-w-[330px]">
                <Image
                    src="/article.png"
                    alt="article"
                    width={1440}
                    height={960}
                    className="w-full"
                />
            </div>
        </section>
    );
};
