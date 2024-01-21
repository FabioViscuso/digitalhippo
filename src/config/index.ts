export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui-kits" as const,
        featured: [
            {
                name: "Editor Picks",
                href: "#",
                imgSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imgSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "Best Sellers",
                href: "#",
                imgSrc: "/nav/ui-kits/purple.jpg",
            },
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Most Loved",
                href: "#",
                imgSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imgSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Best Sellers",
                href: "#",
                imgSrc: "/nav/icons/bestsellers.jpg",
            },
        ]
    },
]

export type Category = typeof PRODUCT_CATEGORIES[number]