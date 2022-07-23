import { StackDivider, VStack, Grid, GridItem, flexbox } from '@chakra-ui/react'
import { Column } from 'LayoutComponents/Helpers/Columns'
import { Row } from 'LayoutComponents/Helpers/Row'
import { useLayoutEffect, useRef } from 'react'
import '../../styles/HomePage.css'
import { Avatar } from './Avatar'


interface IProps {
    scrollPosition: number,
}

export const HomePage = (props: IProps) => {

    return (
        <div id="home">
            <TestBlock scrollPosition={props.scrollPosition}/>
            {/* <img src="https://img.freepik.com/premium-photo/modern-black-office-desk-with-office-supplies-copy-space-presentation-background_67155-21518.jpg" alt="uh oh there's supposed to be an image here" /> */}
            <section id='sectionOne'>
                <Grid
                    h='75vh'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={4}
                    >
                    <GridItem style={{display: "flex", alignItems: "center", justifyContent: "center"}} rowSpan={1} bg='blue' >
                        <h1 className='headerText'>Liam Waterbury - A Developing Developer</h1>
                    </GridItem>
                    <GridItem style={{display: "flex", alignContent: "center"}} rowSpan={2} colSpan={1} bg='lightgray'>
                        <Avatar /> 
                    </GridItem>
                    <GridItem style={{display: "flex", justifyContent: "center"}} rowSpan={1} bg='green' >
                        <h1 className='headerText'>Full-Stack Software Engineering</h1>
                    </GridItem>
                </Grid>
                {/* <img id="firstHomeBackground" src="https://img2.storyblok.com/4098x1200/smart/filters:format(jpeg)/f/53624/4096x1280/04c6a60e17/green-mountains-of-glencoe-in-the-scottish-highlands.jpg" alt="uh oh there's supposed to be an image here" /> */}
            </section>
            <section id="sectionTwo">
                <Grid
                    h='75vh'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                    >
                    <GridItem rowSpan={2} colSpan={2} bg='blue' >
                        <h1 className='headerText'>Image</h1>
                    </GridItem>
                    <GridItem  colStart={4} rowSpan={3} colSpan={3} bg='lightgray'>
                        About me blurb
                    </GridItem>
                    <GridItem colStart={2} colSpan={2} rowSpan={1} bg='green' >
                        <h1 className='headerText'>Image</h1>
                    </GridItem>
                </Grid>
            </section>
            <section id="sectionThree">
                Portfolio
            </section>
            <section id="sectionFour">
                Current Projects
            </section>
            <section id="sectionFive">
                Resume
            </section>
            <section id="sectionSix">
                Contact me
            </section>
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
        <div style={{position: "absolute", left: 0, top: 0, color: "rebeccapurple"}} ref={ref} className="testBlock">
            test
        </div>
    )
}

{/* <div style={{display: 'flex', flexDirection: "row", objectFit: "cover", width: "100%", height: "100%"}}>
<div style={{display: 'flex', flexDirection: "column"}}> */}