import { ArrowDown, ArrowUp } from "phosphor-react";

interface CharacterProps{
    canMoveUp: boolean,
    canMoveDown: boolean
}

export function Character(props: CharacterProps){
    return(
        <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[5%] w-[2%] z-10 bg-green-500" />
                
            <ArrowUp 
                className="fixed left-[52%] top-[47%] -translate-y-1/2 border-2 border-[#291d15] rounded bg-green-100 z-10 transition-opacity duration-300"
                color="#291d15"
                size="5%"
                style={props.canMoveUp ? {opacity: 1} : {opacity: 0}}
            />
            <ArrowDown
                className="fixed left-[52%] top-[53%] -translate-y-1/2 border-2 border-[#291d15] rounded bg-green-100 z-10 transition-opacity"
                color="#291d15"
                size="5%"
                style={props.canMoveDown ? {opacity: 1} : {opacity: 0}}
            />
        
        </>
    )
}