import { Accordion, AccordionDetails, AccordionSummary, Button, Card, Container, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
type NotesCardDataType = {
    title: string,
    description: string[],
    images: string[],
    downloadLinks: {
        name: string,
        link: string
    }[]
}

function NotesCard({
    NotesCardData,
    position = "left"
}: {
    NotesCardData: NotesCardDataType,
    position?: "left" | "right"
}) {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const [activeImage, setActiveImage] = React.useState<number>(0);
    const imageComponent = (
        <Typography component={'div'} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: "relative"
        }}>
            <img src={NotesCardData.images[activeImage]} style={{
                maxHeight: "500px",
                borderRadius: "30px",
                maxWidth: "95%",
                margin: "10px 0",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
            }} alt="" />
            <Typography component={'div'} sx={{
                position: "absolute",
                bottom: "30px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {
                    NotesCardData.images.map((image, index) => {
                        return (
                            <Typography component={'div'} sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "1px solid gray",
                                margin: "0 8px",
                                cursor: "pointer",
                                background: index === activeImage ? "gray" : "white"
                            }} onClick={() => {
                                setActiveImage(index)
                            }}></Typography>
                        )
                    })
                }
            </Typography>
        </Typography>
    )
    const descriptionComponent = (
        <Typography component={'div'} sx={{
            marginTop: "50px",
        }}>
            <h2>{
                NotesCardData.title
            }</h2>
            <ul style={{
                paddingInlineStart: "20px",

            }}>
                {
                    NotesCardData.description.map((item) => {
                        return (
                            <li style={{
                                listStyle: "disc",
                                padding: "5px 0",
                                color: "gray"
                            }}>{item}</li>
                        )
                    })
                }
            </ul>
            <Typography component={'div'} sx={{

            }}>
                <Accordion style={{
                    boxShadow: "none"
                }}>
                    <AccordionSummary>

                        <Button variant='contained' onClick={() => {
                            setExpanded(!expanded)
                        }} sx={{
                            background: "#01324e",
                            textTransform: "none",
                            fontWeight: "bold",
                            padding: "10px 10px",
                            borderRadius: "10px",
                            ":hover": {
                                background: "#01326e",
                            },
                            fontSize: "18px",
                        }}><ExpandMoreIcon sx={{
                            margin: "0px 5px",
                            rotate: expanded ? "180deg" : "0deg"
                        }} />Download Free <CloudDownloadIcon sx={{
                            margin: "0px 5px"
                        }} /></Button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                            {
                                NotesCardData.downloadLinks.map((item) => {
                                    return (
                                        <Typography component={'div'} sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} onClick={() => {
                                            window.open(item.link, "_blank")
                                        }}>
                                            <img src="https://edzorblaw.com/wp-content/uploads/2023/06/pdf-icon-300x300.png" style={{
                                                maxWidth: "60px",
                                            }} alt="" />
                                            <h4 style={{
                                                color: "gray",
                                            }}>{item.name}</h4>
                                        </Typography>
                                    )
                                })
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Typography>
        </Typography>
    )
    return (
        <div>
            <Container>
                <Card style={{
                    minWidth: "300px",
                    minHeight: "500px",
                    maxWidth: "99%",
                    margin: "30px auto",
                    width: "100%",
                    padding: "30px",
                    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                    borderRadius: "50px",
                }}>
                    <Typography component={'div'} sx={{
                        display: {
                            sx: "flex",
                            md: "grid"
                        },
                        gridTemplateColumns: position === "left" ? {
                            md: "4fr 6fr"
                        } : {
                            md: "7fr 4fr"
                        },
                    }}>
                        {
                            position === "left" ? <>
                                {
                                    imageComponent
                                }
                                {
                                    descriptionComponent
                                }
                            </> : <>
                                {
                                    descriptionComponent
                                }
                                {
                                    imageComponent
                                }
                            </>
                        }

                    </Typography>
                </Card>
            </Container>
        </div>
    )
}

export default NotesCard