import { Product } from '@/components/products';
import Image from 'next/image';
import React, { useMemo } from 'react'

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const bgColor = useMemo(() => {
        const match = product.image.match(/\/([0-9a-fA-F]{6})\//);
        return match ? `#${match[1]}` : '#ffffff';
    }, [product.image]);

    return (
        <div key={product.id} className='shadow-[0px_4px_20px_5px_#00000026] rounded-[30px] overflow-hidden cursor-pointer'>
            <div style={{ backgroundColor: bgColor }} className='rounded-[30px]'>
                <Image src={product.image} alt='' width={314} height={314} className='rounded-[30px] object-contain w-full h-[314px] shadow-[0px_8px_20px_0px_#00000040]' />
            </div>
            <div className='pt-[31px] px-[19px] pb-[23px]'>
                <p className='font-bold text-lg md:text-2xl uppercase truncate max-w-[300px]'>{product.product_name}</p>
                <p className='text-gray font-bold text-lg md:text-2xl'>£{product.price}</p>
            </div>
        </div>
    );
}

export default React.memo(ProductCard);