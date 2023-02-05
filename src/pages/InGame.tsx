import { useEffect, useState } from "react";
import { Keys } from "../@types/controls";
import { Character } from "../components/Character";
import { Labyrinth } from "../components/Labyrinth";
import { checkLadders, checkWall } from "../utils/checkConstraints";
import { bgColors, LABYRINTH_LEVELS } from "../utils/constants";
import { handleKeyDown, handleKeyUp } from "../utils/controls";

const CHAR_SPEED = 0.1

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
    const [ height, setHeight ] = useState(0)
    
    const [ verticalMove, setVerticalMove ] = useState({canMoveUp: false, canMoveDown: false})
    const [ horizontalCanMove, setHorizontalCanMove ] = useState(true)
    const [ moving, setMoving ] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setTime(currentTime => (currentTime + 1) % 360)
        }, 10)
    }, [])

    useEffect(() => {
        frameUpdate();
    }, [time])
    
    useEffect(() => {
        window.addEventListener('keydown', event => keys !== handleKeyDown(event) ? setKeys(handleKeyDown(event)) : "")
        window.addEventListener('keyup', event => keys !== handleKeyUp(event) ? setKeys(handleKeyUp(event)) : "")
    }, [])
    
    function frameUpdate(){
        checkLadders(height, angle) !== verticalMove ? setVerticalMove(checkLadders(height, angle)) : "";
        
        if(
            !(keys.KeyA && keys.KeyD) && 
            !(keys.ArrowLeft && keys.ArrowRight) &&
            !(keys.KeyA && keys.ArrowRight) &&
            !(keys.ArrowLeft && keys.KeyD) &&
            horizontalCanMove
        ){
            if((keys?.KeyA || keys?.ArrowLeft) && checkWall(height, angle) !== "leftCollision"){
                setAngle(currentAngle => (currentAngle + CHAR_SPEED)%360)
                setMoving(-2)
            }else if((keys.KeyD || keys.ArrowRight) && checkWall(height, angle) !== "rightCollision"){
                setAngle(currentAngle => (360 + currentAngle - CHAR_SPEED)%360)
                setMoving(2)
            }
        }
        
        if(!keys.KeyA && !keys.KeyD && !keys.ArrowLeft && !keys.ArrowRight){
            if(moving !== 1 && moving !== -1){
                if(moving === 2){
                    setMoving(1)
                }else{
                    setMoving(-1)
                }
            }
        }
        
        if(
            !(keys.KeyA && keys.KeyD) && 
            !(keys.ArrowLeft && keys.ArrowRight) &&
            !(keys.KeyA && keys.ArrowRight) &&
            !(keys.ArrowLeft && keys.KeyD)
        ){
            if((keys.KeyS || keys.ArrowDown) && verticalMove.canMoveDown){
                setHeight(currentHeight => currentHeight + 1)
                setKeys(currentKeys => ({...currentKeys, KeyS: false, ArrowDown: false}))
                setHorizontalCanMove(false)
                setTimeout(() => setHorizontalCanMove(true), 3000)
            }else if((keys.KeyW || keys.ArrowUp) && verticalMove.canMoveUp){
                setHeight(currentHeight => currentHeight - 1)
                setKeys(currentKeys => ({...currentKeys, KeyW: false, ArrowUp: false}))
                setHorizontalCanMove(false)
                setTimeout(() => setHorizontalCanMove(true), 3000)
            }
        }
    }
    
    return (
        <div className="w-full h-full" style={{backgroundColor: bgColors[height]}}>
            <Character canMoveUp={verticalMove.canMoveUp} canMoveDown={verticalMove.canMoveDown} moving={moving}/>
            <Labyrinth angle={angle} height={LABYRINTH_LEVELS[height]}/>
        </div>
    )
}