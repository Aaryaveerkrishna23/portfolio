import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aryaveer Krishna</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Generative AI Specialist",
        "An Indian"
    ],
    about: {
        start: "I've been working as a data scientist in JIO for over a year on generative AI field use cases." +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python,Gen-AI, SQL databases and more, " +
            "with a deep interest in enterprise RAG "
    },
    workTimeline: [
        {
            id: "work-2",
            title: "Data Scientist",
            company: "Reliance JIO platform's limited (India's biggest internet and tech giant)",
            description: "Worked in the domain of LLMOps, handling various use cases under the JIO Analytics team." ,
            date: "2023",
            icon: <GiCommercialAirplane/>,
            tags: ["genai", "python", "llmops", "dspy", "ray" ,"rag", "azure","sql","langchain" , "docker"]
        },
        {
            id: "work-1",
            title: "Internship Program -IGNITE 2023",
            company: "LTIMindtree",
            description: `Skills Gained:
 Understanding of the Software Development Life Cycle (SDLC).

 Hands-on project work and assignments.
`,
            date: "2023",
            icon: <DiCodeigniter/>,
            tags: ["Python", "Java", "HTML", "CSS", "JavaScript" ,"SQL", "SQL","MongoDB"]
            
        },
        {
            id: "work-0",
            title: "Bachelor of Technology",
            company: "KJ Somaiya Institute of technology , Mumbai.",
            description: "Scored 9.3 cgpa in the Electronics and telecommunication Branch.",
            date: "2019-2023",
            icon: <BsClipboardData/>,
            tags: ["Python", "Machine Learning", "Deep learning", "Image processing" ,"Computer networks", "Linux"]
            
        }
    ]
}


export default homeConfig