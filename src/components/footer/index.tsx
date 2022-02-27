import { FunctionComponent } from "react";
import { Sitemap } from "./sitemap";
import Link from "next/link";

interface FooterProps{}

const Footer:FunctionComponent<FooterProps> = () => {
    return(
        <div>
            <div className="bg-sky-900 text-white text-center">
                <div className="max-w-screen-xl mx-auto px-5 py-2 text-xs md:text-sm">
                    {Sitemap.map(({name,url},index) => {
                        return(
                            <div className="inline-block px-2 py-3" key={index}>
                                <Link href={url}>
                                    <a className="px-5 inline-block text-white">
                                        <span className="">{name}</span>
                                    </a>    
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="text-xs md:text-sm bg-gray-900 text-white text-center p-3">
                &copy; {(new Date().getFullYear())} Royal Shopping. All Rights Reserved.
            </div>
        </div>
        
    )
}

export default Footer;