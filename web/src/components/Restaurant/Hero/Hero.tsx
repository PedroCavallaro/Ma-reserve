import { RestaurantInfo } from "@/@types/types";
import Slider from "../Slider/Slider";
import Heading from "./Heading";
import About from "./About";
export default function Hero({
    id,
    name,
    about,
}: Pick<RestaurantInfo, "name" | "about" | "id">) {
    const images = ["/test.jpeg", "/test.jpeg", "/test.jpeg"];
    return (
        <section className=" py-1 gap-1 mt-1 flex flex-col">
            <Heading restaurantName={name} id={id} />
            <div className="w-full  relative flex justify-center items-center ">
                <Slider images={images} />
            </div>
            <About about={about} />
        </section>
    );
}
