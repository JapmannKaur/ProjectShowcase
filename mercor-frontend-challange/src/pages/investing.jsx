import React from 'react'
import Footer from '../components/footer'

const Investing = () => {
  return (
    <section className='h-[100dvh] bg-[#00D54B] snap-start relative overflow-y-hidden'>
      <div className='absolute w-[100%] mob:!h-[100%] mob:top-[2%] revsmlap:top-[50%] left-[50%] -translate-x-[50%] revsmlap:-translate-y-[60%] smlap:top-[3%] flex flex-col gap-16 smlap:gap-12 mob:!gap-5 items-center z-50 mob:!justify-center'>
        <h1 className='text-3xl mob:text-xl font-Agrandir text-white'>
          Investing
        </h1>
        <div className='mob:w-[86dvw] flex flex-row gap-20 smlap:gap-10 mob:!h-full items-center mob:!flex-col mob:!h-full mob:!justify-evenly mob:!pb-7'>
          <div className='flex flex-row gap-8 justify-center items-center smlap:flex-row-reverse mob:!flex-col-reverse mob:!gap-6'>
            <div className='revsmlap:-translate-y-[50%]'>
              <h1 className='text-xl text-black font-Agrandir mob:!text-[16px]'>
                Stocks
              </h1>
              <p className='revsmlap:w-[350px] mob:!w-[86dvw] text-black font-Mulish mob:text-sm smlap:w-[300px]'>
                Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.
              </p>
            </div>
            <img 
              src="/assets/investing-stocks.png" 
              alt="Investing Stocks" 
              className='block smlap:w-[100px] mob:!w-[50px]'
            />
          </div>
          <div className='flex flex-row gap-8 justify-center items-center mob:!flex-col mob:!gap-6'>
            <img 
              src="/assets/investing-bitcoin.png" 
              alt="Investing Bitcoin" 
              className='block smlap:w-[100px] mob:!w-[50px]'
            />
            <div className='revsmlap:-translate-y-[50%]'>
              <h1 className='text-xl text-black font-Agrandir mob:!text-[16px]'>
                Bitcoin
              </h1>
              <p className='revsmlap:w-[350px] mob:!w-[86dvw] text-black font-Mulish mob:text-sm smlap:w-[300px]'>
                Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="/assets/investing-rays.png" 
        alt="Investing Rays" 
        className='absolute h-full w-full'
      />
      <img 
        src="/assets/investing-floor.png" 
        alt="Investing Floor" 
        className='absolute bottom-0 w-full mob:h-[46%] mob:hidden'
      />
      <img 
        src="/assets/investing-graph-1.png" 
        alt="Investing Graph 1" 
        className='absolute left-0 bottom-0 mob:hidden'
      />
      <img 
        src="/assets/investing-graph-2.png" 
        alt="Investing Graph 2" 
        className='absolute right-0 bottom-[35%] mob:hidden'
      />
      <img 
        src="/assets/investing-floor-mobile.png" 
        alt="Investing Floor Mobile" 
        className='absolute bottom-0 w-full bg-white mob:h-[46%] revmob:hidden'
      />
      <Footer themeColor={'white'}/>
    </section>
  )
}

export default Investing
