import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex">
            <Link href={`/`} className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-orange-400"></div>
                <h1 className="text-lg font-sans lg:text-xl">
                    Ma <p className="ml-5">Reserve</p>
                </h1>
            </Link>
        </div>
    );
}
