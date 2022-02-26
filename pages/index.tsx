import Layout from "../src/components/layout/Layout";
import Header from "../src/components/header";
import Slider from "../src/components/home/SliderItem";
import { FunctionComponent } from "react";
import { ItemSection } from "../src/components/home/CategoriesItem/Categories"; 
import Sales from "../src/components/home/SalesItem";
import Categories from "../src/components/home/CategoriesItem";
import Popup from 'reactjs-popup';

interface HomeProps{}

const Home:FunctionComponent<HomeProps> = () => {
    return (
        <Layout title="Homepage">
            <Header />
            <Slider />
            <Categories/>
            <Sales />
        </Layout>
    )
}

export default Home;