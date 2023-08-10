export default function ExtraInfo({ gastronomy }: { gastronomy: string }) {
    return (
        <div className="flex gap-10 relative">
            <div className="flex flex-col gap-4">
                <p className="text-orange-400">Gastronomia</p>
                <div className="flex relative items-center shadow-lg px-4 py-2 gap-4 rounded-md">
                    <div className="rounded-full bg-orange-400 w-8 h-8" />
                    <p>{gastronomy}</p>
                </div>
                <p className="text-orange-400">Especialidade</p>
                <div className="flex relative items-center shadow-lg px-4 py-2 gap-4 rounded-md">
                    <div className="rounded-full bg-orange-400 w-8 h-8" />
                    <p>{gastronomy}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <p className="text-orange-400">Bonus</p>
                <div className="h-full w-full bg-black"></div>
            </div>
        </div>
    );
}
