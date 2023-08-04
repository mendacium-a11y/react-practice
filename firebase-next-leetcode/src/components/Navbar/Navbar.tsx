import Link from "next/link";

export default function Navbar () {
    return(
        <nav className="flex justify-around py-8">
            <Link className="text-3xl" href="/">Leetcode</Link>
            <button className="p-3 bg-white text-black text-3xl rounded-3xl">Sign Up</button> 
        </nav>
    )
}