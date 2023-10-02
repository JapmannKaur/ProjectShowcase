import React from 'react'

const FooterMobile = () => {
  return (
    <section className='h-[100dvh] bg-black snap-start relative overflow-hidden flex justify-center items-center'>
      <div className='flex flex-col gap-8 items-center justify-center w-[86dvw]'>
        <div>
          <h1 className='text-xl text-white font-Agrandir mob:!text-[16px]'>
            Policy terms
          </h1>
          <p className='revsmlap:w-[350px] mob:!w-[86dvw] text-white font-Mulish mob:text-sm smlap:w-[300px]'>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
          </p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5'>
          <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-white rounded-md`}>
            <img 
              src="/assets/apple-green.png" 
              alt="Apple icon"
              className='w-4'
            />
            <div className={`text-white font-Agrandir text-[9px]`}>
              APP STORE
            </div>
          </button>
          <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-white rounded-md`}>
            <img 
              src="/assets/playstore-green.png" 
              alt="PLay Store icon"
              className='w-4'
            />
            <div className={`text-white font-Agrandir text-[9px]`}>
              PLAY STORE
            </div>
          </button>
        </div>
        <div className='flex flex-row items-center gap-10'>
          <button>
            <img 
              src={`/assets/twitch-white.png`} 
              alt="Twitch icon"
              className='w-7'
            />
          </button>
          <button>
            <img 
              src={`/assets/twitter-white.png`} 
              alt="Twitter icon"
              className='w-7'
            />
          </button>
          <button>
            <img 
              src={`/assets/instagram-white.png`} 
              alt="Instagram icon"
              className='w-7'
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FooterMobile
