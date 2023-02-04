import { Keys } from "../@types/controls";

let keys: Keys = {
    KeyA: false,
    KeyD: false,
    KeyW: false,
    KeyS: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
    Space: false
}

export function handleKeyDown(event: KeyboardEvent){
    event.preventDefault()
    
    switch(event.code){
        case 'KeyA': keys.KeyA = true; break;
        case 'KeyD': keys.KeyD = true; break;
        case 'KeyW': keys.KeyW = true; break;
        case 'KeyS': keys.KeyS = true; break;
        case 'ArrowLeft': keys.ArrowLeft = true; break;
        case 'ArrowRight': keys.ArrowRight = true; break;
        case 'ArrowDown': keys.ArrowDown = true; break;
        case 'ArrowUp': keys.ArrowUp = true; break;
        case 'Space': keys.Space = true; break;
    }

    return keys
}

export function handleKeyUp(event: KeyboardEvent){
    event.preventDefault()
    
    switch(event.code){
        case 'KeyA': keys.KeyA = false; break;
        case 'KeyD': keys.KeyD = false; break;
        case 'KeyW': keys.KeyW = false; break;
        case 'KeyS': keys.KeyS = false; break;
        case 'ArrowLeft': keys.ArrowLeft = false; break;
        case 'ArrowRight': keys.ArrowRight = false; break;
        case 'ArrowDown': keys.ArrowDown = false; break;
        case 'ArrowUp': keys.ArrowUp = false; break;
        case 'Space': keys.Space = false; break;
    }

    return keys
}