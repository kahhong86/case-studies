import Head from "next/head";
import { FunctionComponent } from "react";

interface LayoutProps{
    title:string,
    children:any,
}

const Layout:FunctionComponent<LayoutProps> = ({title,children}) => {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Case Studies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-36 md:mt-36">
                {children}
            </div>
        </div>
    )
}

export default Layout;