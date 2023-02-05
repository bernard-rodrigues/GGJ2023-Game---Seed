import seed from '../assets/Seed.mp3'
import whale from '../assets/Whale.mp3'
import dolphin from '../assets/Dolphin.mp3'
import ending from '../assets/SeedEnd.mp3'

import { createContext, ReactNode, RefObject, useContext, useEffect, useRef, useState } from "react";

interface MusicContextProps{
    references: {
        floor1: RefObject<HTMLAudioElement>,
        whale: RefObject<HTMLAudioElement>,
        dolphin: RefObject<HTMLAudioElement>,
        ending: RefObject<HTMLAudioElement>,
    },
    sources: string[],
    volumes: number[],
    handleVolumes: (height:number) => void
}

export const MusicContext = createContext({} as MusicContextProps)

interface MusicContextProviderProps{
    children: ReactNode
}

export function MusicContextProvider(props: MusicContextProviderProps){
    const [references, setReferences ] = useState({
        floor1: useRef<HTMLAudioElement>(null),
        whale: useRef<HTMLAudioElement>(null),
        dolphin: useRef<HTMLAudioElement>(null),
        ending: useRef<HTMLAudioElement>(null)
    })

    const sources = [
        seed,
        whale,
        dolphin,
        ending
    ]

    const [ volumes, setVolumes ] = useState<number[]>([1])

    function handleVolumes(height: number){
        setVolumes(Array.from({length: height + 1}, () => 1))
        console.log(volumes)
    }
    
    return(
        <MusicContext.Provider value = {{
            references,
            sources,
            volumes,
            handleVolumes
        }}>
            {props.children}
        </MusicContext.Provider>
    )
}

export const useMusic = () => {
    return useContext(MusicContext)
}