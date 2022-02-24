import Layout from "../src/components/layout/Layout";
import Header from "../src/components/header/Header";
import { FunctionComponent } from "react";

interface HomeProps{}

const Home:FunctionComponent<HomeProps> = () => {
    return (
        <Layout title="Homepage">
            <Header />
            Homepage
            <div className="bg-black text-white">aaa</div>
        </Layout>
    )
}

export default Home;