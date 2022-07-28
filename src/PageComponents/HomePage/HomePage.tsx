import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import '../../styles/HomePage.css'
import soccerPhoto from '../../resources/images/liamSoccer.png'
import { Avatar } from './Avatar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Resume } from 'PageComponents/Resume/Resume';
import { Links } from './Links';

gsap.registerPlugin(ScrollTrigger)

interface IProps {
    scrollPosition: number,
}

export const HomePage = (props: IProps) => {
    const selfPortraitRef = useRef<HTMLImageElement>(null);
    const soccerImageRef = useRef<HTMLImageElement>(null);
    const bikeImageRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const subTitleRef = useRef<HTMLDivElement>(null);


    // Handle Parrallax
    useEffect(() => {
        if (selfPortraitRef.current) {
            gsap.to(selfPortraitRef.current, {
                scrollTrigger: {
                    scrub: 1
                },
                scale: 1.1,
            });
        };

        if (nameRef.current) {
            gsap.to(nameRef.current, {
                scrollTrigger: {
                    scrub: 1
                },
                y: 500,
            });
        };

        if (subTitleRef.current) {
            gsap.to(subTitleRef.current, {
                scrollTrigger: {
                    scrub: 1
                },
                y: 200,
            });
        };

        if (soccerImageRef.current) {
            gsap.to(soccerImageRef.current, {
                scrollTrigger: {
                    trigger: "#sectionTwo",
                    start: "-200px",
                    scrub: 1,
                },
                y: 100,
            });
        };

        if (bikeImageRef.current) {
            gsap.to(bikeImageRef.current, {
                scrollTrigger: {
                    trigger: "#sectionTwo",
                    start: "-100px",
                    scrub: 1,
                },
                y: 50,
            });
        };

    }, []);

    return (
        <div id="home"> 
            <TestBlock scrollPosition={props.scrollPosition}/>
            <section id='sectionOne'>
                <Grid
                    className='grid'
                    h='90%'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={4}
                    >
                    <GridItem style={{display: "flex", alignItems: "center", justifyContent: "center"}} rowSpan={1}>
                        <h1 id='nameText' ref={nameRef}>Liam Waterbury</h1>
                    </GridItem>
                    <GridItem style={{display: "flex", alignContent: "center"}} rowSpan={2} colSpan={1}>
                        <Avatar ref={selfPortraitRef} /> 
                    </GridItem>
                    <GridItem style={{display: "flex", justifyContent: "center"}} rowSpan={1}>
                        <h1 className='headerText' ref={subTitleRef}>Full-Stack Software Engineering</h1>
                    </GridItem>
                </Grid>
            </section>
            <section id="sectionTwo">
                <div className='sectionHeader'>About Me</div>
                <Grid
                    className='grid'
                    h='90%'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                    >
                    <GridItem rowSpan={2} colSpan={2}>
                        <img ref={soccerImageRef} src={soccerPhoto} alt="uh oh" />
                    </GridItem>
                    <GridItem  colStart={4} rowSpan={3} colSpan={3} >
                        <p style={{marginLeft: "25px"}}>
                            I'm a software engineering major studying at Rose-Hulman Institute of Technology. I've always had a passion for building things, as such I initially pursued a major in Civil Engineering. However, I found myself 
                            spending my free time building applications instead of physical buildings. The freedom and the lack of limits kickstarted my passion for coding and software engineering.
                            <br/>
                            <br/>
                            Outside of coding, my main passion is soccer. I cannot remember a time in my life where I wasn't playing soccer, and my interest far extends just playing. Every Saturday morning you will find me up and early watching multiple games
                            at a time across the European leagues. The sheer amount of data involved with soccer has always interested me and inspired a few personal projects in the field.
                            <br/>
                            <br/>
                            Additionally, a newer hobby of mine is long distance bike riding. I am a cycle commuter and most weekends I'll embark on a new adventure. I love the freedom of a bike, allowing you to go anywhere you would like. Also, I romanticize
                            the idea of human powered travel. There is something special to traveling a hundred miles only with the fibers in your legs and the dedication in your head. I hope to someday bikepack from the bottom to top of Great Britain.
                        </p> 
                    </GridItem>
                    <GridItem colStart={2} colSpan={2} rowSpan={1}>
                        <img ref={bikeImageRef} src="https://ecobnb.com/blog/app/uploads/sites/3/2019/07/john-gough-hiIa41IoVZs-unsplash-1170x490.jpg" alt="uh oh" />
                    </GridItem>
                </Grid>
            </section>
            <section id="sectionThree">
                <div className='sectionHeader'>Portfolio</div>
                <Grid
                    className='grid'
                    h='90%'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={3} rowSpan={1} bg={"green"}>
                    </GridItem>    
                    <GridItem colSpan={1} rowSpan={1} bg={"red"}>
                    </GridItem>   
                    <GridItem colSpan={1} rowSpan={1} bg={"red"}>
                    </GridItem>  
                    <GridItem colSpan={1} rowSpan={1} bg={"red"}>
                    </GridItem>   
                </Grid>
            </section>
            <section id="sectionFour">
                <div className='sectionHeader'>Current Projects</div>
                <Grid
                    className='grid'
                    h='90%'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={3} rowSpan={1} bg={"green"}>
                    </GridItem>    
                    <GridItem colSpan={1} rowSpan={2} bg={"red"}>
                    </GridItem>   
                    <GridItem colSpan={1} rowSpan={2} bg={"red"}>
                    </GridItem>  
                    <GridItem colSpan={1} rowSpan={2} bg={"red"}>
                    </GridItem>   
                </Grid>
            </section>
            <section id="sectionFive">
                <div className='sectionHeader'>Resume</div>
                <Grid
                    className='grid'
                    h='90%'
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    gap={4}
                >
                    <GridItem  bg={"green"}>
                        <Resume/>
                        Download
                    </GridItem>    
                </Grid>
            </section>
            <section id="sectionSix">
                <div className='sectionHeader'>Contact Me</div>
                <Grid
                    className='grid'
                    h='90%'
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                >
                    <GridItem  bg={"green"}>
                        <Links/>
                    </GridItem>    
                </Grid>
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