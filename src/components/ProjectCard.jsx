import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const ProjectCard = ({ id, title, description, imageUrl, useInViewFlag = true }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change to make animation repeat
    });

    // const backgroundColor = "brand.background";
    // const textColor = "brand.text";
    // const primaryColor = "brand.primary";
    // const secondaryColor = "brand.secondary";
    const accentColor = "brand.accent";

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={(inView || !useInViewFlag) ? 'visible' : 'hidden'}
            transition={{ duration: 2, delay: 0.3 * id }}
        >
            <Box boxShadow="lg" borderRadius="lg" overflow="hidden" _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s"
            }}>
                <Image src={imageUrl} alt={title} />
                <Box p={5}>
                    <Heading size="md" mb={2}>{title}</Heading>
                    <Text mb={4}>{description}</Text>
                    <Link href={`/projects/${id}`} color={accentColor}>
                        Learn More
                    </Link>
                </Box>
            </Box>
        </motion.div>
    )
};

export default ProjectCard;