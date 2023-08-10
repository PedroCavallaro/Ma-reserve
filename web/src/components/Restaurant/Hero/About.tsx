export default function About({ about }: { about: string }) {
    return (
        <div className="flex flex-col gap-1 ">
            <h3 className="text-orange-400">Descrição</h3>
            <p className="px-3 py-1 h-[7.5rem] leading-relaxed w-full overflow-hidden text-sm shadow-lg rounded-md">
                {about.substring(0, 250).concat("...")}
            </p>
        </div>
    );
}
