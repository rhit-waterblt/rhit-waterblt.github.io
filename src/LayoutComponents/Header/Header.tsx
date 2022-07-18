import React from "react";
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { HeaderDrawer } from "./HeaderDrawer"

interface IProps {

}


export const Header = (props: IProps) => {

    return (
    <div className="App-header">
        <Tabs variant='soft-rounded' align="end">
          <TabList>
            <HeaderDrawer/>
            <Tab color={"white"} margin="0 5px">Resume</Tab>
            <Tab color={"white"} margin="0 5px">Portfolio</Tab>
            <Tab color={"white"} margin="0 5px">About Me</Tab>
            <Tab color={"white"} margin="0 5px">Current Projects</Tab>
          </TabList>
        </Tabs>
    </div>);
}