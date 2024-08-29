import Button from '@/components/button'
import { navRoutes } from '@/constants/common'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-6 md:px-[71px] md:py-[42px] absolute top-0 w-full z-50'>
            <div className='md:w-1/2'>
                <h1 className='uppercase font-bold md:text-2xl lg:text-4xl text-white cursor-pointer '>Chilled Grape</h1>
            </div>

            <div className='hidden sm:flex items-center justify-end gap-10 md:gap-14 xl:gap-32 w-7/12 lg:w-1/2'>
                <div className='flex items-center justify-around gap-4 md:w-1/2'>
                    {navRoutes.map(item => <p key={item.id} className='font-semibold cursor-pointer'>{item.title}</p>)}
                </div>

                <Button title='Login' />
            </div>
        </div>
    )
}

export default React.memo(Navbar)