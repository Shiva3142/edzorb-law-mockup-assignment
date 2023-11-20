import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import NotesCard from './NotesCard'

const notes = [
    {
        title: "Prelims QBank with Explanations in Visual Learning Format",
        description: [
            "High Yield Prelims Questions with Mains Explanations",
            "Visual Learning Format, Stories, Animations",
            "Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States",
            "Extensive Subject Wise Coverage of Questions",
            "Goldmine for Your Success in Judiciary Exams",
        ],
        images: [
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
        ],
        downloadLinks: [
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            }
        ]
    },
    {
        title: "Prelims QBank with Explanations in Visual Learning Format",
        description: [
            "High Yield Prelims Questions with Mains Explanations",
            "Visual Learning Format, Stories, Animations",
            "Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States",
            "Extensive Subject Wise Coverage of Questions",
            "Goldmine for Your Success in Judiciary Exams",
        ],
        images: [
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
        ],
        downloadLinks: [
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            }
        ]
    },
    {
        title: "Prelims QBank with Explanations in Visual Learning Format",
        description: [
            "High Yield Prelims Questions with Mains Explanations",
            "Visual Learning Format, Stories, Animations",
            "Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States",
            "Extensive Subject Wise Coverage of Questions",
            "Goldmine for Your Success in Judiciary Exams",
        ],
        images: [
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
        ],
        downloadLinks: [
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            }
        ]
    },
    {
        title: "Prelims QBank with Explanations in Visual Learning Format",
        description: [
            "High Yield Prelims Questions with Mains Explanations",
            "Visual Learning Format, Stories, Animations",
            "Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States",
            "Extensive Subject Wise Coverage of Questions",
            "Goldmine for Your Success in Judiciary Exams",
        ],
        images: [
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-2.jpg",
            "https://edzorblaw.com/wp-content/uploads/2023/07/qbank-1.jpg",
        ],
        downloadLinks: [
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            },
            {
                name: "CPC QBank",
                link: "https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png"
            }
        ]
    }

]

function LandingComponent2() {
    return (
        <>
            <div
                style={{
                    background: "url('https://edzorblaw.com/wp-content/uploads/2022/12/BG-1.png') no-repeat",
                    backgroundPosition: "bottom",
                    minHeight: "30vh",
                    backgroundSize: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img style={{
                    maxHeight: "150px"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png" alt="" />
                <Typography variant={
                    window.innerWidth > 600 ? "h3" : "h4"
                } style={{
                    padding: "50px 0px",
                    margin: "0 -50px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    The Edzorb Law Difference
                </Typography>
                <img style={{
                    maxHeight: "150px"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png" alt="" />
            </div>
            <div style={{
                margin: "50px 0px",
                marginTop: "-120px"
            }}>
                {
                    notes.map((note, index) => {
                        return (
                            <NotesCard
                                key={index}
                                NotesCardData={note}
                                position={index % 2 === 0 ? "left" : "right"}
                            />
                        )
                    })
                }




            </div>
        </>
    )
}

export default LandingComponent2