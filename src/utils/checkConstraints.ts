import { LABYRINTH_CONSTRAINTS } from "./constants"

export function checkWall(floor: number, angle: number){
    
}

export function checkLadders(floor: number, angle: number){
    let moveUp = false;
    let moveDown = false;
    
    LABYRINTH_CONSTRAINTS[floor].laddersDown.forEach(constraint => {
        if(constraint[0] < angle && constraint[1] > angle){
            moveDown = true
        }
    })

    LABYRINTH_CONSTRAINTS[floor].laddersUp.forEach(constraint => {
        if(constraint[0] < angle && constraint[1] > angle){
            moveUp = true
        }
    })
    return {canMoveUp: moveUp, canMoveDown: moveDown}
}