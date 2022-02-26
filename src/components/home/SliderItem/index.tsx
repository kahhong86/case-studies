import Image from "next/image";
import { FunctionComponent } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Lazy, Pagination } from "swiper";
import { SliderItem } from "./Item";
import { assetsUrl } from "../../../../utils/backend-url";


interface SwiperProps{}

const Slider:FunctionComponent<SwiperProps> = () => {
    return(
        <div>
            <Swiper 
                pagination={true} 
                modules={[Lazy,Pagination]} 
                lazy={true}
                className="mySwiper h-40 md:h-99 max-h-500 bg-gray-300 text-center">
                {SliderItem.map(({name,url,imageUrl},index) => {
                    return(
                        <SwiperSlide key={index}>
                            <Image 
                                width="2000"
                                height="816"
                                src={assetsUrl+"/home/"+imageUrl}
                                alt="image"
                                className="swiper-lazy"
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="bg-rose-600 p-5 text-white">
                <strong>FREE SHIPPING FOR FEBRUARY TO CELEBRATE DAY OF 2/2/22</strong>. All products have free shipping with no minimum purchase.
            </div>
        </div>
    )
}

export default Slider;