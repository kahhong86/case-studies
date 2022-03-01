import Head from "next/head";
import { FunctionComponent } from "react";

interface LayoutProps{
    title:string,
    children:any,
    description:string,
}

const Layout:FunctionComponent<LayoutProps> = ({title,children,description}) => {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="Description" content={description} />
                <meta property="og:image" content="/assets/share/logo.png" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description}  />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-36 md:mt-36">
                {children}
            </div>
        </div>
    )
}

export default Layout;