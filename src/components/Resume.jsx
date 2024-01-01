import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import BubbleSection from './BubbleSection';

const Resume = () => {
    return (
        <BubbleSection title="">
            <VStack spacing={10}>
                <iframe src={process.env.PUBLIC_URL + '/LiamWaterburyResume.html'} title="My Resume" style={{ width: '90vw', height: '1250px' }}></iframe>
                <a href={process.env.PUBLIC_URL + '/LiamWaterburyResume.pdf'} download="LiamWaterburyResume.pdf">
                    <Button colorScheme="teal" variant="solid" mt={2} mr={15} _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}>
                        Download Resume
                    </Button>
                </a>
            </VStack>
        </BubbleSection>
    );
};

export default Resume;
