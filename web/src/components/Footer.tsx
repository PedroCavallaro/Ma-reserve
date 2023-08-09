import Logo from "./Logo";

export default function Footer() {
    return (
        <section className="p-2 bg-zinc-100 flex justify-between">
            <div className="flex flex-col gap-2">
                <Logo />
                <p>endereçoe</p>
            </div>
            <article className="flex gap-5 mt-4">
                <div className="flex flex-col">
                    <p>Não sei</p>
                    <p>a</p>
                </div>
                <div>
                    <p>Não sei</p>
                    <p>a</p>
                </div>
            </article>
        </section>
    );
}
