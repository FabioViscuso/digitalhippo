import Link from "next/link"
import { Icons } from "@/components/ui/Icons"

const Navbar = () => {
    return (
        <nav className="bg-white bg-opacity-40 border-b border-gray-200 backdrop-blur-sm sticky top-0 inset-x-0 h-16 px-4">
            <header className="relative h-full flex items-center">
                <div className="ml-4 flex lg:ml-0">
                    <Link href={'/'}>{<Icons.navLogo className="h-12 w-12" />}</Link>
                </div>
            </header>
        </nav>
    )
}

export default Navbar