import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
export default function Slider() {
    return (
        <Swiper
            loop={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 4,
                slideShadows: true,
            }}
            spaceBetween={0}
        >
            <SwiperSlide>
                <Image
                    alt={`Restaurant ${name}`}
                    src={"/test.jpeg"}
                    width={200}
                    height={30}
                    className="top-0  h-44 object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    alt={`Restaurant ${name}`}
                    src={"/test.jpeg"}
                    width={200}
                    height={30}
                    className="   h-44 object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
}
