import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

const BubbleSection = ({ title, children, mt }) => {
  // const bgColor = "brand.primary"//useColorModeValue('whiteAlpha.900', 'gray.700');
  // const shadowColor = "brand.accent"//useColorModeValue('gray.200', 'gray.600');
  // const borderColor = "brand.secondary"//useColorModeValue('gray.200', 'whiteAlpha.200');
  // const textColor = "brand.background"//useColorModeValue('gray.600', 'gray.400');

  const backgroundColor = "brand.background";
  const textColor = "brand.text";
  // const primaryColor = "brand.primary";
  // const secondaryColor = "brand.secondary";
  const accentColor = "brand.accent";

  return (
    <VStack
      as="section"
      p={10}
      m={4}
      mt={mt}
      bg={backgroundColor}
      boxShadow={`0px 8px 20px ${accentColor}`}
      borderRadius="xl"
      spacing={4}
      align="center"
      border="1px"
      borderColor={accentColor}
    >
      <Heading size="lg" color={textColor}>{title}</Heading>
      <Text fontSize="md" color={textColor}>{children}</Text>
    </VStack>
  );
};

export default BubbleSection;
