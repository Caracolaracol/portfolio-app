'use client'
import React, { useEffect, useState } from 'react'

import * as Tooltip from '@radix-ui/react-tooltip';

import { useAtom } from 'jotai';
import { languageAtom } from '@/app/Store';

import actia from '@/public/images/actia.png'
import cast from '@/public/images/castn.png'
import maripn from '@/public/images/maripn.png'
import marip from '@/public/images/marip.png'
import Image from 'next/image';
import { useTheme } from 'next-themes';


function TooltipNav() {
    const [mounted, setMounted] = useState(false)
    const [language, setLanguage] = useAtom(languageAtom)
    const { theme, setTheme } = useTheme()

    const themeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const languageHandler = () => {
        language === 'EN' ? setLanguage('ES') : setLanguage('EN')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
        <>
            <Tooltip.Provider delayDuration={40} skipDelayDuration={80}>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <div onClick={themeHandler} className='flex laptop:max-w-[4rem] laptop:min-w-[4rem] laptop:max-h-[3.6rem] laptop:min-h-[3.6rem] flex-col cursor-pointer items-center justify-center showOpacity-2'>
                            {
                                theme === 'dark' ? <Image src={marip} alt='abeja' className={`w-9 h-auto cursor-pointer`} /> : <Image src={maripn} alt='luciernaga' className={`w-10 h-auto cursor-pointer`} />
                            }
                        </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content className="TooltipContent z-30 showOpacityShort" sideOffset={10} aria-label='darkmode' side="bottom" >
                            <div className="rounded-xl bg-darkpurple/70 dark:bg-darkpurple/40 max-w-lg ">
                                <p className="text-snow font-tommy antialiased px-3 py-2">{theme === 'dark' ? 'Modo noche' : 'Modo Día'}</p>
                            </div>
                            <Tooltip.Arrow className="TooltipArrow" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                    {/* <div>
                            <p className='font-tommyregular dark:text-fucsia text-[0.7rem] opacity-80 antialiased text-center tracking-wider'>{darkMode == true ? 'Día' : 'Noche'}</p>
                        </div>  */}
                </Tooltip.Root>
            </Tooltip.Provider>
            <Tooltip.Provider delayDuration={40} skipDelayDuration={20}>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <div onClick={languageHandler}  className='flex flex-col items-center cursor-pointer laptop:max-w-[3rem] laptop:min-w-[3rem] laptop:max-h-[3.6rem] laptop:min-h-[3.6rem] justify-center showOpacity-3'>
                            {
                                language == 'EN' ? <Image src={cast} alt='castnia moth' className={`w-9 h-auto cursor-pointer `} /> : <Image src={actia} alt='actias luna' className={`w-9 h-auto cursor-pointer `} />
                            }
                        </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content className="TooltipContent z-30 showOpacityShort" sideOffset={10} aria-label='darkmode' side="bottom" >
                            <div className="rounded-xl bg-darkpurple/70 dark:bg-darkpurple/40 max-w-lg ">
                                <p className="text-snow font-tommy antialiased px-3 py-2">{language == 'EN' ? 'Español' : 'English'}</p>
                            </div>
                            <Tooltip.Arrow className="TooltipArrow" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </>
    )
}

export default TooltipNav