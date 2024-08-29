import { APP_IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import Button from '../button'

const Hero = () => {
    return (
        <div className='relative min-h-screen flex items-center justify-center lg:justify-start '>
            <div className='flex flex-col justify-center gap-[15px] -mt-40 z-30 max-w-7xl mx-auto xl:ml-96'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-[64px] lg:leading-[96px] font-bold uppercase'>Lorem ipsum <br />dolor sit amet.</h1>
                <Button title='Read More' styles='h-10 md:w-[249px] lg:h-[60px] lg:text-[22px]' />
            </div>

            <Image src={APP_IMAGES.ellipseTopLeft} alt='' width={500} height={500} className='absolute top-0 left-0 w-[200px] h-[170px] md:w-[400px] md:h-[300px] xl:w-[566.7px] xl:h-[450.75px]' />
            <Image src={APP_IMAGES.ellipseCenterTop} alt='' width={500} height={500} className='hidden xl:block absolute top-[12vh] left-[40vw] xl:w-[332.69px] xl:h-[258.91px]' />
            <Image src={APP_IMAGES.ellipseCenterRight} alt='' width={500} height={500} className='absolute right-0 top-[8vh] md:top-[35vh] lg:top-[25%] w-[150px] md:w-[400px] h-[380px] xl:w-[566.7px] xl:h-[516.96px] z-20' />
            <Image src={APP_IMAGES.ellipseBottomLeft} alt='' width={500} height={500} className='absolute bottom-[10%] left-0 w-[200px] md:w-[300px] h-[280px] lg:w-[372.81px] lg:h-[336.49px]' />
            <Image src={APP_IMAGES.ellipseBottomRight} alt='' width={500} height={500} className='hidden lg:block absolute bottom-[15%] lg:bottom[40%] right-[15vw] lg:w-[380px] xl:w-[427.41px] xl:h-[319.14px]' />
        </div>
    )
}

export default React.memo(Hero);