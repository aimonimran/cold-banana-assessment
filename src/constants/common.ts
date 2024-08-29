import { APP_IMAGES } from "./images";

export const navRoutes = [
    { id: 1, title: 'Home' },
    { id: 1, title: 'About' },
    { id: 1, title: 'Blog' },
    { id: 1, title: 'Pricing' },
]

export const footerRoutes = [
    {
        id: 1,
        title: 'Company',
        items: [
            { id: 1, name: 'About' },
            { id: 2, name: 'Careers' },
            { id: 3, name: 'Our Work' },
            { id: 4, name: 'Contact' }
        ]
    },
    {
        id: 2,
        title: 'Products',
        items: [
            { id: 1, name: 'About' },
            { id: 2, name: 'Careers' },
            { id: 3, name: 'Our Work' },
            { id: 4, name: 'Contact' }
        ]
    }
];

export const socials = [
    { id: 1, imgSrc: APP_IMAGES.plane },
    { id: 2, imgSrc: APP_IMAGES.twitter },
    { id: 3, imgSrc: APP_IMAGES.youtube },
    { id: 4, imgSrc: APP_IMAGES.facebook },
    { id: 5, imgSrc: APP_IMAGES.instagram },
    { id: 6, imgSrc: APP_IMAGES.tiktok },
]