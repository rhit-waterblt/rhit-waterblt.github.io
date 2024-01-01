import React from 'react';
import { Box, Flex, Text, IconButton, Link, VStack, HStack, Divider } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

const ContactFooter = () => {
  const backgroundColor = "brand.background";
  const textColor = "brand.text";
  // const primaryColor = "brand.primary";
  // const secondaryColor = "brand.secondary";
  const accentColor = "brand.accent";

  return (
    <Box id="contactFooter" as="footer" bg={backgroundColor} color={textColor} p={10} borderTop="1px solid" borderColor={accentColor}>
      <VStack spacing={4} align="stretch" mb={6}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Let's Connect!
        </Text>
        <Divider borderColor={accentColor} />
        <Flex justifyContent="center">
          <HStack spacing={8}>
            <Link href="mailto:ltwaterbury@gmail.com" isExternal>
              <IconButton
                aria-label="Email"
                icon={<MdOutlineMailOutline size="2.5em" />}
                colorScheme="teal"
                variant="ghost"
              />
            </Link>
            <Link href="https://github.com/rhit-waterblt" isExternal>
              <IconButton
                aria-label="Github"
                icon={<FaGithub size="2.5em" />}
                colorScheme="teal"
                variant="ghost"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/liam-waterbury-a38b5a222/" isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin size="2.5em" />}
                colorScheme="teal"
                variant="ghost"
              />
            </Link>
          </HStack>
        </Flex>
      </VStack>
      <Box textAlign="center" fontSize="sm">
        <Text fontSize="1xl" fontWeight="bold" mb={2}>Email: ltwaterbury@gmail.com</Text>
        <Text fontSize="1xl" fontWeight="bold" mb={2}>Phone: (717) 758-2854</Text>
      </Box>
    </Box>
  );
};

export default ContactFooter;
