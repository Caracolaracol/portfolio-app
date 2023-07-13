import { atom } from "jotai";

export const languageAtom = atom<String>('EN')
export const locationAtom = atom<String>('')

// Side Menu
export const isShowingSideMenuAtom = atom<boolean>(false)
export const showSideMenuAtom = atom<boolean>(false)
export const hideSideMenuAnimationAtom = atom<boolean>(false)

// NavBarMobile
export const isShowingNavBarMenuAtom = atom<boolean>(false)
export const showNavBarMenuAtom = atom<boolean>(false)
export const hideNavBarMenuAtom = atom<boolean>(false)
