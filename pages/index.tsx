import Layout from "../src/components/layout/Layout";
import Header from "../src/components/header";
import Slider from "../src/components/home/SliderItem";
import { FunctionComponent } from "react";
import Sales from "../src/components/home/SalesItem";
import Categories from "../src/components/home/CategoriesItem";
import Footer from "../src/components/footer";

interface HomeProps{}

const Home:FunctionComponent<HomeProps> = () => {
    return (
        <Layout 
            title="Royal Shopping - Homepage" 
            description="Explore the fast and affordable ecommerce website that enhance your shopping experience and 24 hours customer supports.">
            <Header />
            <Slider />
            <Categories/>
            <Sales />
            <Footer />
        </Layout>
    )
}

export default Home;