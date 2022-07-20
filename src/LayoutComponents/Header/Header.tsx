import React from "react";
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { HeaderDrawer } from "./HeaderDrawer"
import { Link } from "react-router-dom";

interface IProps {

}


export const Header = (props: IProps) => {


    return (
    <div className="App-header">
        <Tabs variant='soft-rounded' align="end">
          <TabList>
            <HeaderDrawer/>
            <Link to="/resume"><Tab color={"white"} margin="0 5px">Resume</Tab></Link>
            <Link to="/portfolio"><Tab color={"white"} margin="0 5px">Portfolio</Tab></Link>
            <Link to="/aboutMe"><Tab color={"white"} margin="0 5px">About Me</Tab></Link>
            <Link to="/currentProjects"><Tab color={"white"} margin="0 5px">Current Projects</Tab></Link>
          </TabList>
        </Tabs>
    </div>);
}