import { cn } from '@/lib/utils';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

interface LoaderProps {
    styles?: string;
    size?: 'xs' | 'sm' | 'base';
}

const Loader = ({ size = 'sm', styles }: LoaderProps) => {
    return (
        <ImSpinner2
            className={cn(
                'animate-spin',
                size === 'xs' ? 'text-lg' : size === 'sm' ? 'text-2xl' : 'text-4xl',
                styles
            )}
        />
    );
};

export default React.memo(Loader);