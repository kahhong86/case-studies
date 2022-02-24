import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { assetsUrl } from "../../../utils/backend-url";

interface HeaderProps{}

const Header:FunctionComponent<HeaderProps> = () => {
    return(
        <div className="bg-black border-2 block">
            <Link href="/">
                <a>
                    <Image 
                        height="100"
                        width="100"
                        src={assetsUrl + '/share/logo.png'}
                        alt="Logo"
                    />
                </a>
            </Link>
            <h1>AAAAAA</h1>
        </div>
    )
}

export default Header;