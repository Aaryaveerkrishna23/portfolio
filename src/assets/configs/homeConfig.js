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
        "An Open Source Contributor",
        "An Indian"
    ],
    about: {
        start: "I've been working as a data scientist in JIO for over a year on generative AI field use cases." +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python,Gen-AI, SQL databases, BI tools, and more, " +
            "with a deep interest in enterprise RAG "
    },
    workTimeline: [
        {
            id: "work-1",
            title: "Data Scientist",
            company: "Reliance JIO infocomm Limited (ranked at No.86 in the 2024 Fortune's Global 500 list)",
            description: "Worked in the domain of LLMOps, handling various use cases under the Jio Analytics team." +
                " Experienced in Generative AI and enterprise RAG, with use cases such as Wiki, HR, and DevOps chatbots.",
            date: "2023",
            icon: <GiCommercialAirplane/>,
            tags: ["genai", "python", "llmops", "dspy", "ray" ,"rag", "azure","sql","langchain" , "docker"]
        },
        {
            id: "work-0",
            title: "B-tech",
            company: "KJ Somaiya Institute of technology.",
            description: "Scored 9.3 cgpa in Electronics and telecommunication Branch",
            date: "2019-2023",
            icon: <BsClipboardData/>,
            
        }
    ]
}


export default homeConfig