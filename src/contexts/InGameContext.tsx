import { createContext, ReactNode, useContext, useState } from "react";

interface inGameProps{
    // verticalAvailable: boolean,
    // toggleVerticalAvailable: () => void,
}

interface InGameProviderProps{
    children: ReactNode,
}

export const InGameContext = createContext({} as inGameProps)

export function InGameProvider(props: InGameProviderProps){
    const [verticalAvailable, setVerticalAvailable] = useState(false)

    function toggleVerticalAvailable(){
        setVerticalAvailable(currentState => !currentState)
    }

    return(
        <InGameContext.Provider value={{
            // verticalAvailable,
            // toggleVerticalAvailable,
        }}>
            {props.children}
        </InGameContext.Provider>
    )
}

export const useInGame = () => {
    return useContext(InGameContext)
}