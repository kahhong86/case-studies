import Link from "next/link";
import { FunctionComponent } from "react";
import { ProductItem } from "./Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

interface SalesProps{}

const Sales:FunctionComponent<SalesProps> = () => {
    return(
        <div className="text-center border-t mt-5 md:mt-10 py-5 border-black mx-5 mb-10">
            <h2 className="mb-5 md:mb-10 md:mt-7 font-bold text-xl md:text-3xl text-blue-500">Sales</h2>
            <Swiper
                slidesPerView={3}
                scrollbar={{
                hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
            {ProductItem.map(({name,url},index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="bg-gray-300 p-5 mx-1 text-center">
                            <Link href={`/product/${url}`}>
                                <a className="">
                                    <span className="">{name}</span>
                                </a>    
                            </Link>
                        </div>
                        <span className="text-xs md:text-base pt-2 inline-block">{name}</span>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    )
}

export default Sales;