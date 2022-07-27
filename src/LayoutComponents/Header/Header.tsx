import { ReactNode } from "react";
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import "../../styles/Header.css"

interface IProps {
  children?: ReactNode
}


export const Header = (props: IProps) => {


    return (
    <div className="App-header">
        <Tabs variant='soft-rounded' align="end">
          <TabList>
            <Link to="/"><Tab className={"header-tab"}>Home</Tab></Link>
            <Link to="/contactMe"><Tab className={"header-tab"} >Contact Me</Tab></Link>
            <Link to="/resume"><Tab className={"header-tab"} >Resume</Tab></Link>
            <Link to="/portfolio"><Tab className={"header-tab"} >Portfolio</Tab></Link>
            <Link to="/aboutMe"><Tab className={"header-tab"} >About Me</Tab></Link>
            <Link to="/currentProjects"><Tab className={"header-tab"} >Current Projects</Tab></Link>
          </TabList>
        </Tabs>
    </div>);
}