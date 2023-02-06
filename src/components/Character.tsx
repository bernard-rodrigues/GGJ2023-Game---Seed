import "../styles/Character.css"
import hero from "../assets/hero.png"
import { ArrowDown, ArrowUp } from "phosphor-react";

interface CharacterProps{
    canMoveUp: boolean,
    canMoveDown: boolean,
    moving: number
}

export function Character(props: CharacterProps){
    return(
        <>
            <div id="body"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[5%] w-[2%] z-10 opacity-100 transition-opacity duration-[3s]"
                style={
                    props.moving === 1 
                    ? {transform: `translate(-50%, -50%) rotateZ(0deg) rotateY(0deg)`}
                    : props.moving === -1 
                    ? {transform: `translate(-50%, -50%) rotateZ(0deg) rotateY(180deg)`}
                    : props.moving === 2
                    ? {transform: `translate(-50%, -50%) rotateZ(10deg) rotateY(0deg)`}
                    : props.moving === -2
                    ? {transform: `translate(-50%, -50%) rotateZ(-10deg) rotateY(180deg)`}
                    : {transform: `translate(-50%, -50%) rotateZ(0) rotateY(0)`, opacity: 0}
                }
            >
                <img src={hero} alt="" className="absolute scale-[3.5]"/>

                <div 
                    id="arm" 
                    className="absolute left-1/2 top-1/2 w-[25%] h-[20%] bg-yellow-900 rounded-full"
                    style={
                        props.moving === 2 || props.moving === -2 
                        ? {animation: "armMoving 0.5s linear infinite"}
                        : {}
                    }
                />
                <div
                    id="foot1"
                    className="absolute left-1/2 -bottom-[20%] w-[25%] h-[20%] bg-yellow-900 rounded-full"
                    style={
                        props.moving === 2 || props.moving === -2 
                        ? {animation: "foot1Moving 0.5s linear infinite"}
                        : {}
                    }
                />
            </div>
                
            <ArrowUp 
                className="fixed hidden lg:block left-[52%] top-[47%] -translate-y-1/2 border-2 border-[#291d15] rounded bg-green-100 z-10 transition-opacity duration-300"
                color="#291d15"
                size="5%"
                style={props.canMoveUp ? {opacity: 1} : {opacity: 0}}
            />
            <ArrowDown
                className="fixed hidden lg:block left-[52%] top-[53%] -translate-y-1/2 border-2 border-[#291d15] rounded bg-green-100 z-10 transition-opacity"
                color="#291d15"
                size="5%"
                style={props.canMoveDown ? {opacity: 1} : {opacity: 0}}
            />
        </>
    )
}