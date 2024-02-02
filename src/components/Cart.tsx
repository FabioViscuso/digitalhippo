import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

const Cart = () => {
    //
    const itemCount = 0
    const total = 35
    const fee = 4
    //
    return <Sheet>
        <SheetTrigger className="flex group -m-2 items-center p-2">
            <ShoppingCart
                aria-hidden
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
            </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>Cart {0}</SheetTitle>
            </SheetHeader>
            {itemCount > 0
                ? <>
                    <div className="flex flex-col w-full pr-6">
                        Cart items
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator />
                        <div className="space-y-1.5 text-sm">
                            <div className="flex">
                                <span className="flex-1">Shipping</span>
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="space-y-1.5 text-sm">
                            <div className="flex">
                                <span className="flex-1">Transaction fee</span>
                                <span>{formatPrice(fee, {})}</span>
                            </div>
                        </div>
                        <div className="space-y-1.5 text-sm">
                            <div className="flex">
                                <span className="flex-1">Total</span>
                                <span>{formatPrice(total + fee, {})}</span>
                            </div>
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetTrigger asChild>
                            <Link href={'/cart'} className={buttonVariants({className: 'w-full'})}>Continue to Checkout</Link>
                        </SheetTrigger>
                    </SheetFooter>
                </>
                : <>
                    <div className="flex flex-col items-center justify-center h-full space-y-1">
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <Image src={'/hippo-empty-cart.png'} fill alt="empty shopping cart" aria-hidden="true" />
                        </div>
                        <span className="text-xl font-semibold">Your cart is empty</span>
                        <SheetFooter>
                        <SheetTrigger asChild>
                            <Link 
                                href={'/products'} 
                                className={buttonVariants({
                                    variant: "link", 
                                    size: "sm",
                                    className: "text-sm text-muted-foreground"
                                    })}
                                >Explore products</Link>
                        </SheetTrigger>
                    </SheetFooter>
                    </div>
                </>
            }
        </SheetContent>
    </Sheet>
}

export default Cart
