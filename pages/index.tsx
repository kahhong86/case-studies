import Layout from "../src/components/layout/Layout";
import Header from "../src/components/header/Header";
import Slider from "../src/components/home/SliderItem/Slider";
import { FunctionComponent } from "react";
import { ItemSection } from "../src/components/home/Section"; 
import Sales from "../src/components/home/SalesItem/Sales";

interface HomeProps{}

const Home:FunctionComponent<HomeProps> = () => {
    return (
        <Layout title="Homepage">
            <Header />
            <Slider />
            <div className="text-center py-5 max-w-screen-xl mx-auto">
                <h2 className="mb-5 md:mb-10 md:mt-7 font-bold text-xl md:text-3xl text-blue-500">Categories</h2>
                <div className="px-5">
                    <ul className="mx-auto w-full grid grid-cols-4 gap-4">
                        {ItemSection.map(({image,caption,url},index) => {
                            return(
                                <li key={index}>
                                    <div className="p-5 md:py-10 bg-gray-400 text-center">
                                        {index+1} {image}
                                    </div>
                                    <span className="text-xs md:text-base">{caption}</span>
                                </li>
                            )
                        })}  
                    </ul>
                </div>
            </div>
            <Sales />
        </Layout>
    )
}

export default Home;