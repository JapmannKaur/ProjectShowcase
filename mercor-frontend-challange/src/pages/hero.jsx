import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Hero = () => {
  return (
    <section className='h-[100dvh] bg-black snap-start relative overflow-hidden'>
        <Navbar/>
        <img 
            src="/assets/blast.png" 
            alt="Vector blast"
            className='w-[100dvw] h-[100dvh] object-cover absolute top-0 left-0' 
        />
        <div className='text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-46%] text-[150px] smlap:text-[110px] mob:!text-[75px] leading-[1] font-Agrandir p-10'>
            <div className='relative z-10'>CASH</div>
            <div className='relative z-20'>APP</div>
            <img 
                src="/assets/intro-phone-1.png" 
                alt="Intro phone"
                className='h-full w-auto absolute z-[15] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' 
            />
        </div>
        <img 
            src="/assets/down.png" 
            alt="Scroll down indicator"
            className='w-7 h-9 mob:w-5 mob:h-7 absolute bottom-0 left-[50%] translate-x-[-50%] mb-6' 
        />
        <div>
            <img 
                src="/assets/intro-cube-1.png" 
                alt="Intro Cube 1"
                className='absolute left-[15%] w-28 smlap:left-[10%] smlap:w-24 smlap:top-[10%] mob:!left-[7%] mob:top-[10%] mob:!w-16' 
            />
            <img 
                src="/assets/intro-stairs-1.png" 
                alt="Intro Stairs"
                className='z-5 absolute right-[12%] w-52 smlap:right-[3%] smlap:w-44 smlap:top-[10%] mob:!right-[6%] mob:!w-28' 
            />
            <img 
                src="/assets/intro-cubes-1.png" 
                alt="Intro Cubes 1"
                className='absolute left-[15%] bottom-12 w-52 smlap:left-[10%] smlap:w-32 smlap:bottom-[10%] mob:!left-[7%] mob:!w-28' 
            />
            <img 
                src="/assets/intro-pillar-1.png" 
                alt="Intro Pillar 1"
                className='absolute right-[18%] bottom-[-11%] w-72 smlap:right-[-7%] smlap:bottom-[-5%] smlap:w-72 mob:!right-[-10%] mob:!bottom-[7%] mob:!w-40' 
            />
        </div>
        <Footer themeColor={'black'}/>
    </section>
  )
}

export default Hero
