import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout/Layout";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import { ProductItem } from "./productItem";

interface ProductProps{}

const Product:FunctionComponent<ProductProps> = () => {
    const router = useRouter();
    const productId = router.query.productId;

    return(
        <Layout title={`Product ${productId}`}>
            <Header />
                <h1>{productId}</h1>
                <div>
                {ProductItem.map(({name,url,src,pricelow,pricehigh,discount,category,id},index) => {
                    return(
                        <> 
                            {productId == id ?
                                <div key={index}>
                                    {name}
                                </div>
                                :
                                ""
                            }
                        </>
                    )
                })}
                </div>
                
            <Footer />
        </Layout>
    )
}

export default Product;