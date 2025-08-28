"use client";

import { motion } from "framer-motion";

export const AnimatedText = ({ text }: { text: string }) => {
    const words = text.split(" ");

    let globalIndex = 0;

    return (
        <p className="pc:max-w-[430px] pc:font-semibold pc:text-2xl pc:mb-12 mb-6 flex max-w-[500px] flex-wrap text-[#2C2C2C]">
            {words.map((word, wi) => {
                const wordSpans = word.split("").map((char, ci) => {
                    const i = globalIndex++;
                    return (
                        <motion.span
                            key={i}
                            animate={{
                                color: ["#2C2C2C", "#b1bbfc", "#2C2C2C"],
                            }}
                            transition={{
                                delay: i * 0.1,
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: text.length * 0.1 + 2,
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    );
                });

                return (
                    <span key={wi} className="mr-2 whitespace-nowrap">
                        {wordSpans}
                    </span>
                );
            })}
        </p>
    );
};
