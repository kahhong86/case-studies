import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout/Layout";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import { ProductItem } from "./productItem";
import { assetsUrl } from "../../utils/backend-url";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

interface ProductProps{
}

const Product:FunctionComponent<ProductProps> = () => {
    const router = useRouter();
    const productId = router.query.productId;
    const [quantity,setQuantity] = useState<number>(1);
    const currentPage = ProductItem.filter((x) => x.id == productId)[0];

    const increment = () => {
        let value = quantity + 1;
        setQuantity(value);
    }

    const decrement = () => {
        if(quantity != 1){
            let value = quantity - 1;
            setQuantity(value);
        }
    }

    let handleChange = (e) => {
        setQuantity(e.target.value)
    }

    return(
        <Layout title={`Product ${productId}`}>
            <Header />
                <div className="max-w-screen-xl mx-auto px-5">
                    <div className="mb-5">
                        {[currentPage].map((product,index) => {
                            return(
                                <div key={index}>
                                    <div className="md:flex py-5">
                                        <div className="flex-auto border-2 border-black mr-10 w-full md:w-4/12 text-center">
                                            <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${assetsUrl +product?.src})`}}></div>
                                            
                                        </div>
                                        <div className="flex-auto w-full md:w-8/12">
                                            <h1 className="font-bold text-3xl my-5 md:mb-2">{product?.name}</h1>
                                            <div className="border-b border-black pb-5">
                                                <span className="text-orange-500 inline-block mr-5 font-bold">Rating <span className="text-2xl">{product?.rating}</span></span>
                                                <span className="text-slate-400 inline-block">Sold <strong className="text-blue-500 text-2xl">{product?.sold}</strong></span>
                                            </div>
                                            <div className=" py-5">
                                                <div><span className="w-20 inline-block">Price</span>    
                                                    {product?.discount != 0?
                                                        <div className="inline-block">
                                                            <span className="line-through text-slate-400">{product?.pricelow}</span> 
                                                            <strong className="text-2xl ml-2">S${(product?.pricelow - product?.pricelow*product?.discount / 100)}</strong> 
                                                            <span className="bg-red-600 ml-2 p-1 text-white font-bold text-sm bottom-1 relative">{product?.discount}%</span>  
                                                        </div>
                                                        :
                                                        product?.pricelow
                                                    }
                                                </div>
                                                <div className="my-4"><span className="w-20 inline-block">Shipping</span> <strong>S$4.50</strong></div>
                                                <div>
                                                    <span className="w-20 inline-block">Quantity</span> 
                                                    <div className="inline-block">
                                                        <button name="decrement" className=" border-black border px-2 bg-slate-200 border-r-0" onClick={decrement}>-</button>
                                                        <input type="text" name="quantity" className="w-10 border-black border text-center" onChange={handleChange} value={quantity}/>
                                                        <button name="increment" className=" border-black border px-2 bg-slate-200 border-l-0" onClick={increment}>+</button>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <button className="border-red-600 border-2 bg-red-100 p-2 px-5">
                                                        Add to Cart
                                                    </button>
                                                    <button className="bg-red-600 border-2 border-red-600 text-white ml-4 p-2 px-5">
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl border-b-2 mb-2 border-black">Product Description</h3>
                                        {product?.description}
                                    </div>
                                </div>
                            )
                        })}

                        <div className="bg-slate-200 p-5 mt-10">
                            <h2 className="text-2xl mb-5">You may also like</h2>
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
                            {ProductItem.filter(pages => pages.category == currentPage?.category).map((product,index) => {
                                return(
                                    <SwiperSlide key={index} className="bg-white border-2 border-black">
                                        <div className="bg-white mx-1 text-center">
                                            <Link href={`${product?.url}`}>
                                                <a className="relative">
                                                    <div className="block relative">
                                                        {product?.discount != 0?
                                                            <span className="absolute top-0 -right-1 bg-red-500 z-10 p-1 text-xs text-yellow-300">
                                                                {product?.discount}%
                                                            </span>
                                                            :
                                                            ""
                                                        }
                                                        <Image 
                                                            width="100"
                                                            height="100"
                                                            src={assetsUrl + product?.src}
                                                            alt={product?.name}
                                                        />
                                                    </div>
                                                </a>    
                                            </Link>
                                        </div>
                                        <div className="px-2 bg-blue-500">
                                            <span className="text-sm md:text-base inline-block text-white h-10 md:h-14 leading-4 pt-2 align-top block">
                                                {product?.name}
                                            </span>
                                            <span className="block text-base text-yellow-300">
                                                <span className="text-xs font-normal">S$</span>
                                                {product?.pricelow} {product?.pricehigh?" ~ "+product?.pricehigh:""}
                                            </span>
                                        </div>
                                        
                                    </SwiperSlide>
                                )
                            })}
                            </Swiper>
                        </div>
                    </div>
                </div>
                
            <Footer />
        </Layout>
    )
}

export default Product;