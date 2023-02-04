import labyrinth from "../assets/LabirintoTerra.png"
import { useInGame } from "../contexts/InGameContext"

interface LabyrinthProps{
    angle: number,
    height: number,
}

export function Labyrinth(props: LabyrinthProps){
    return (
        <div 
            className="absolute left-1/2"
            style={{
                transformOrigin: 'calc(50% + 1px) calc(50% + 1px)',
                transform: `translateX(-50%) rotate(${props.angle}deg) scale(5)`,
                marginTop: `${props.height}%`
            }}
        >
            <img 
                src={labyrinth} 
                alt="Radial Labyrinth"
            />
        </div>
    )
}