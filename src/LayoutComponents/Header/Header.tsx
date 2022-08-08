import { ReactNode } from "react";
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import "../../styles/Header.scss"

interface IProps {
  children?: ReactNode
}


export const Header = (props: IProps) => {


    const goToSection = (sectionName: string) => {
      const destination = document.getElementById(sectionName);
      destination?.scrollIntoView();
    }

    return (
    <div className="App-header">
        <Tabs variant='soft-rounded' align="end">
          <TabList>
            <Link to="/"><Tab className={"header-tab"}>Home</Tab></Link>
            <Link to="/"><Tab className={"header-tab"} onClick={(e) => goToSection("sectionSix")}>Contact Me</Tab></Link>
            <Link to="/"><Tab className={"header-tab"} onClick={(e) => goToSection("sectionTwo")}>About Me</Tab></Link>
            <Link to="/resume"><Tab className={"header-tab"} >Resume</Tab></Link>
            <Link to="/portfolio"><Tab className={"header-tab"} >Portfolio</Tab></Link>
            <Link to="/currentProjects"><Tab className={"header-tab"} >Current Projects</Tab></Link>
          </TabList>
        </Tabs>
    </div>);
}