import Link from "next/link";
import { FunctionComponent } from "react";
import { ProductItem } from "../../../../pages/product/productItem";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import { assetsUrl } from "../../../../utils/backend-url";

interface SalesProps{}

const Sales:FunctionComponent<SalesProps> = () => {
    return(
        <div className="px-5 max-w-screen-xl mx-auto">
            <div className="text-left mt-5 md:mt-10 p-4 pt-1 mb-10 bg-blue-500 relative">
                <span className="bg-red-500 absolute top-2 -left-2 text-yellow-300 p-3 text-xs  font-bold md:text-2xl">SALES UP TO 90%</span>
                <span className="triangle-sales md:top-16"></span>
                <h2 className="mb-5 md:mb-10 mt-3 md:mt-7 font-bold text-xl md:text-3xl text-white text-center">Sales</h2>
                <Swiper
                    scrollbar={{
                    hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                    slidesPerView={3}
                    breakpoints={{
                        "340": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        },
                        "768": {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        },
                    }}
                >
                {ProductItem.map(({name,url,src,pricelow,pricehigh,discount},index) => {
                    return(
                        <SwiperSlide key={index} className="bg-white">
                            <div className="bg-white mx-1 text-center">
                                <Link href={`/product${url}`}>
                                    <a className="relative">
                                        <div className="block relative">
                                            <span className="absolute top-0 -right-1 bg-red-500 z-10 p-1 text-xs text-yellow-300">{discount}%</span>
                                            <Image 
                                                width="100"
                                                height="100"
                                                src={assetsUrl + src}
                                                alt={name}
                                            />
                                        </div>
                                    </a>    
                                </Link>
                            </div>
                            <div className="px-2 bg-blue-500">
                                <span className="text-sm md:text-base inline-block text-white h-10 md:h-14 leading-4 pt-2 align-top block">{name}</span>
                                <span className="block text-base text-yellow-300"><span className="text-xs font-normal">S$</span>{pricelow} {pricehigh?" ~ "+pricehigh:""}</span>
                            </div>
                            
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
        </div>
    )
}

export default Sales;