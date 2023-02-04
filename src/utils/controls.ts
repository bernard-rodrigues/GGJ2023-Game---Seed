import { Keys } from "../@types/controls";

let keys: Keys = {
    KeyA: false,
    KeyD: false,
    ArrowLeft: false,
    ArrowRight: false,
    Space: false
}

export function handleKeyDown(event: KeyboardEvent){
    switch(event.code){
        case 'KeyA': keys.KeyA = true; break;
        case 'KeyD': keys.KeyD = true; break;
        case 'ArrowLeft': keys.ArrowLeft = true; break;
        case 'ArrowRight': keys.ArrowRight = true; break;
        case 'Space': keys.Space = true; break;
    }

    return keys
}

export function handleKeyUp(event: KeyboardEvent){
    switch(event.code){
        case 'KeyA': keys.KeyA = false; break;
        case 'KeyD': keys.KeyD = false; break;
        case 'ArrowLeft': keys.ArrowLeft = false; break;
        case 'ArrowRight': keys.ArrowRight = false; break;
        case 'Space': keys.Space = false; break;
    }

    return keys
}