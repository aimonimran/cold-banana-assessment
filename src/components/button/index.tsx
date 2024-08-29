import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps {
    title: string;
    styles?: string
}

const Button = ({ title, styles }: ButtonProps) => {
    return (
        <div className={cn(
            'bg-gradient-to-r from-green to-blue flex items-center justify-center rounded-[100px] cursor-pointer w-[100px] md:w-[175px] h-[40px]',
            styles
        )}>
            <p className='font-semibold text-white'>{title}</p>
        </div>
    )
}

export default React.memo(Button);