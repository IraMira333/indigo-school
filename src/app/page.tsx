import { AdvantagesList } from "@/components/advantages/AdvantagesList";
import { Application } from "@/components/application/Aplication";
import { Article } from "@/components/article/Article";
import { CTA } from "@/components/CTA/CTA";
import { article } from "@/components/data/article";
import { ctaDiscount, ctaTrial } from "@/components/data/ctaContent";
import { DetailsList } from "@/components/details/DetailsList";
import { Hero } from "@/components/hero/Hero";
import { WhyList } from "@/components/why/WhyList";

export default function Home() {
    return (
        <>
            <Hero />
            <AdvantagesList />
            <DetailsList />
            <CTA cta={ctaDiscount} />
            <Article article={article} />
            <CTA cta={ctaTrial} />
            <WhyList />
            <Application />
        </>
    );
}
