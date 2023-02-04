import { useEffect, useState } from "react";
import { Keys } from "../@types/controls";
import { Character } from "../components/Character";
import { Labyrinth } from "../components/Labyrinth";
import { handleKeyDown, handleKeyUp } from "../utils/controls";

const LABYRINTH_LEVELS = [
    2095,
    1925,
    1755,
    1590,
    1420,
    1250,
    1080,
     910,
     740,
     575,
       16
]

const CHAR_SPEED = 0.01

export function InGame(){
    const [ time, setTime ] = useState(0);
    const [ angle, setAngle ] = useState(0);
    const [ keys, setKeys ] = useState<Keys>();

    useEffect(() => {
        setInterval(() => {
            time < 100 ? setTime(currentTime => currentTime + 1) : setTime(0)
        })
    }, [])

    useEffect(() => {
        frameUpdate()
    }, [time])

    useEffect(() => {
        window.addEventListener('keydown', event => setKeys(handleKeyDown(event)))
        window.addEventListener('keyup', event => setKeys(handleKeyUp(event)))

        return () => {
            window.removeEventListener('keydown', event => setKeys(handleKeyDown(event)));
            window.removeEventListener('keyup', event => setKeys(handleKeyUp(event)));
        };
    }, [])

    function frameUpdate(){
        if(
            !(keys?.KeyA && keys.KeyD) && 
            !(keys?.ArrowLeft && keys.ArrowRight) &&
            !(keys?.KeyA && keys.ArrowRight) &&
            !(keys?.ArrowLeft && keys.KeyD)
        ){
            if(keys?.KeyA || keys?.ArrowLeft){
                setAngle(currentAngle => currentAngle + CHAR_SPEED)
            }else if(keys?.KeyD || keys?.ArrowRight){
                setAngle(currentAngle => currentAngle - CHAR_SPEED)
            }
        }
    }
    
    return (
        <>
            <Character distanceFromFloor={0}/>
            <Labyrinth angle={angle} height={LABYRINTH_LEVELS[0]}/>
        </>
    )
}