import Image from "next/image";
import Search from "../components/Home/Search";
import GastronomyFilter from "../components/Home/GastronomyFilter";
import InterestSection from "../components/Home/InterestSection";

export default function Home() {
    return (
        <main className="flex flex-col gap-4">
            <Search />
            <GastronomyFilter />
            <InterestSection />
        </main>
    );
}
