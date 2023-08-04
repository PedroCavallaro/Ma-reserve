import { Input } from "../Input";
import { PiHouseBold } from "react-icons/pi";
export default function Search() {
    return (
        <section className="flex flex-col justify-center shadow items-center gap-2 h-[12rem]">
            <h2 className="flex gap-2 text-lg">
                Encontrar{" "}
                <p className="text-orange-400 font-semibold">restaurantes</p>{" "}
            </h2>
            <label
                htmlFor=""
                className="flex relative shadow w-[20rem] h-12 rounded-md p-2 gap-1 items-center"
            >
                <PiHouseBold size={25} color={"#E5881B"} />
                <Input
                    type="text"
                    placeholder="Restaurante..."
                    className="w-full outline-none"
                />
            </label>
        </section>
    );
}
