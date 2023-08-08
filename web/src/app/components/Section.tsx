import { ReactNode } from "react";

export default function HomeSection({
    children,
    text,
}: {
    children: ReactNode;
    text: string;
}) {
    return (
        <section className="flex flex-col gap-1 p-1 relative">
            <p className="text-orange-400 font-semibold ">{text}</p>
            {children}
        </section>
    );
}
