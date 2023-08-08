import Image from "next/image";
import Search from "../components/Home/Search";
import GastronomyFilter from "../components/Home/GastronomyFilter";

export default function Home() {
    return (
        <main className="flex flex-col gap-4">
            <Search />
            <GastronomyFilter />
        </main>
    );
}
