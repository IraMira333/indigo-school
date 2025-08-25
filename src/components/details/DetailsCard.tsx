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
            className="pc:max-w-[450px] min-h-30 w-full max-w-[750px]"
            initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mb-3 flex items-center gap-6">
                <Image
                    src={detail.icon}
                    alt={detail.title}
                    width={240}
                    height={240}
                    className="pc:h-20 pc:w-20 h-16 w-16"
                />
                <h3 className="font-montserrat text-2xl font-semibold">
                    {detail.title}
                </h3>
            </div>
            <p>{detail.description}</p>
        </motion.li>
    );
};
