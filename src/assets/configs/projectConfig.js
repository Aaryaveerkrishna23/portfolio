import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/rag_image.webp"
import churn from "../images/churn-prediction-python.webp"

import React from 'react'

const projectConfig = [
    {
        id: "project-1",
        title: "Customer churn analysis Using CHAID and LLMs for Insights",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/churn_prediction_chaid",
                icon: <AiFillGithub/>
            }
            
        ],
        image: churn,
        description: "This project focuses on predicting churn for a telecom provider. Using CHAID and Google’s Gemini Flash LLM, we generate detailed insights and visualize CHAID in IBM's SPSS Software.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "charts2csv",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/charts2csv",
                icon: <AiFillGithub/>
            }
            
        ],
        image: `data:image/jpeg;base64,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`,
        description: "This project extracts images from PDF files stored inside of a directory and runs inference using the Google's open source DePlot model to generate data tables from graph images.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Advanced-RAG",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aaryaveerkrishna23/adaptive_rag",
                icon: <AiFillGithub/>
            }
            
        ],
        image: portfolio,
        description: "Enterprise level RAG consisting of prompt router for handling complex queries",
        target: "_blank"
    },
    {
        id: "project-4",
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
        id: "project-5",
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
        id: "project-6",
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