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
        title: "Advanced-RAG",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/adaptive_rag",
                icon: <AiFillGithub/>
            }
            
        ],
        image: portfolio,
        description: "Enterprise level RAG enabled with semantic caching , prompt router and langfuse for observabiltity.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Portfolio",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/portfolio",
                icon: <AiFillGithub/>
            }
            
        ],
        image: "https://imgs.search.brave.com/4YiuYCgQpsXhZfl01ouoDFvYQeHZhozGvJ4pJ6Afs34/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93ZWJh/c3NldHMuc2hhd2Fj/YWRlbXkuY29tL2Js/b2ctaW1hZ2VzL3Bo/b3RvZ3JhcGh5LnBu/Zw",
        description: "My portfolio website which is hosted on github pages. The page mainly uses React and MUI and is inspired by open-source components.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Webcam-Face-Recognition-and-Attendance-System",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/Webcam-Face-Recognition-and-Attendance-System",
                icon: <AiFillGithub/>
            }
            
        ],
        image: "https://imgs.search.brave.com/GQpuUmTloE7mp9c4Vu-4_wmTaY4eN_efZiHQiTUZCNg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/MDA5MjQ5MS9waG90/by9hdHRlbmRpbmct/YS1jb21wdXRlci1j/bGFzcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eXlYWXF4/bUVka2dtOFZqU2lp/RVFGWlQxWkJUSlVZ/a2pfaV9OLTd1d3lu/Zz0",
        description: "This project implements a real-time webcam face recognition system with attendance logging. The application is built using Python, OpenCV, face_recognition, and Streamlit.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Crater-s-Age-detection",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/Crater-s-Age-detection-",
                icon: <AiFillGithub/>
            }
            
        ],
        image: "https://imgs.search.brave.com/6_eErSfHROwfURTm4ugvHf-R6KZ4M_pTKUgWce-CCfI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUw/MDgxMTcvcGhvdG8v/bW9vbi1hbG9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SERra050Y05Gdm9n/T0xVcUFSY0F2bHdH/cGNHN0h1WUZHLWxv/UGl2bktaVT0",
        description: "This repository contains a machine learning script designed to classify Southern Lunar craters into different age groups. The craters are classified into five age categories: pre-Nectarian, Nectarian, Imbrian, Eratosthenian, and Copernican. The goal is to accurately predict the age of lunar craters based on certain features.",
        target: "_blank"
    }
]

export default projectConfig