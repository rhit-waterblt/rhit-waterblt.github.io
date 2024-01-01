import React from 'react';
import { Box, Text, VStack, CircularProgress, CircularProgressLabel, HStack, Heading, Button, Link } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'Java', level: 95 },
  { name: 'Python', level: 95 },
  { name: 'React', level: 80 },
  { name: 'Typescript', level: 75 },
  { name: 'Deep Learning', level: 60 },
  { name: 'Comp Vision', level: 55 },
];

// const backgroundColor = "brand.background";
// const textColor = "brand.text";
// const primaryColor = "brand.primary";
const secondaryColor = "brand.secondary";
// const accentColor = "brand.accent";

const SkillCircle = ({ skill, level, index }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView();

  const getColor = (level) => {
    if (level >= 75) return 'green.400';
    if (level >= 50) return 'yellow.400';
    return 'red.400';
  };

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setProgress(level), 300 * index); // Delay to start animation
      return () => clearTimeout(timeout);
    }
  }, [inView, level, index]);

  return (
    <VStack spacing={2} ref={ref}>
      <CircularProgress value={progress} color={getColor(level)} size="100px" thickness="8px" transition="all 1s ease-out">
        <CircularProgressLabel>{`${progress}%`}</CircularProgressLabel>
      </CircularProgress>
    </VStack>
  );
};

const SkillsSection = () => {
  return (
    <Box as="section" p={8}>
      <HStack mb={10} spacing={10}>
        <VStack>
          <Heading as="h2" size="lg" mb={4}>How I would rate my ability</Heading>
          <HStack mb={10} bgColor={secondaryColor} borderRadius="lg" p={3}>
            {skills.map((skill, index) => (
              <div key={index}>
                <Text key={index} fontWeight="bold">{skill.name}</Text>
                <SkillCircle key={index + 1} name={skill.name} level={skill.level} index={index} />
              </div>
            ))}
          </HStack>
          <HStack spacing={10}>
            <a href={process.env.PUBLIC_URL + '/LiamWaterburyResume.pdf'} download="LiamWaterburyResume.pdf">
              <Button colorScheme="teal" variant="solid" mt={2} mr={15} _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
                Download Resume
              </Button>
            </a>
            <Link href='/resume'>
              <Button colorScheme="teal" variant="outline" mt={2} _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
                View Resume
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Box maxW="600px" bgColor={secondaryColor} borderRadius="lg" padding={3}>
          <Heading as="h2" size="lg" mb={4}>Where am I now?</Heading>
          <Text fontSize="md" mb={4}>
            By closely working with clients through my time with Telemetry Sports and as a consultant for Edgile, I've learned how to communicate effectively with customers to understand their needs and deliver a product that exceeds expectations.
          </Text>
          <Text fontSize="md" mb={4}>
            I have maintained and developed products back to front and I am driven to continue learning and am always looking for new opportunities to grow my skills. In particular, I am always looking for ways to combine my passions for soccer, computer vision, and software development.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default SkillsSection;
