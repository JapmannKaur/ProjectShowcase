import React from 'react'

const Payments = () => {
  return (
    <section className='h-[100dvh] bg-[#F8F6F6] snap-start relative overflow-y-hidden'>
      <div className='absolute flex items-center smlap:flex-col-reverse revsmlap:w-[650px] top-[50%] right-[50%] -translate-y-[50%] translate-x-[7%] smlap:translate-x-[50%] smlap:gap-10 mob:w-[300px] z-20'>
        <div className='relative z-10 revsmlap:left-52 revsmlap:bottom-10'>
          <h1 className='text-3xl mob:text-xl font-Agrandir text-[#00D54B]'>
            Payments
          </h1>
          <p className='revsmlap:w-[350px] mob:w-[86dvw] font-Mulish mob:text-sm'>
          Send and receive money with anyone, donate  to an important cause, or tip professionals. 
          Just enter a $cashtag, phone number, or 
          scan their  QR code to pay.
          </p>
        </div>
        <img
          src="/assets/payments-phone-1.png" 
          alt="Payments Phone 1" 
        />
      </div>
      <img 
        src="/assets/payments-column-1.png"
        alt="Payments column 1"
        className='absolute bottom-0 w-[180px] smlap:w-[135px] mob:!w-[60px] mob:!bottom-[-5%] z-[5]' 
      />
      <img 
        src="/assets/payments-column-2.png"
        alt="Payments column 2"
        className='absolute bottom-0 h-[410px] right-[17%] z-10 smlap:h-[320px] smlap:right-[7%] mob:!h-[155px] mob:!right-[5%] mob:!bottom-[-5%] mob:!z-0' 
      />
      <img 
        src="/assets/payments-column-3.png"
        alt="Payments column 3"
        className='absolute bottom-[10%] h-[445px] right-0 smlap:hidden' 
      />
      <img 
        src="/assets/payments-pillar-small.png"
        alt="Payments pillar small"
        className='absolute bottom-[8%] h-[125px] left-[21%] smlap:hidden' 
      />
      <img 
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className='absolute bottom-[3%] h-[240px] left-[14%] smlap:hidden' 
      />
      <img 
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className='absolute bottom-[5%] h-[240px] left-[50%] -translate-x-[50%] smlap:hidden z-30' 
      />
      <img 
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className='absolute bottom-[-10%] h-[240px] right-[34%] smlap:hidden z-30' 
      />
      <img 
        src="/assets/payments-pillar-large.png"
        alt="Payments pillar large"
        className='absolute bottom-[8.4%] right-[33%] smlap:bottom-[79%] smlap:right-[67%] mob:h-[120px]' 
      />
      <img 
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className='absolute bottom-[24%] h-[230px] right-[14.5%] smlap:bottom-[82%] mob:h-[145px]' 
      />
    </section>
  )
}

export default Payments
