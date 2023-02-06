import '../styles/Labyrinth.css'
import labyrinth from '../assets/labyrinth.png'
import { useEffect, useState } from "react";
import { Keys } from "../@types/controls";
import { Character } from "../components/Character";
import { Labyrinth } from "../components/Labyrinth";
import { checkLadders, checkWall } from "../utils/checkConstraints";
import { bgColors, LABYRINTH_LEVELS } from "../utils/constants";
import { handleKeyDown, handleKeyUp } from "../utils/controls";
import { useMusic } from '../contexts/MusicContext';
import { MusicSet } from '../components/MusicSet'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'phosphor-react';

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
    const [ gameFinished, setGameFinished ] = useState(false)
    const [ gameStarted, setGameStarted ] = useState(false)

    const { handleVolumes, references } = useMusic()

    useEffect(() => {
        frameUpdate();
    }, [time])
    
    useEffect(() => {
        setInterval(() => {
            setTime(currentTime => (currentTime + 1) % 360)
        }, 10)

        window.addEventListener('keydown', event => keys !== handleKeyDown(event) ? setKeys(handleKeyDown(event)) : "")
        window.addEventListener('keyup', event => keys !== handleKeyUp(event) ? setKeys(handleKeyUp(event)) : "")

        handleVolumes(height)
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
                handleVolumes(height)
                setTimeout(() => setHorizontalCanMove(true), 2500)
            }else if((keys.KeyW || keys.ArrowUp) && verticalMove.canMoveUp){
                setHeight(currentHeight => currentHeight - 1)
                setKeys(currentKeys => ({...currentKeys, KeyW: false, ArrowUp: false}))
                setHorizontalCanMove(false)
                handleVolumes(height)
                setTimeout(() => setHorizontalCanMove(true), 2500)
            }
        }

        if(height == 10){
            setGameFinished(true)
            setMoving(0)
        }
    }

    function handleStart(){
        setGameStarted(true)
        setTimeout(() => {
            references.floor1.current?.play()
            references.whale.current?.play()
            references.dolphin.current?.play()
        }, 1000)
    }
    
    return (
        <>
        
            <div className="w-full h-full" style={{
                transition: "background-color 1s",
                backgroundColor: bgColors[height]
            }}
            >   
                <MusicSet />
                {
                    references.floor1.current &&
                    references.whale.current &&
                    references.dolphin.current &&
                    gameStarted
                ? 
                <>
                    <Character canMoveUp={verticalMove.canMoveUp} canMoveDown={verticalMove.canMoveDown} moving={moving}/>
                    <Labyrinth angle={angle} height={LABYRINTH_LEVELS[height]} ended={gameFinished}/>
                    <ArrowLeft 
                        size={"15%"} 
                        color={'#28160d'} 
                        className="fixed left-[5%] top-[35%] border bg-green-100 border-[#28160d] rounded lg:hidden"
                        onTouchStart={() => setKeys(currentKeys => ({...currentKeys, ArrowLeft: true}))}
                        onTouchEnd={() => setKeys(currentKeys => ({...currentKeys, ArrowLeft: false}))}
                    />
                    
                    <ArrowRight
                        size={"15%"} 
                        color={'#28160d'} 
                        className="fixed right-[5%] top-[35%] border bg-green-100 border-[#28160d] rounded lg:hidden"
                        onTouchStart={() => setKeys(currentKeys => ({...currentKeys, ArrowRight: true}))}
                        onTouchEnd={() => setKeys(currentKeys => ({...currentKeys, ArrowRight: false}))}
                    />
                    
                    {verticalMove.canMoveDown ? 
                    <ArrowDown
                        size={"15%"} 
                        color={'#28160d'} 
                        className="fixed right-[5%] bottom-[5%] border bg-green-100 border-[#28160d] rounded lg:hidden"
                        onTouchStart={() => setKeys(currentKeys => ({...currentKeys, ArrowDown: true}))}
                        onTouchEnd={() => setKeys(currentKeys => ({...currentKeys, ArrowDown: false}))}
                    />
                    : <></>
                    }
                    {verticalMove.canMoveUp ?
                    <ArrowUp
                        size={"15%"} 
                        color={'#28160d'} 
                        className="fixed right-[5%] bottom-[21%] border bg-green-100 border-[#28160d] rounded lg:hidden"
                        onTouchStart={() => setKeys(currentKeys => ({...currentKeys, ArrowUp: true}))}
                        onTouchEnd={() => setKeys(currentKeys => ({...currentKeys, ArrowUp: false}))}
                    />
                    :<></>
                    }
                </>
                :
                    references.floor1.current &&
                    references.whale.current &&
                    references.dolphin.current &&
                    !gameStarted
                ?
                <>
                    <button className="absolute left-1/2 top-1/2 animate-myRotation hover:w-[55%]">
                        <img src={labyrinth} alt="StartWheel" onClick={handleStart}/>
                    </button>
                </>
                :
                <></>
                }
            </div>
        </>
    )
}