import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ResumePDF from "../../resources/pdfs/resume.pdf"
import { ScaleFade, useDisclosure } from '@chakra-ui/react';

export const Resume = () => {
  const { isOpen, onToggle } = useDisclosure()

  function onDocumentLoadSuccess( params : any) {
    setTimeout(() => {
      onToggle();
    }, 200);
  }

    return (
      <div style={{justifyContent: "center"}} className="resume">
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Document className={"resume"} file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} height={document.getElementsByClassName('grid')[0]?.clientHeight ?? 150}/>
          </Document>
        </ScaleFade>
      </div>
    )
}