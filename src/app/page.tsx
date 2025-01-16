import Image from "next/image";
import Link from "next/link";

export default function Home(){
    return(
            <Link href="/profile"> 
                <button className="px-10 rounded-md p-2 flex items-center gap-3 bg-green-600 text-white animate-pulse">
                    <Image width={30} height={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/768px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" />
                    Sign in
                </button>
            </Link>
    )
}