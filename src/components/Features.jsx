import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { AnimateWithGsap } from '../utils/Animation'
import { explore1Img, explore2Img, exploreVideo } from '../utils'

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {

        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom ',
                
            },
            onComplete: () => {
                videoRef.current.play()
            }
        })
    

    AnimateWithGsap('#features_title', {y: 0, opacity: 1})
    AnimateWithGsap(
            '.g_grow', 
        { scale: 1, opacity: 1, ease: 'power1'},
        { scrub: 5.5}
    )
    AnimateWithGsap(
        '.g_text', 
        { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1}
    )
    }, [])

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
        <div className='screen max-width'>
            <div className='mb-12 w-full'>
                <h1 id='features_title' className='section-heading'>
                    Explore The Full Story.
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl lg:7xl font-semibold'>Iphone.</h2>
                    <h2 className='text-5xl lg:7xl font-semibold'>Forged In Titanium.</h2>
                </div>
                <div className='flex-center flex-col sm:px-10 '>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <video playsInline id='exploreVideo' className='w-full h-full object-cover object-center' preload='none' muted autoPlay ref={videoRef}>
                            <source src={exploreVideo} type='video/mp4'/>
                        </video>
                    </div>
                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container'>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore1Img} alt="titanium" className='feature-video g_grow'/>
                            </div>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore2Img} alt="titanium2" className='feature-video g_grow'/>
                            </div>
                        </div>
                        <div className='feature-text-container'>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>
                                    Iphone 15 Pro Is {' '}
                                    <span className='text-white'>
                                        The First Iphone To Feature An Aerospace-Grade Titanium Design
                                    </span>
                                    Using The Same Alloy That Spacecraft Use For Missing To Mars
                                </p>
                            </div>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>
                                    Titanium Has One Of The Best Strenth-To-Weight Ratios Of Any Metal Making These Ours{' '}
                                    <span className='text-white'>
                                        Lightest Pro Model Ever
                                    </span>
                                    You'll Notice The Differing The Moment You Pick One Up
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features