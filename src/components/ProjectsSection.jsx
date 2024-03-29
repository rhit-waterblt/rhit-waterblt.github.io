import React from 'react';
import { Box, SimpleGrid, Text, Button } from '@chakra-ui/react';
import { projectCardInfo } from '../constants/ProjectCardInfo';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const projects = projectCardInfo.slice(0, 3);

const ProjectsSection = () => {
  return (
    <Box as="section" p={8}>
      <Text fontSize="lg" mb={10}>
        I strongly believe in project based learning. Here are some of my favorite projects I've worked on.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
      <Link to="/projects">
        <Button mt={8} colorScheme="teal" _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}>
          View All Projects
        </Button>
      </Link>
    </Box>
  );
};

export default ProjectsSection;
