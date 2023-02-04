import labyrinth from "../assets/labyrinth.jpg"

interface LabyrinthProps{
    angle: number,
    height: number
}

export function Labyrinth(props: LabyrinthProps){
    return (
        <div className="absolute left-1/2 -translate-x-1/2">
            <img 
                src={labyrinth} 
                alt="Radial Labyrinth" 
                className="origin-center scale-[5]"
                style={{
                    rotate: `${props.angle}deg`,
                    marginTop: props.height
                }}
            />
        </div>
    )
}