import { AdvantagesList } from "@/components/advantages/AdvantagesList";
import { CTA } from "@/components/CTA/CTA";
import { ctaDiscount } from "@/components/data/ctaContent";
import { DetailsList } from "@/components/details/DetailsList";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <AdvantagesList />
            <DetailsList />
            <CTA cta={ctaDiscount} />
        </>
    );
}
