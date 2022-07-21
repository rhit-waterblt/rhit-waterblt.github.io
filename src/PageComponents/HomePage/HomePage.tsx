import { useLayoutEffect, useRef } from 'react'
import '../../styles/HomePage.css'

interface IProps {
    scrollPosition: number,
}

export const HomePage = (props: IProps) => {

    return (
        <div id="home">
            <img src="https://img.freepik.com/premium-photo/modern-black-office-desk-with-office-supplies-copy-space-presentation-background_67155-21518.jpg" alt="uh oh there's supposed to be an image here" />
            <h1>Liam Waterbury</h1>
            <TestBlock scrollPosition={props.scrollPosition}/>
        </div>
        
    )
}

interface ITest {
    scrollPosition: number,
}

const TestBlock = (props: ITest) => {
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (ref.current !== null) {
            ref.current.innerHTML=props.scrollPosition.toString();
        }
    })


    return (
        <div ref={ref}>
            test
        </div>
    )
}