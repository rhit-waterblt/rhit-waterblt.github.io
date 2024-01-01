import React from 'react';
import { Box, Flex, Link, Heading, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const backgroundColor = "brand.background";
  const textColor = "brand.text";
  // const primaryColor = "brand.primary";
  // const secondaryColor = "brand.secondary";
  const accentColor = "brand.accent";

  return (
    <Box as="header" bg={backgroundColor} w="100%" boxShadow="md" p={4} borderBottom="1px solid" borderColor={accentColor}>
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <Flex alignItems="center">
          <RouterLink to="/">
            <Image src={process.env.PUBLIC_URL + "/LiamJustLogo.svg"} alt="Liam Waterbury" boxSize="50px" borderRadius="full" mr={5} _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s"
            }} />
          </RouterLink>
          <RouterLink to="/" >
            <Heading as="h1" size="lg" color={textColor} _hover={{ color: accentColor }}>
              Liam Waterbury
            </Heading>
          </RouterLink>
        </Flex>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/projects" fontSize={20} m={3} color={textColor} fontWeight="bold" _hover={{ color: accentColor }}>
            Projects
          </Link>
          <Link as={RouterLink} to="/resume" fontSize={20} m={3} color={textColor} fontWeight="bold" _hover={{ color: accentColor }}>
            Resume
          </Link>
          <Link as={RouterLink} to="/blog" fontSize={20} m={3} color={textColor} fontWeight="bold" _hover={{ color: accentColor }}>
            Blog
          </Link>
          <Link as={ScrollLink} to="contactFooter" smooth={true} duration={200} fontSize={20} m={3} color={textColor} fontWeight="bold" _hover={{ color: accentColor }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;