import { ReactNode } from "react"


export const Row = (children : any) => {
    return (
        <div style={{display: 'flex', flexDirection: "row"}}>
            {children}
        </div>
    )
}