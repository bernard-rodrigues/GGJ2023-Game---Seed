interface CharacterProps{
    distanceFromFloor: number
}

export function Character(props: CharacterProps){
    return(
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 h-8 w-8 z-10 bg-green-500"
            style={{
                transform: `translateY(calc(-50% - ${props.distanceFromFloor}%))`
            }}
        />
    )
}