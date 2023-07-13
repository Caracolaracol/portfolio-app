'use client'
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import actia from '@/public/images/actia.png'
import cast from '@/public/images/castn.png'
import maripn from '@/public/images/maripn.png'
import marip from '@/public/images/marip.png'
import { useTheme } from 'next-themes';
import { useAtom } from 'jotai';
import { hideNavBarMenuAtom, isShowingNavBarMenuAtom, languageAtom, showNavBarMenuAtom } from '@/app/Store';
import { NAV_NAMES } from '@/config/nav';
import { usePathname } from 'next/navigation';

function NavBarMobile() {
    const [mounted, setMounted] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [isActive, setIsActive ] =useState(null)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [language, setLanguage] = useAtom(languageAtom)
    const open = Boolean(anchorEl)

    const wrapperNavBarRef = useRef<any>(null)
    const ulNavBarRef = useRef<any>(null)
    const [showNavBar, setShowNavBar] = useAtom(showNavBarMenuAtom)
    const [isShowingNavBar, setIsShowingNavBar] = useAtom(isShowingNavBarMenuAtom)
    const [hideNavBarAnimation, setHideNavBarAnimation] = useAtom(hideNavBarMenuAtom)

    const themeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const languageHandler = () => {
        language === 'EN' ? setLanguage('ES') : setLanguage('EN')
    }

    const handlerSide = () => {
        if (isShowingNavBar == false){
            setShowNavBar(true)
            setIsShowingNavBar(true)
        } else {
            setHideNavBarAnimation(true)
            setTimeout(() => {
                setShowNavBar(false)
                setIsShowingNavBar(false)
                setHideNavBarAnimation(false)  
            }, 452);
        }
    }

    useEffect(() => {
        setMounted(true)
        // SHOW AND HIDE NAVBAR HANDLER
        const sideMenuHandler = () => {
            if (isShowingNavBar == true) {
                setHideNavBarAnimation(true)
                setTimeout(() => {
                    setShowNavBar(false)
                    setIsShowingNavBar(false)
                    setHideNavBarAnimation(false)
                }, 452);
            }
        }
        function handleClickOutside(event: any) {
            if (wrapperNavBarRef.current && !wrapperNavBarRef.current.contains(event.target)) {
                sideMenuHandler()
            }
            if (ulNavBarRef.current && ulNavBarRef.current.contains(event.target)) {
                sideMenuHandler()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [wrapperNavBarRef, isShowingNavBar, setHideNavBarAnimation, setIsShowingNavBar, setShowNavBar])


    if (!mounted) {
        return null
    }


    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const styles = 'tablet:text-xl text-snow self-center text-center font-tommyregular'


    return (
        <div >
            <div onClick={handlerSide} className={`flex flex-col max-h-[3.6rem] min-h-[3.6rem] justify-end items-center mb-1`} >
                <div className='flex justify-center bg-violetad bg-violeta  dark:bg-violeta svgmorado rounded-full w-9 h-9 items-center cursor-pointer'>
                    <p className='text-naranja dark:text-fucsia font-tommybold font-black text-lg svg'>{`//`}</p>
                </div>
                <div>
                    <p className='font-tommyregular text-[0.7rem] opacity-80 antialiased text-center tablet:text-whitem dark:text-fucsia hover:cursor-pointer hover:text-naranjad px-2 rounded-2xl active:bg-violetadl transition-colors active:bg-opacity-70 tracking-wider'>Menu</p>
                </div>
            </div>
            <nav ref={wrapperNavBarRef}   className={`${showNavBar ? "!block showNavBar" : ""} ${hideNavBarAnimation ? "hidenavbar" : "" } hidden laptop:shownavbar fixed top-0 right-0 z-30 w-[10rem] h-[280px] bg-black dark:bg-richblack`} >
                <div onClick={handlerSide} className="absolute top-2 flex flex-col items-center group">
                    <div className='flex justify-center bg-naranja  dark:bg-violeta filtromorado w-8 h-8 tablet:w-8 tablet:h-8 items-center active:bg-violetaactive dark:active:bg-violetaactive transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
                        <p className='text-snow text-violeta dark:text-naranja font-tommybold font-black text-lg tablet:text-lg svg group-hover:text-fucsia'>{` { `}</p>
                    </div>
                    <div className="cursor-pointer min-w-[59px]">
                        <p className='font-tommyregular text-[0.6rem] tablet:text-[0.6rem] opacity-80 antialiased text-center text-snow dark:text-fucsia transition-colors tracking-wider '>{language == 'EN' ? 'close' : 'cerrar'}</p>
                    </div>
                </div>
                <div className='mt-[4.4rem] w-[95%] border-t-[1px] border-t-timberwolf/50 dark:border-t-timberwolf/70 my-2 ml-auto'></div>
                <ul ref={ulNavBarRef}>
                    {
                        NAV_NAMES.map((link) => {
                            const isActive = pathname.startsWith(link.direccion);

                            return (
                                <li key={link.name} className='laptop:max-w-[8rem] laptop:min-w-[4.8rem] text-center showOpacity-1 my-3'>
                                    <Link
                                        href={link.direccion}
                                        className={`${styles} ${isActive ? '!text-ocre dark:!text-ocre' : ''} `
                                        }
                                    >
                                        {language == 'EN' ? link.name : link.nameES}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=' mx-auto w-[80%] border-t-[1px] border-t-timberwolf/50 dark:border-t-timberwolf/70 my-2'></div>
                <div className='flex flex-row justify-center'>
                    <div onClick={themeHandler} className='flex w-full flex-col cursor-pointer items-center justify-center'>

                        <Image src={maripn} alt='luciernaga' className={`w-12 h-auto ${theme === 'dark' ? 'hidden' : ''} cursor-pointer`} />
                        <Image src={marip} alt='abeja' className={`w-12 h-auto ${theme === 'light' ? 'hidden' : ''} cursor-pointer`} />
                        <div>
                            <p className='font-tommyregular text-snow text-xs antialiased text-center tracking-wider'>{theme === 'dark' ? 'light mode' : 'dark mode'}</p>
                        </div>
                    </div>
                    <div onClick={languageHandler} className='flex w-full flex-col items-center cursor-pointer justify-center'>
                        <Image src={cast} alt='castnia moth' className={`w-10 grow h-auto ${language == 'ES' ? 'hidden' : ''} cursor-pointer`} />
                        <Image src={actia} alt='actias luna' className={`w-10 grow h-auto ${language == 'EN' ? 'hidden' : ''} cursor-pointer`} />
                        <div>
                            <p className='font-tommyregular text-snow text-xs antialiased text-center tracking-wider'>{language == 'ES' ? 'english' : 'español'}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBarMobile