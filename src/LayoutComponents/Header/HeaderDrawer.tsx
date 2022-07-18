import React from "react"
import { useRef } from "react"
import { useDisclosure } from "@chakra-ui/hooks"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Tab
  } from '@chakra-ui/react'

export const HeaderDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
  
    return (
      <>
        <Tab color={"white"} margin="0 auto 0 0" alignSelf={"left"} ref={btnRef} onClick={onOpen}>
        <span className="material-icons">
            menu
        </span>
        </Tab>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          size={"md"}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Contact Me</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Send</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }