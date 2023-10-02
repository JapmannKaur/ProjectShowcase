import React from 'react'

const Boost = () => {
  return (
    <section className='h-[100dvh] bg-black snap-start relative'>
      <div className='absolute flex items-center gap-10 smlap:flex-col-reverse revsmlap:w-[24vw] top-[50%] right-[50%] -translate-y-[50%] -translate-x-[22%] mob:top-[42%] smlap:w-[300px] smlap:translate-x-[50%] smlap:gap-8 mob:!w-[200px] z-50'>
        <div className='relative z-10 revsmlap:bottom-16'>
          <h1 className='text-3xl mob:text-xl font-Agrandir text-[#00D54B]'>
            Cash Card & Boost
          </h1>
          <p className='revsmlap:w-[350px] mob:w-[86dvw] text-white font-Mulish mob:text-sm'>
            The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          src="/assets/boost-phone.png" 
          alt="Boost phone" 
          className='smlap:w-[150px] revsmlap:w-[70%] revsmlap:translate-y-[5%]'
        />
      </div>
      <img
        src="/assets/boost-stairs-2.png" 
        alt="Boost Stairs 2" 
        className='absolute bottom-0 left-0 w-[23%]'
      />
      <img
        src="/assets/boost-stairs-1.png" 
        alt="Boost Stairs 1" 
        className='absolute bottom-0 right-0 w-[60%]'
      />
      <img
        src="/assets/boost-shoe.png" 
        alt="Boost Shoe"
        className='absolute bottom-[34.7%] right-[1.4%] w-[6.5%] smlap:!hidden mdlap:translate-y-[15%]'
      />
      <img
        src="/assets/boost-coffee.png" 
        alt="Boost Coffee" 
        className='absolute bottom-[16%] right-[20%] w-[5%] smlap:hidden mdlap:translate-y-[15%]'
      />
      <img
        src="/assets/boost-burger.png" 
        alt="Boost Burger" 
        className='absolute bottom-[35%] right-[26.5%] w-[4.8%] smlap:hidden mdlap:translate-y-[15%]'
      />
      <img
        src="/assets/boost-card.png" 
        alt="Boost Card" 
        className='absolute bottom-[55%] right-[20%] w-[5%] smlap:hidden mdlap:translate-y-[15%]'
      />
      <img
        src="/assets/boost-hand.png" 
        alt="Boost Hand" 
        className='absolute top-[12%] right-[13%] w-[4.7%] smlap:hidden mdlap:translate-y-[22%]'
      />
    </section>
  )
}

export default Boost
