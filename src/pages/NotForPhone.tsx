import { DeviceMobile, Placeholder } from "phosphor-react";

export function NotForPhone(){
    return(
        <div className="w-full h-full bg-green-50 lg:hidden">
            <Placeholder size={"50%"} color="#28160d" weight="thin" className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
            <DeviceMobile size={"35%"} color="#28160d" weight="thin" className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
    )
}