import { LABYRINTH_CONSTRAINTS } from "./constants"

export function checkWall(floor: number, angle: number){
    let collision = ""
    LABYRINTH_CONSTRAINTS[floor].walls.forEach(constraint => {
        if(constraint[0] - angle < 0.1 && constraint[0] - angle > 0){
            collision = "leftCollision"
        }else if(angle - constraint[1] < 0.1 && angle - constraint[1] > 0){
            collision = "rightCollision"
        }
    })
    return collision
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