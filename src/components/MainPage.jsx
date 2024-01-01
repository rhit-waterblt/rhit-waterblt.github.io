import React from 'react';
import BubbleSection from './BubbleSection';
import { VStack } from '@chakra-ui/react';
import AboutMe from './AboutMe';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const MainPage = () => {
  return (
    <VStack spacing={0} align="stretch" bgColor={"brand.secondaryBackground"}>
      <BubbleSection title=""> {/* About Me */}
        <AboutMe />
      </BubbleSection>
      <BubbleSection title="My Projects" mt={0}>
        <ProjectsSection />
      </BubbleSection>
      <BubbleSection title="My Skills" mt={0}>
        <SkillsSection />
      </BubbleSection>
      {/* TODO: Add blog section, ie "See What I'm up to!" */}
    </VStack>
  );
};

export default MainPage;
