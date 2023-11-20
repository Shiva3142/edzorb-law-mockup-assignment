import { Button, Container, Typography } from '@mui/material'
import React from 'react'


function LandingComponent1() {
    return (
        <>
            <div style={{
                background: "#00395A",
                overflow: "hidden",
            }}>

                <div style={{
                    minHeight: "50vh",
                    background: "url('https://edzorblaw.com/wp-content/uploads/2022/12/Rectangle-11-1.png')",
                    color: "#FFFFFF",
                }}>
                    <Container sx={{
                        display: {
                            sx: "flex",
                            md: "grid"
                        },
                        gridTemplateColumns: {
                            md: "1fr 1fr"
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height:"100%"
                    }}>



                        <Typography component={'div'} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            minHeight: "50vh",
                            maxWidth: "500px",
                        }}>
                            <h1 style={{
                                fontSize: "50px",
                            }}>
                                Turn Your Judiciary Dream Into Reality
                            </h1>
                            <h3 style={{
                                fontWeight: "normal"
                            }}>
                                Revolutionize Your Prelims + Mains + Interview
                            </h3>
                            <h3 style={{
                                fontWeight: "normal"
                            }}>
                                Preparation in an Integrated Manner.
                            </h3>
                            <Button variant="contained" sx={{
                                background: "#FFFFFF",
                                color: "#000000",
                                fontSize: "19px",
                                padding: "5px 5px",
                                marginTop: "20px",
                                borderRadius: "10px",
                                textTransform: "none",
                                fontWeight: "bold",
                                ":hover": {
                                    background: "#FFFFFF",
                                    color: "#000000",
                                },
                                boxShadow: "0 0 10px 5px gray"
                            }}>
                                #1 Most Downloaded Judicial Services App
                            </Button>
                            <Typography component={'div'} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: "20px"
                            }}>
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-9.png" style={{
                                    maxWidth: "150px",
                                    margin: "10px"
                                }} alt="" />
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-8.png" style={{
                                    maxWidth: "150px",
                                    margin: "10px"
                                }} alt="" />
                            </Typography>
                        </Typography>

                        <Typography component={'div'} sx={{
                            background:"url('https://edzorblaw.com/wp-content/uploads/2023/09/Asset-8-1.png')",
                            minHeight:"100%"
                        }}>

                        </Typography>
                    </Container>
                </div>
            </div>
            <div style={{
                textAlign: "center",
                background: "#000000",
                padding: "5px",
                color: "#FFFFFF",
                fontSize: "20px"
            }}>
                Why <span style={{
                    textAlign: "center",
                    textDecoration: "underline"
                }}> Edzorb Law App</span> is ❤ by Over 10,000+ Users. ⭐⭐⭐⭐⭐ <span style={{
                    textAlign: "center",
                    textDecoration: "underline"
                }}>Read Reviews</span>
            </div>
        </>
    )
}

export default LandingComponent1