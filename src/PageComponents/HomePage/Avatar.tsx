import { forwardRef } from "react"
import selfPortrait from "../../resources/images/LiamSelfPhotoHeadshot.jpg"

interface IProps {
    
}

export const Avatar = forwardRef<HTMLImageElement, IProps>((props, ref) => {
    return (
        <img ref={ref} id="selfPortrait" src={selfPortrait} alt="uh oh" />
    )
});