import React from 'react';
import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Link,
    Button,
    VStack,
    HStack,
    List,
    ListItem,
    ListIcon,
    Divider,
    Image
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { projectCardInfo } from '../constants/ProjectCardInfo';
import BubbleSection from './BubbleSection';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectCardInfo.find((project) => project.id === Number(projectId));

    const { title, description, learnings, githubUrl, imageUrl, reportUrl } = project;
    const hasGithub = githubUrl !== "";
    const hasReport = reportUrl !== "";
    const textColor = "brand.text";

    // Set the workerSrc to the PDF.js worker script
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const changePage = (offset) => {
        if (pageNumber + offset > 0 && pageNumber + offset <= numPages)
            setPageNumber(prevPageNumber => prevPageNumber + offset);
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    return (
        <BubbleSection>
            <VStack spacing={5} align="stretch">
                <Heading as="h1" size="2xl" color={textColor}>{title}</Heading>
                <Text fontSize="lg" color={textColor}>{description}</Text>

                <Divider />

                {imageUrl && (
                    <div>
                        <Box w="full" display="flex" justifyContent="center">
                            <Image
                                src={imageUrl}
                                alt={`${title} image`}
                                borderRadius="lg"
                                maxWidth="200px"
                                maxHeight="200px"
                                height="auto"
                                objectFit="contain" />
                        </Box>
                        <Divider mt={4} />
                    </div>
                )}

                <Heading as="h3" size="lg" color={textColor}>What I learned</Heading>

                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <List spacing={3} align="start">
                        {learnings.map((learning, index) => (
                            <ListItem key={index} fontSize="lg">
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                {learning}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider />
                <Heading as="h3" size="lg" color={textColor}>More Information</Heading>
                {hasReport && <Box justifyContent="center" display="flex" flexDirection="column" alignItems="center">
                    <Box w="full" display="flex" justifyContent="center" mb={4}>
                        <Document
                            file={reportUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </Box>
                    <Box>
                        <Button disabled={pageNumber <= 1} onClick={previousPage} colorScheme="teal" mr={2} _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                            Previous
                        </Button>
                        <Button disabled={pageNumber >= numPages} onClick={nextPage} colorScheme="teal" _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                            Next
                        </Button>
                    </Box>
                    <Text>Page {pageNumber} of {numPages}</Text>
                </Box>}
                {!hasReport &&
                    <Text fontSize="md" color={textColor}>{description}</Text>}

                <Divider />

                <HStack spacing={4} justifyContent="center">
                    <Link href={githubUrl} isExternal>
                        {hasGithub && <Button leftIcon={<FaExternalLinkAlt />} colorScheme="teal" _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                            GitHub
                        </Button>}
                    </Link>
                </HStack>
            </VStack>
        </BubbleSection>
    );
};

export default ProjectDetail;
