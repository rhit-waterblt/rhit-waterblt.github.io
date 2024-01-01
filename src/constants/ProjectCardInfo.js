// export const projectCardInfo = [
//     { id: 1, title: 'Computer Vision Stat Extractor', description: 'Extracted real world positional data of soccer players from broadcast footage. Included the construction of homography and data analysis.', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "https://github.com/rhit-waterblt/csse461-project-soccer" },
//     { id: 2, title: 'Soccer Database and Interface', description: 'Developed MSSQL Database with Triggers, Indices, and Stored Procedures while ensuring full SQL injection protection on backend and java frontend', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "https://github.com/RHIT-CSSE333/courseproject-s3g7" },
//     { id: 3, title: 'Deep Learning GeoImaging', description: 'Trained and fine-tuned neural network to classify images into their predicted country of origin. Includes extensive research and exploration', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "" }, // See pdf
//     { id: 4, title: 'Fruit Detector', description: 'Utilized color spaces and morphology to automatically detect and classify fruit in images.', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "" }, // See pdf
//     { id: 5, title: 'Test Driven Design', description: 'Developed and maintained Super Auto Pets game following Test Driven Design', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "https://github.com/rhit-csse376/2022S-Team8-SuperAutoPets" },
//     { id: 6, title: 'Java Linter', description: 'Utilized the ASM library to develope a java linter capable of detecting software design patterns and bad practices in code.', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "https://github.com/rhit-csse374/project202320-s1s2-team07" },
//     { id: 7, title: 'Scheme/Racket Interpreter', description: 'Developed an interpreter for racket to learn functional programming, closures/environents, and continuations.', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "" }, // have file but not repo yet
//     { id: 8, title: 'Analysis of APR in NCAA Sports', description: 'Processed and analyzed the performances of university and program Academic Progress Rates with respect to sport and gender.', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "" }, // See pdf
//     { id: 9, title: 'Full Stack Web/Mobile Application', description: 'Developed project for posting and bidding local small scale contracting work. Built Flask API with token authorization served with AWS Lambda. Includes React Native frontend, Firebase Authentication ', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png' }, // Private repos
//     { id: 10, title: '16 Bit Accumulator Processor', description: 'Designed and implemented a CPU datapath with a custom machine code instruction set and assembler.', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png', githubUrl: "https://github.com/rhit-csse232/rhit-csse232-2122b-project-baratheon-2122b" },
//     { id: 11, title: 'TODO - Soccer Wordler', description: 'Description for Project 10', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png' },
//     { id: 12, title: 'TODO - Soccer player and line detection', description: 'Description for Project 11', imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png' }
// ];
export const projectCardInfo = [
    {
        id: 1,
        title: 'Computer Vision Stat Extractor',
        description: 'Extracted real world positional data of soccer players from broadcast footage. Included the construction of homography and data analysis.',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "https://github.com/rhit-waterblt/csse461-project-soccer",
        learnings: [
            'Developed an understanding of computer vision algorithms and their application in sports analytics.',
            'Gained practical experience in constructing homography matrices for perspective transformation.',
            'Enhanced skills in data analysis and visualization to interpret and present data meaningfully.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 2,
        title: 'Soccer Database and Interface',
        description: 'Developed MSSQL Database with Triggers, Indices, and Stored Procedures while ensuring full SQL injection protection on backend and java frontend',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "https://github.com/RHIT-CSSE333/courseproject-s3g7",
        learnings: [
            'Mastered advanced SQL features such as triggers, indices, and stored procedures for efficient database operations.',
            'Implemented robust security measures to prevent SQL injection vulnerabilities.',
            'Integrated a Java-based frontend with the database backend, ensuring seamless data flow and user interaction.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 3,
        title: 'Deep Learning GeoImaging',
        description: 'Trained and fine-tuned neural network to classify images into their predicted country of origin. Includes extensive research and exploration',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "", // Include GitHub URL if available
        learnings: [
            'Explored deep learning techniques for image classification and the nuances of fine-tuning neural networks.',
            'Conducted comprehensive research to curate a dataset suitable for geolocation prediction.',
            'Learned about the challenges and strategies for improving neural network performance on complex image data.'
        ],
        reportUrl: process.env.PUBLIC_URL + '/GeoguessrFinalReport.pdf'
    },
    {
        id: 4,
        title: 'Fruit Detector',
        description: 'Utilized color spaces and morphology to automatically detect and classify fruit in images.',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "", // Include GitHub URL if available
        learnings: [
            'Applied knowledge of color spaces to solve real-world problems in image segmentation and object detection.',
            'Investigated morphological operations to improve the accuracy and reliability of image classification.',
            'Developed a classification system capable of distinguishing between different types of fruit in a variety of contexts.'
        ],
        reportUrl: process.env.PUBLIC_URL + '/FruitFinderReport.pdf'
    },
    {
        id: 5,
        title: 'Test Driven Design',
        description: 'Developed and maintained Super Auto Pets game following Test Driven Design',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "https://github.com/rhit-csse376/2022S-Team8-SuperAutoPets",
        learnings: [
            'Gained proficiency in Test-Driven Development (TDD) methodologies for reliable and maintainable code.',
            'Leveraged automated testing frameworks to ensure the game’s functionality and performance.',
            'Collaborated within a team environment to adhere to coding standards and TDD practices.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 6,
        title: 'Java Linter',
        description: 'Utilized the ASM library to develop a java linter capable of detecting software design patterns and bad practices in code.',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "https://github.com/rhit-csse374/project202320-s1s2-team07",
        learnings: [
            'Developed an understanding of bytecode manipulation and analysis using the ASM library.',
            'Enhanced knowledge in static code analysis and pattern detection in Java codebases.',
            'Learned to identify and rectify common software design flaws and antipatterns.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 7,
        title: 'Scheme/Racket Interpreter',
        description: 'Developed an interpreter for racket to learn functional programming, closures/environments, and continuations.',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "", // Include GitHub URL if available
        learnings: [
            'Deepened understanding of functional programming concepts and their practical implementation.',
            'Gained insights into the workings of programming language interpreters, particularly in Lisp-like languages.',
            'Explored advanced concepts like closures, environments, and continuations in depth.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 8,
        title: 'Analysis of APR in NCAA Sports',
        description: 'Processed and analyzed the performances of university and program Academic Progress Rates with respect to sport and gender.',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "", // Include GitHub URL if available
        learnings: [
            'Honed data processing and analytical skills, particularly in the context of academic and sports performance metrics.',
            'Developed proficiency in statistical analysis tools and techniques for meaningful data interpretation.',
            'Gained valuable insights into the dynamics of academic progress rates across different sports and genders.'
        ],
        reportUrl: process.env.PUBLIC_URL + '/FinalReport.pdf'
    },
    {
        id: 9,
        title: 'Full Stack Web/Mobile Application',
        description: 'Developed project for posting and bidding local small scale contracting work. Built Flask API with token authorization served with AWS Lambda. Includes React Native frontend, Firebase Authentication',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: '', // Private Repo
        learnings: [
            'Acquired comprehensive knowledge in full-stack development, from serverless backends to mobile frontends.',
            'Gained experience in building and deploying RESTful APIs using Flask and AWS Lambda.',
            'Leveraged Firebase for user authentication and data management in a React Native application.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 10,
        title: '16 Bit Accumulator Processor',
        description: 'Designed and implemented a CPU datapath with a custom machine code instruction set and assembler.',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "https://github.com/rhit-csse232/rhit-csse232-2122b-project-baratheon-2122b",
        learnings: [
            'Gained hands-on experience in digital logic design and understanding of CPU architecture.',
            'Developed a custom instruction set and explored the challenges of machine code programming.',
            'Implemented an assembler to translate human-readable instructions into machine code, deepening the understanding of compilers.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 11,
        title: 'TODO - Soccer Wordler',
        description: 'Description for Project 10',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "", // Include GitHub URL if available
        learnings: [
            'TODO - Learning outcomes for Soccer Wordler project.'
        ],
        reportUrl: "" // Include report PDF URL if available
    },
    {
        id: 12,
        title: 'TODO - Soccer player and line detection',
        description: 'Description for Project 11',
        imageUrl: process.env.PUBLIC_URL + '/ProjectImage.png',
        githubUrl: "", // Include GitHub URL if available
        learnings: [
            'TODO - Learning outcomes for Soccer player and line detection project.'
        ],
        reportUrl: "" // Include report PDF URL if available
    }
];
