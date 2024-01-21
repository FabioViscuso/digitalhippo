"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import type { Category } from "@/config"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean
}

const NavItem = ({ isAnyOpen, isOpen, handleOpen, category }: Props) => {
    return (
        <div className="flex">
            <div className="relative flex">
                <Button
                    onClick={handleOpen}
                    className="gap-1.5"
                    variant={isOpen ? "secondary" : "ghost"}
                >
                    {category.label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", { '-rotate-180': isOpen })} />
                </Button>

                {
                    isOpen &&
                    <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen })}>
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden />
                        <div className="relative bg-white">
                            <div className="mx-auto max-w-7 px-8">
                                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                        {category.featured.map(featured => (
                                            <div key={featured.name} className="group relative sm:text-sm text-base">
                                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <Image
                                                        src={featured.imgSrc}
                                                        alt={`${featured.name} category image`}
                                                        fill
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                                <Link href={featured.href} className="mt-6 block font-medium text-gray-900">{featured.name}</Link>
                                                <p className="mt-1" aria-hidden >Shop now</p>
                                            </div>
                                        )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavItem
