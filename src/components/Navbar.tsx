import Link from "next/link"
import { Icons } from "@/components/ui/Icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"

//
const user = 1
//

const Navbar = () => {
    return (
        <nav className="bg-white bg-opacity-40 border-b border-gray-200 backdrop-blur-sm sticky top-0 inset-x-0 h-16 px-4">
            <header className="relative h-full flex items-center">
                <div className="ml-4 flex lg:ml-0">
                    <Link href={'/'}>{<Icons.navLogo className="h-12 w-12" />}</Link>
                </div>
                <div className="hidden lg:block lg:self-stretch lg:ml-8">
                    <NavItems />
                </div>

                <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        {
                            !user &&
                            <Link href={'/signin'} className={buttonVariants({variant: "ghost"})}>
                                Sign In
                            </Link>
                        }
                        {
                            !user &&
                            <Link href={'/signup'} className={buttonVariants({variant: "ghost"})}>
                                Sign Up
                            </Link>
                        }
                        {
                            user &&
                            <Cart />
                        }
                    </div>
                </div>
            </header>
        </nav>
    )
}

export default Navbar