import Link from "next/link";

export default function Header() {
    return (
        <nav className="px-4 py-6 bg-gray-100">      
             <ul className="flex" role="navigation">
                <li className="mx-4">
                    <Link href="/">Home</Link>
                </li>
                <li className="mx-4">
                    <Link href="/html-generator">Html generator</Link>
                </li>
                <li className="mx-4">
                    <Link href="/about">about</Link>
                </li>
            </ul>  
      </nav>
    )
}