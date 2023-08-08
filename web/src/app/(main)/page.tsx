import Image from "next/image";
import Search from "../components/Home/Search";
import GastronomyFilter from "../components/Home/GastronomyFilter";
import InterestSection from "../components/Home/InterestSection";
import ReserveAgain from "../components/Home/ReserveAgain";

export default function Home() {
    return (
        <main className="flex flex-col gap-4">
            <Search />
            <GastronomyFilter />
            <InterestSection />
            <ReserveAgain />
        </main>
    );
}
