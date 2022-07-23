import { ReactNode } from "react"

export const Column = (children : any) => {
    return (
        <div style={{display: 'flex', flexDirection: "column"}}>
            {children}
        </div>
    )
}