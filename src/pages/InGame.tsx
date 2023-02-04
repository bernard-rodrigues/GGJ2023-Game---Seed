import { useEffect, useState } from "react";
import { Keys } from "../@types/controls";
import { Character } from "../components/Character";
import { Labyrinth } from "../components/Labyrinth";
import { checkLadders } from "../utils/checkConstraints";
import { LABYRINTH_LEVELS } from "../utils/constants";
import { handleKeyDown, handleKeyUp } from "../utils/controls";

const CHAR_SPEED = 0.01

export function InGame(){
    const [ time, setTime ] = useState(0);
    const [ angle, setAngle ] = useState(0);
    const [ keys, setKeys ] = useState<Keys>({
        KeyA: false,
        KeyD: false,
        KeyW: false,
        KeyS: false,
        ArrowLeft: false,
        ArrowRight: false,
        ArrowUp: false,
        ArrowDown: false,
        Space: false
    });
    const [ height, setHeight ] = useState(1)
    
    const [ verticalMove, setVerticalMove ] = useState({canMoveUp: false, canMoveDown: false})

    useEffect(() => {
        setInterval(() => {
            setTime(currentTime => (currentTime + 1) % 360)
        }, 1)
    }, [])

    useEffect(() => {
        frameUpdate();
        checkLadders(height, angle) !== verticalMove ? setVerticalMove(checkLadders(height, angle)) : "";
    }, [time])

    useEffect(() => {
        window.addEventListener('keydown', event => keys !== handleKeyDown(event) ? setKeys(handleKeyDown(event)) : "")
        window.addEventListener('keyup', event => keys !== handleKeyUp(event) ? setKeys(handleKeyUp(event)) : "")
    }, [])

    function frameUpdate(){
        if(
            !(keys?.KeyA && keys.KeyD) && 
            !(keys?.ArrowLeft && keys.ArrowRight) &&
            !(keys?.KeyA && keys.ArrowRight) &&
            !(keys?.ArrowLeft && keys.KeyD)
        ){
            if(keys?.KeyA || keys?.ArrowLeft){
                setAngle(currentAngle => (currentAngle + CHAR_SPEED)%360)
            }else if(keys?.KeyD || keys?.ArrowRight){
                setAngle(currentAngle => (360 + currentAngle - CHAR_SPEED)%360)
            }
        }
        
        if(
            !(keys?.KeyA && keys.KeyD) && 
            !(keys?.ArrowLeft && keys.ArrowRight) &&
            !(keys?.KeyA && keys.ArrowRight) &&
            !(keys?.ArrowLeft && keys.KeyD)
        ){
            if((keys?.KeyS || keys?.ArrowDown) && verticalMove.canMoveDown){
                setHeight(currentHeight => currentHeight + 1)
                setKeys(currentKeys => ({...currentKeys, KeyS: false, ArrowDown: false}))
            }else if((keys?.KeyW || keys?.ArrowUp) && verticalMove.canMoveUp){
                setHeight(currentHeight => currentHeight - 1)
                setKeys(currentKeys => ({...currentKeys, KeyW: false, ArrowUp: false}))
            }
        }
    }
    
    return (
        <>
            <span className="absolute z-50">{angle}</span>
            <Character canMoveUp={verticalMove.canMoveUp} canMoveDown={verticalMove.canMoveDown}/>
            <Labyrinth angle={angle} height={LABYRINTH_LEVELS[height]}/>
        </>
    )
}