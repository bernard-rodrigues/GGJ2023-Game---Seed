import { useEffect } from "react"
import labyrinth from "../assets/labyrinth.png"
import { useMusic } from "../contexts/MusicContext"
import { Core } from "./Core"
import { Fireflies } from "./Fireflies"
import { Sprout } from "./Sprout"
import { TreeEnd } from "./TreeEnd"

interface LabyrinthProps{
    angle: number,
    height: number,
    ended: boolean
}

export function Labyrinth(props: LabyrinthProps){
    const { references, volumes } = useMusic()

    function ending(){
        references.dolphin.current!.volume = 0
        references.whale.current!.volume = 0
        references.floor1.current!.volume = 0
        references.ending.current!.volume = 1
        references.ending.current!.play()
    }

    useEffect(() => {
        volumes.length >= 1 && volumes.length < 9 ? references.floor1.current!.volume = 1 : references.floor1.current!.volume = 0
        volumes.length >= 7 ? references.whale.current!.volume = 0.3 : references.whale.current!.volume = 0
        volumes.length >= 8 ? references.dolphin.current!.volume = 0.2 : references.dolphin.current!.volume = 0
        volumes.length == 9 ? references.floor1.current!.volume = 0 : ""
        volumes.length == 10 ? ending() : ""
        
    }, [volumes])
    
    return (
        <>
            <div
                className="absolute left-1/2"
                style={
                    props.ended 
                    ?{
                        transformOrigin: 'calc(50% + 1px) calc(50% + 1px)',
                        transform: `translateX(-50%) rotate(${props.angle}deg) scale(5)`,
                        marginTop: `${props.height}%`,
                        transition: "margin-top 2s",
                        animation: "ending 20s ease-in-out forwards",
                    }
                    :{
                        transformOrigin: 'calc(50% + 1px) calc(50% + 1px)',
                        transform: `translateX(-50%) rotate(${props.angle}deg) scale(5)`,
                        marginTop: `${props.height}%`,
                        transition: "margin-top 2s",
                    }
            }
            >
                <Core />
                <Fireflies />
                {props.ended ? 
                    <TreeEnd />
                    :
                    <Sprout />
                    }
                <img 
                    src={labyrinth} 
                    alt="Radial Labyrinth"
                />
            </div>
        </>
    )
}