import { FunctionComponent } from "react";
import { Sitemap } from "./sitemap";
import Link from "next/link";

interface FooterProps{}

const Footer:FunctionComponent<FooterProps> = () => {
    return(
        <div>
            <div className="bg-slate-500 text-white text-left hidden md:block">
                <div className="max-w-screen-xl mx-auto px-5 py-10 text-xs md:text-sm">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <h3 className="font-bold pb-4">Customer Services</h3>
                            <ul className="leading-6">
                                <li>Help Centre</li>                        
                                <li>How To Buy</li>
                                <li>How To Sell</li>
                                <li>Guarantee</li>
                                <li>Free Shipping Program</li>
                                <li>Return &amp; Refund</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold pb-4">About Us</h3>
                            <ul className="leading-6">
                                <li>About Reebelo</li>
                                <li>Frequently Asked Questions</li>
                                <li>Blog</li>
                                <li>Buyback for businesses</li>
                                <li>Phones &amp; laptops for business</li>
                                <li>Track Your Order</li>
                                <li>Customer Reviews</li>
                                <li>We’re hiring!</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold pb-4">Follow Us</h3>
                            <ul className="leading-6">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Linkedin</li>
                            </ul>
                        </div>
                        <div>
                            <form action="">
                                <p>Subscribe for exclusive deals &amp; discounts</p>
                                <input type="text" className="w-full mb-2 p-2" placeholder="dave123@xxx.com"/>
                                <button className="w-full bg-red-500 p-2">Subscribe</button>
                            </form>
                            <span className="text-xs">By subscribing, you accepted the <Link href="/"><a className="underline">Privacy Policy</a></Link></span>
                        </div>
                    </div>
                </div>
            </div>
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