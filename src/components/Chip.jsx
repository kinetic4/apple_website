import React, { useRef } from 'react'
import gsap from 'gsap'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { AnimateWithGsap } from '../utils/Animation'

const Chip = () => {
    const videoRef = useRef();


    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '-20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })


        AnimateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, [])


    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 Pro Chip
                        <br /> A Monster Win For Gaming
                    </h2>
                    <p className='hiw-subtitle'>
                        It's Here. The Biggest Redesign In The History Of Apple GPUs.
                    </p>
                </div>
                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex-center'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="Frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <p className='text-gray font-semibold text-center mt-3'>
                        Honkai: Star Rail
                    </p>
                    </div>
                    <div className='hiw-text-container'>
                        <div className='flex flex-1 justify-center flex-col'>
                            <p className='hiw-text g_fadeIn'>
                                A17 Pro Is An Entirly New Class Of Iphone Chip That Delivers Our {' '}
                                <span className='text-white'>
                                    Best Graphic Performance By Far
                                </span>
                            </p>

                        <p className='hiw-text g_fadeIn'>
                            Mobile {' '}
                            <span className='text-white'>
                                Games Will Look And Feel So Immersive
                            </span>,
                            With Incredible Detailed Enviroment And Characters.
                        </p>
                        </div>
                    
                    <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                        <p className='hiw-text'>New</p>
                        <p className='hiw-bigtext'>Pro-Class-GPU</p>
                        <p className='hiw-text'>With 6 Cores</p>
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default Chip