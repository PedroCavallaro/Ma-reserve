import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Slider.css";
export default function Slider({ images }: { images: Array<string> }) {
    return (
        <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{
                clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
        >
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Image
                            src={image}
                            height={300}
                            alt="a"
                            width={300}
                            className={`w-full h-[12rem] object-cover bg-gray-700 rounded-lg mt-2`}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
