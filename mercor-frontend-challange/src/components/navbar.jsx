import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscClose} from 'react-icons/vsc'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => setShowMenu(!showMenu)
    const container = {
        closed: { opacity: 0, width:'0vw', height: '100vh' },
        open: {
          opacity: 1,
          width:'100vw',
          height: '100vh'
        }
    }

    return (
        <div>
            <motion.div
                className='revsmlap:hidden fixed top-0 left-0 h-[100vh] bg-black z-50 flex justify-center items-center gap-6 text-white font-Agrandir text-[12px]'
                animate={showMenu ? 'open' : 'closed'}
                initial='closed'
                variants={container}
            >   
                <div className='flex flex-col justify-center gap-6 text-lg h-[100dvh]'>
                    <button>LEGAL</button>
                    <button>LICENSES</button>
                    <button>SECURITY</button>
                    <button>CAREERS</button>
                    <button>PRESS</button>
                    <button>SUPPORT</button>
                    <button>STATUS</button>
                    <button>CODEBLOG</button>
                    <div className='absolute top-3 right-2'>
                        <button onClick={handleMenu}>
                            <VscClose className='text-white w-10 h-10'/>
                        </button>
                    </div>
                </div>
            </motion.div>
            <div className='flex w-[100dvw] justify-between items-center p-4 pl-6 pr-8 overflow-hidden mob:px-4 relative z-40'>
                <img 
                    src="/assets/logo.svg" 
                    alt="CashApp Logo"
                    className='w-6' 
                />
                <div className='smlap:hidden flex items-center justify-center gap-6 text-white font-Agrandir text-[12px]'>
                    <button>SIGN IN</button>
                    <button>LEGAL</button>
                    <button>LICENSES</button>
                    <button>SECURITY</button>
                    <button>CAREERS</button>
                    <button>PRESS</button>
                    <button>SUPPORT</button>
                    <button>STATUS</button>
                    <button>CODEBLOG</button>
                </div>
                <div className='revsmlap:hidden w-full flex justify-end items-center gap-6 pr-6 mob:pr-4 mob:gap-4'>
                    <button className='text-white font-Agrandir text-[12px]'>
                        SIGN IN
                    </button>
                    <button onClick={handleMenu}>
                        <GiHamburgerMenu className='text-white w-7 h-7' /> 
                    </button>
                </div>
                <img 
                    src="/assets/eye.png" 
                    alt="eye"
                    className='w-12' 
                />
                
            </div>
        </div>
    )
    }

export default Navbar
