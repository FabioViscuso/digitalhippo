"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/useOnClickOutside"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setActiveIndex(null))

    useEffect(() => {
        const onEscCloseHandler = (event: KeyboardEvent) => {
            if (event.key === "escape") {
                setActiveIndex(null)
            }
        }
        document.addEventListener("keydown", onEscCloseHandler)

        return () => {
            document.removeEventListener("keydown", onEscCloseHandler)
        }
    }, [])

    return (
        <div className="flex gap-4 h-full items-center" ref={navRef} >
            {PRODUCT_CATEGORIES.map((category, index) => {
                
                const handleOpen = () => {
                    if (activeIndex === index) setActiveIndex(null)
                    else setActiveIndex(index)
                }

                const isOpen = index === activeIndex;

                return (
                    <NavItem
                        close={() => close()}
                        key={category.value}
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen} />
                )
            })}
        </div>
    )
}

export default NavItems