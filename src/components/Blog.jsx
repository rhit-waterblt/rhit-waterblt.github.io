import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import BubbleSection from './BubbleSection';

const Blog = () => {
    return (
        <BubbleSection title="Blog Posts">
            <VStack spacing={10}>
                <Text color="brand.text">Coming Soon!</Text>
            </VStack>
        </BubbleSection>
    );
};

// TODO: Talk about experience from internships
// TODO: Talk about work with current projects

export default Blog;
