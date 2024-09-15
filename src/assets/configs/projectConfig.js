import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/rag_image.webp"

import React from 'react'

const projectConfig = [
    
    {
        id: "project-1",
        title: "Advanced RAG",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/advanced_rag",
                icon: <AiFillGithub/>
            }
            
        ],
        image: portfolio,
        description: "Enterprise level RAG enabled with semantic caching , prompt router and langfuse for observabiltity.",
        target: "_blank"
    }
]

export default projectConfig