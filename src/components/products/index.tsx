'use client';

import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from '../cards/ProductCard';
import Loader from '../loaders/Loader';

export interface Product {
    id: number,
    product_name: string,
    price: number,
    image: string,
    stock_count: number
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    const getAllProducts = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products', {
                method: 'GET'
            });

            if (response) {
                const data = await response.json();

                if (data) {
                    setProducts(data[0])
                }
            }
        } catch (error) {
            console.log('Error fetching products', error)
        } finally {
            setIsLoading(false)
        }
    }, [setIsLoading, setProducts]);

    useEffect(() => {
        getAllProducts();
    }, []);

    if (isLoading) {
        return (
            <div className='py-36 flex justify-center'>
                <Loader />
            </div>
        )
    }
    return (
        <div className='flex flex-col py-36 gap-8'>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 '>
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>

            <p className='cursor-pointer text-blue font-semibold text-2xl'>Load More</p>
        </div>
    )
}

export default React.memo(Products);