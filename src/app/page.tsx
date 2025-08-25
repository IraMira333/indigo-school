import { AdvantagesList } from "@/components/advantages/AdvantagesList";
import { DetailsList } from "@/components/details/DetailsList";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <AdvantagesList />
            <DetailsList />
        </>
    );
}
