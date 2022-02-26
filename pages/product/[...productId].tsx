import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout/Layout";
import Header from "../../src/components/header";

interface ProductProps{}

const Product:FunctionComponent<ProductProps> = () => {
    const router = useRouter();
    const productId = router.query.productId;

    return(
        <Layout title={`Product ${productId}`}>
            <Header />
            Product {productId}
        </Layout>
    )
}

export default Product;