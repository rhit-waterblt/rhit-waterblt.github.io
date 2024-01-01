import React from 'react';
import { Box, Heading, Text, Image, Flex, Badge, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const AboutMe = () => {
  // const backgroundColor = "brand.background";
  // const textColor = "brand.text";
  // const primaryColor = "brand.primary";
  const secondaryColor = "brand.secondary";
  // const accentColor = "brand.accent";

  return (
    <Flex alignItems="center" justifyContent="space-around" p={8}>
      <Box flexShrink={0} mr={-35} zIndex={99}>
        <Image borderRadius="full" boxSize="450px" shadow="lg" src={process.env.PUBLIC_URL + "/LiamHeadshot.jpg"} alt="Liam Waterbury" />
      </Box>
      <Box maxW="750px" bgColor={secondaryColor} borderRadius="lg" padding={3} paddingLeft={35}>
        <Heading as="h2" size="xl" mb={4}>Hi, I'm Liam</Heading>
        <Text fontSize="lg" mb={2}>
          I'm a Full Stack Software Engineer passionate about providing innovative solutions for customers.
        </Text>
        <Text fontSize="md" mb={4}>
          With a background in Computer Vision and Deep Learning, I'm always looking for new ways to apply my skills to solve problems. I have experience with a wide range of technologies, including React, Node.js, Python, and C++,
          allowing me to build full stack applications from the ground up.
        </Text>
        <Flex mb={4} justifyContent="center" alignItems="center">
          <Badge borderRadius="full" px="2" colorScheme="teal" mr={2}>Computer Vision</Badge>
          <Badge borderRadius="full" px="2" colorScheme="green" mr={2}>Deep Learning</Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal" mr={2}>Full Stack Development</Badge>
          <Badge borderRadius="full" px="2" colorScheme="green" mr={2}>Creativity</Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">Drive</Badge>
        </Flex>
        <ScrollLink to="contactFooter" smooth={true} duration={500}>
          <Button colorScheme="teal" _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}>Contact Me</Button>
        </ScrollLink>
      </Box>
    </Flex>
  );
};

export default AboutMe;
