import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout/Layout";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import Link from "next/link"
import { CategoryItem } from "../../src/components/category/categoryItem";
import { assetsUrl } from "../../utils/backend-url";
import Image from "next/image";
import { ProductItem } from "../../src/components/product/productItem";

interface CategoryProps{}

const Category:FunctionComponent<CategoryProps> = () => {
    const router = useRouter();
    const categoryId = router.query.categoryId;
    const [data,setData] = useState([]);
    const [sortType, setSortType] = useState('default');

    useEffect(() => {
        const sortArray = (type) => {
            const types = {
                pricelow : "pricelow",
                pricehigh: "pricehigh",
            }
            const sortProperty = types[type];
            if(sortProperty == "pricelow"){
                const sorted = [...ProductItem].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setData(sorted);
            }else if(sortProperty == "pricehigh"){
                const sorted = [...ProductItem].sort((a, b) => b[sortProperty] - a[sortProperty]);
                setData(sorted);
            }else{
                const sorted = [...ProductItem].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setData(sorted);
            }
            
        }
        sortArray(sortType);
    },[sortType]);

    const dataListPrint = data.map((product,index) => {
        return(
            <li className="border-2 border-black text-left" key={index}>
                <Link href={`${product.url}`}>
                    <a className="relative">
                        <div className="bg-white mx-1 text-center">
                            <div className="block relative">
                                {product.discount?
                                    <span className="absolute top-0 -right-1 bg-red-500 z-1 p-1 text-xs text-yellow-300">
                                        {product.discount}%
                                    </span>
                                    :
                                    ""
                                }
                                <Image 
                                    width="100"
                                    height="100"
                                    src={assetsUrl + product.src}
                                    alt={product.name}
                                />
                            </div>
                        </div>
                        <div className="px-2 pb-2 bg-blue-500">
                            <span className="text-sm md:text-base inline-block text-white h-10 md:h-14 leading-4 pt-2 align-top block">
                                {product.name}
                            </span>
                            <span className="block text-base text-yellow-300">
                                <span className="text-xs font-normal">S$</span>{product.pricelow} {product.pricehigh?" ~ "+product.pricehigh:""}
                            </span>
                        </div>
                    </a>    
                </Link>
            </li>
        )
    });

    return(
        <Layout title={`Category ${categoryId}`} description="Categories including laptops, tablets, gaming console and many more with affordable prices">
            <Header />
            <div className="max-w-screen-xl mx-auto md:flex p-5"> 
                <aside className="w-full md:w-3/12 flex-initial hidden md:inline">
                    <h1 className="font-bold border-b-2 border-black mr-5 py-3 text-xl mb-2">Category</h1>
                    <ul className="mx-0 px-0">
                        {CategoryItem.map(({name,tag,url},index) => {
                            return(
                                <li key={index}>
                                    <Link href={url}>
                                        <a className="inline-block py-2">
                                            <span className={tag == categoryId ? "font-bold text-blue-500":""}>{name}</span>
                                        </a>    
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
                <div className="w-full md:w-9/12 flex-initial relative">
                    <select onChange={(e) => setSortType(e.target.value)} 
                        className="absolute right-0 top-5 border-2 border-black bg-transparent">
                        <option value="default">Default</option>
                        <option value="pricelow">Price Low</option>
                        <option value="pricehigh">Price High</option>
                    </select>
                    <h2 className="mb-5 font-bold border-b-2 border-black py-3 text-xl">Detail</h2>
                    <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                        {categoryId == "all"?
                            dataListPrint
                        :
                        data.filter(pages => pages.category == categoryId).map((product,index) => {
                            return(
                                <li className="border-2 border-black text-left" key={index}>
                                    <Link href={`${product.url}`}>
                                        <a className="relative">
                                            <div className="bg-white mx-1 text-center">
                                                <div className="block relative">
                                                    {product.discount?
                                                        <span className="absolute top-0 -right-1 bg-red-500 z-1 p-1 text-xs text-yellow-300">
                                                            {product.discount}%
                                                        </span>
                                                        :
                                                        ""
                                                    }
                                                    <Image 
                                                        width="100"
                                                        height="100"
                                                        src={assetsUrl + product.src}
                                                        alt={product.name}
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-2 pb-2 bg-blue-500">
                                                <span className="text-sm md:text-base inline-block text-white h-10 md:h-14 leading-4 pt-2 align-top block">
                                                    {product.name}
                                                </span>
                                                <span className="block text-base text-yellow-300">
                                                    <span className="text-xs font-normal">S$</span>
                                                    {product.pricelow} {product.pricehigh?" ~ "+product.pricehigh:""}
                                                </span>
                                            </div>
                                        </a>    
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default Category;