import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { projectCardInfo } from '../constants/ProjectCardInfo';
import ProjectCard from './ProjectCard';
import BubbleSection from './BubbleSection';

const projects = projectCardInfo;

const ProjectPage = () => {
    return (
        <BubbleSection title="My Projects">
            <Box as="section" p={8}>
                <Text fontSize="lg" mb={10}>
                    I strongly believe in project based learning. Here are some of my favorite projects I've worked on.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    {projects.map(project => (
                        <ProjectCard key={project.id} {...project} useInViewFlag={false} />
                    ))}
                </SimpleGrid>
            </Box>
        </BubbleSection>
    );
};

export default ProjectPage;
