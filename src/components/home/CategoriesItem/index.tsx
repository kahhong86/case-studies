import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react"
import { assetsUrl } from "../../../../utils/backend-url"
import { CategoryItem } from "../../../../pages/category/categoryItem"

interface CategoriesProps{}

const Categories:FunctionComponent<CategoriesProps> = () => {
    return(
        <div className="text-center py-5 max-w-screen-xl mx-auto">
            <h2 className="mb-5 md:mb-10 md:mt-7 font-bold text-xl md:text-3xl text-blue-500">Categories</h2>
            <div className="px-5">
                <ul className="mx-auto w-full grid grid-cols-4 gap-4">
                    {CategoryItem.slice(1).map(({src,name,url},index) => {
                        return(
                            <li key={index}>
                                <div className="p-5 md:py-8 border-2 border-blue-500 text-center">
                                    <Link href={url}>
                                        <a>
                                            <Image 
                                                width="80"
                                                height="80"
                                                src={assetsUrl +"/home/"+src}
                                                alt={name}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <span className="bg-blue-500 text-white w-full block text-xs md:text-base p-1">{name}</span>
                            </li>
                        )
                    })}  
                </ul>
            </div>
        </div>
    )
}

export default Categories;