import { useMusic } from "../contexts/MusicContext"

export function MusicSet(){
    const { sources, references } = useMusic()

    return(
        <>
            <audio 
                src={sources[0]}
                ref={references.floor1}
                loop
            />

            <audio 
                src={sources[1]}
                ref={references.whale}
                loop
            />

            <audio 
                src={sources[2]}
                ref={references.dolphin}
                loop
            />
            
            <audio 
                src={sources[3]}
                ref={references.ending}
                loop={false}
            />
        </>
    )
}