import { footerRoutes, socials } from '@/constants/common'
import { APP_IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='md:mt-16 flex items-start p-6 md:px-[71px] md:py-[42px]'>
            <Image src={APP_IMAGES.ellipseBottom} alt='' width={500} height={500} className='hidden md:block absolute bottom-0 left-0 -z-10 w-[726.32px] h-[641.86px]' />

            <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 w-full'>
                <div className='lg:w-1/2 md:text-white flex flex-col gap-[21px]'>
                    <h2 className='font-bold text-3xl md:text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-green to-blue md:text-white cursor-pointer'>Chilled Grape</h2>
                    <p className='font-normal text-xl md:text-[22px] xl:w-3/4 2xl:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='lg:w-1/2 flex flex-wrap md:flex-nowrap gap-10 md:justify-between'>
                    {footerRoutes.map(item => (
                        <div key={item.id} className='flex flex-col gap-[21px]'>
                            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-green to-blue font-medium text-xl md:text-black xl:text-transparent'>{item.title}</h3>
                            <div className='flex flex-col gap-3'>
                                {item.items.map(each => (
                                    <p key={each.id} className='font-normal text-lg cursor-pointer'>{each.name}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className='flex flex-col gap-[21px]'>
                        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-green to-blue font-medium text-xl md:text-black xl:text-transparent'>Follow us</h3>
                        <div className='grid grid-cols-3 gap-x-5 md:gap-x-[38px] gap-y-[23px]'>
                            {socials.map(item => (
                                <div key={item.id} className='bg-gradient-to-r from-green to-blue cursor-pointer w-[45px] h-[45px] rounded-lg flex items-center justify-center'>
                                    <Image src={item.imgSrc} alt='' width={200} height={200} className='w-6 h-6' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer)