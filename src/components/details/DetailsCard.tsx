"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const DetailsCard = ({
    index,
    detail,
}: {
    index: number;
    detail: { icon: string; title: string; description: string };
}) => {
    const fromLeft = index % 2 === 0;

    return (
        <motion.li
            className="pc:max-w-[45%] min-h-30 w-full max-w-[750px]"
            initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="pc:mb-6 mb-3 flex items-center gap-6">
                <Image
                    src={detail.icon}
                    alt={detail.title}
                    width={240}
                    height={240}
                    className="pc:h-32 pc:w-32 h-24 w-24"
                />
                <h3 className="font-montserrat pc:text-3xl text-xl font-semibold">
                    {detail.title}
                </h3>
            </div>
            <p className="pc:text-xl text-sm">{detail.description}</p>
        </motion.li>
    );
};
