interface LadderProps{
    height: number,
    angle: number,
    up: boolean,
    down: boolean
}

export function Ladder(props: LadderProps){
    return(
        <div 
            className="absolute bg-purple-500 left-1/2 top-[96.25%] h-[2%] w-[2%] z-50"
            style={{
                transformOrigin: `center center`,
                transform: `translate(-50%, ${props.height - 50}%) rotate(${props.angle}deg)`
            }} 
        />
    )
}