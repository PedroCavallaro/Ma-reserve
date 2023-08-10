import { RestaurantInfo } from "@/@types/types";
import { BsBookmarks } from "react-icons/bs";
import { Button } from "../../Button";
import Image from "next/image";
import Slider from "../Slider/Slider";
import Heading from "./Heading";
import About from "./About";
export default function Hero({ name, about }: RestaurantInfo) {
    const images = ["/test.jpeg", "/test.jpeg", "/test.jpeg"];
    return (
        <section className=" py-1 gap-1 mt-1 flex flex-col ">
            <Heading restaurantName={name} />
            <div className="w-full  relative flex justify-center items-center px-1">
                <Slider images={images} />
            </div>
            <About about={about} />
        </section>
    );
}
