import Link from "next/link";

export default function(){
    return(
        <button className="px-10 rounded-md p-2 bg-green-600 text-white animate-pulse">
            <Link href="/profile"> Entrar </Link>
        </button>
    )
}