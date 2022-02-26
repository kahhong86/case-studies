import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { assetsUrl } from "../../../utils/backend-url";
import { ItemCategory } from "./Item";
import Popup from 'reactjs-popup';

interface HeaderProps{}

const Header:FunctionComponent<HeaderProps> = () => {
    return(
        <div className="fixed top-0 z-10 w-full bg-white">
            <div className="p-5 flex">
                <Link href="/">
                    <a className="inline-block flex-none mt-2 md:mt-0">
                        <Image 
                            height="50"
                            width="50"
                            src={assetsUrl + '/share/logo.png'}
                            alt="Logo"
                        />
                        <span className="text-xl font-bold align-top top-2 relative inline-block leading-5 pr-4 border-r-2 border-black text-blue-700">Royal<br/>Shopping</span>
                    </a>                
                </Link>
                <div className="inline-block align-top p-2 border-l-0 pl-4 border-black md:flex-auto w-10/12">
                    <form action="" className="align-top relative top-2 md:top-0">
                        <input type="text" className="border-2 border-black bg-gray-300 p-2 align-top w-full"/>
                        <button type="submit" className="absolute right-2 top-1.5 border-l-2 pl-2 border-black text-left">
                            <div className="top-1 relative px-1">
                                <Image 
                                    height="25"
                                    width="25"
                                    src={assetsUrl + "/share/search.png"}
                                    alt="Search"
                                />
                            </div>
                        </button>
                    </form>
                </div>
                <div className="absolute top-2 right-5 md:top-0 md:right-0 md:flex-auto md:relative md:w-2/12 w-4/12">
                    <div className="flex h-full text-center">
                        <div className="flex-1">
                            <Popup trigger={<button className="md:py-4 block font-bold text-xs md:text-base text-center mx-auto"> Sign In</button>} >
                                <div>Popup content here !!</div>
                            </Popup>
                        </div>
                        <div className="flex-1">
                            <Link href="/">
                                <a className="md:my-3 md:py-1 block font-bold border-l-2 border-black text-xs md:text-base">
                                    <div className="inline-block md:hidden">
                                        <Image 
                                            width="15"
                                            height="15"
                                            src={assetsUrl + "/share/cart.png"}
                                            alt="Cart"
                                        />
                                    </div>
                                    <div className="md:inline-block hidden">
                                        <Image 
                                            width="25"
                                            height="25"
                                            src={assetsUrl + "/share/cart.png"}
                                            alt="Cart"
                                        />
                                    </div>
                                    <span className="relative bottom-1 pl-2">
                                        (<span className="text-orange-500">0</span>)
                                    </span>
                                </a>
                            </Link>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="overflow-hidden w-full overflow-x-scroll">
                <div className="md:flex bg-blue-500 block w-[680px] md:w-full">
                    {ItemCategory.map(({name,url},index) => {
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
            
        </div>
        
    )
}

export default Header;