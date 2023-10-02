import React from 'react'

const Footer = ({themeColor}) => {

  const antiThemeColor = themeColor === "black" ? "white" : "black"

  return (
    <footer className='absolute w-[100dvw] bottom-0 flex flex-row justify-between p-6 px-14 mdlap:px-10 smlap:hidden'>
      <div className='flex flex-row items-center gap-5'>
        <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-${antiThemeColor}-800 rounded-md bg-${themeColor}`}>
          <img 
            src="/assets/apple-green.png" 
            alt="Apple icon"
            className='w-5'
          />
          <div className={`text-${antiThemeColor} font-Agrandir text-[12px]`}>
            APP STORE
          </div>
        </button>
        <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-${antiThemeColor}-800 rounded-md bg-${themeColor}`}>
          <img 
            src="/assets/playstore-green.png" 
            alt="PLay Store icon"
            className='w-5'
          />
          <div className={`text-${antiThemeColor} font-Agrandir text-[12px]`}>
            PLAY STORE
          </div>
        </button>
      </div>
      <div className='flex flex-row items-center gap-8'>
        <p className={`text-${antiThemeColor} text-xs font-Mulish w-[600px]`}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
          See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </p>
        <div className='flex flex-row items-center gap-8'>
          <button>
            <img 
              src={`/assets/twitch-${antiThemeColor}.png`} 
              alt="Twitch icon"
              className='w-5'
            />
          </button>
          <button>
            <img 
              src={`/assets/twitter-${antiThemeColor}.png`} 
              alt="Twitter icon"
            />
          </button>
          <button>
            <img 
              src={`/assets/instagram-${antiThemeColor}.png`} 
              alt="Instagram icon"
              className='w-5'
            />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
