import { useLayoutEffect, useRef } from 'react'
import '../../styles/HomePage.css'

interface IProps {
    scrollPosition: number,
}

export const HomePage = (props: IProps) => {

    return (
        <div id="home">
            {/* <img src="https://img.freepik.com/premium-photo/modern-black-office-desk-with-office-supplies-copy-space-presentation-background_67155-21518.jpg" alt="uh oh there's supposed to be an image here" /> */}
            <img src="https://img2.storyblok.com/4098x1200/smart/filters:format(jpeg)/f/53624/4096x1280/04c6a60e17/green-mountains-of-glencoe-in-the-scottish-highlands.jpg" alt="uh oh there's supposed to be an image here" />
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
            ref.current.style.top = props.scrollPosition.toString() + 'px';
        }
    })


    return (
        <div ref={ref} className="testBlock">
            test
        </div>
    )
}