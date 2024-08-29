import React from 'react'
import Button from '../button'
import Image from 'next/image'
import { APP_IMAGES } from '@/constants/images'

const About = () => {
    return (
        <div className='flex items-center justify-center flex-col md:flex-row'>
            <div className='md:w-1/2 flex flex-col gap-8 justify-center'>
                <h1 className='font-bold text-3xl md:text-4xl 2xl:w-3/4'>
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className='font-normal text-lg md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button title='Read More' />
            </div>

            <div className='flex items-center justify-center md:w-1/2 '>
                <div className='relative w-[300px] lg:w-[524px] lg:h-[789px] z-30'>
                    <Image src={APP_IMAGES.plant} alt='plant' width={500} height={500} className='' />

                    <div className='-z-10 absolute bottom-0 lg:bottom-28 xl:bottom-0 lg:w-[450px] lg:h-[400px] xl:w-[566.7px] xl:h-[516.96px]'>
                        <Image src={APP_IMAGES.ellipsePlantBg} alt='' width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(About)