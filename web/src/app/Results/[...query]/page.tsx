"use client";

export default function Results({ params }: { params: { query: string } }) {
    console.log(params.query);
    return (
        <main>
            <section className="flex flex-col"></section>
        </main>
    );
}
