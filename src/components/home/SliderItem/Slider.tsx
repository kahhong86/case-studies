import Image from "next/image";
import { FunctionComponent } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { SliderItem } from "./Item";

interface SwiperProps{}

const Slider:FunctionComponent<SwiperProps> = () => {
    return(
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-48 md:h-96 bg-gray-300 text-center">
                {SliderItem.map(({name,url,imageUrl},index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className={`bg-[url('/assets/home/${imageUrl}')] w-full h-full bg-no-repeat bg-center bg-cover`}>test</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider;