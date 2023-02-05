import labyrinth from "../assets/LabirintoTerra.png"
import { Core } from "./Core"
import { RadialLeaves } from "./RadialLeaves"

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
                marginTop: `${props.height}%`,
                transition: "margin-top 2s"
            }}
        >
            <Core />
            <RadialLeaves />
            <img 
                src={labyrinth} 
                alt="Radial Labyrinth"
            />
        </div>
    )
}