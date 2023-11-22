import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'


function Footer() {
    return (
        <>
            <div style={{
                background: "linear-gradient(180deg, #004166 0%, #002033 100%), linear-gradient(180deg, #0E4B58 0%, #0F5F70 100%)",
                minHeight: "30vh",
                color: "white",
                padding: "30px 0"
            }}>
                <Container>
                    <Typography component={'div'} sx={{
                        display: {
                            xs: 'flex',
                            md: "grid"
                        },
                        gridTemplateColumns: "repeat(4, 1fr)",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}>
                        <Typography component={'div'} sx={{
                        }}>
                            <img src="https://edzorblaw.com/wp-content/uploads/2023/05/legal-rumble-2-logo.png" alt="" style={{
                                maxWidth: "190px",
                            }} />
                            <Typography component={'p'} margin={"10px"}>
                                Don't Waste Time. JOIN NOW
                            </Typography>
                            <Typography component={'div'} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                            }}>
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-9.png" style={{
                                    maxWidth: "100px",
                                    margin: "10px"
                                }} alt="" />
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-8.png" style={{
                                    maxWidth: "100px",
                                    margin: "10px"
                                }} alt="" />
                            </Typography>
                            <Typography component={'div'} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                            }}>
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/05/telegram-1.png" style={{
                                    maxWidth: "50px",
                                    padding: "8px",
                                    background: "white",
                                    margin: "10px",
                                    borderRadius: "10px"
                                }} alt="" />
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/05/insta.png" style={{
                                    maxWidth: "50px",
                                    padding: "8px",
                                    background: "white",
                                    margin: "10px",
                                    borderRadius: "10px"
                                }} alt="" />
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/05/you-1.png" style={{
                                    maxWidth: "50px",
                                    padding: "8px",
                                    background: "white",
                                    margin: "10px",
                                    borderRadius: "10px"
                                }} alt="" />
                            </Typography>

                        </Typography>
                        <Typography component={'div'} sx={{
                        }}>
                            <Typography variant='h6'>
                                Popular Courses
                            </Typography>
                            <Typography component={'div'} sx={{
                                width: "80px",
                                border: "2px solid #4D768D",
                                margin: "10px 0"
                            }}>
                            </Typography>
                            <Button variant='contained' color='warning' sx={{
                                color: "black",
                                fontWeight: "bold",
                                textTransform: "none",
                                ":hover": {
                                    color: "white"
                                }
                            }}>Premium+ Plan</Button>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                Marks Enhancement Programme
                            </Typography>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                Elite Plan
                            </Typography>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                FastTrack Crash Courses
                            </Typography>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                For Free Notes Join Telegram
                            </Typography>
                        </Typography>
                        <Typography component={'div'} sx={{
                        }}>
                            <Typography variant='h6'>
                                Other Links
                            </Typography>
                            <Typography component={'div'} sx={{
                                width: "80px",
                                border: "2px solid #4D768D",
                                margin: "10px 0"
                            }} />
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                Free Resources
                            </Typography>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                What Makes Edzorb Law Unique
                            </Typography>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                Syllabus
                            </Typography>
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                Contact Us
                            </Typography>
                        </Typography>
                        <Typography component={'div'} sx={{
                        }}>
                            <Typography variant='h6'>
                                Join Our Free Mentorship
                            </Typography>
                            <Typography component={'div'} sx={{
                                width: "80px",
                                border: "2px solid #4D768D",
                                margin: "10px 0"
                            }} />
                            <Typography component={'div'} sx={{
                                margin: "10px 0"
                            }}>
                                Sign Up Now For Free Mentorship
                            </Typography>
                            <div style={{
                                display:"flex",
                                justifyContent:"center",
                                margin:"20px 0"
                                // alignItems:"center"
                            }}>
                                <TextField variant='outlined' color='warning' placeholder='Your Email' sx={{
                                    background:"white",
                                    fontSize:"10px",
                                    paddingTop:"0"
                                }}/>
                                <Button variant='contained' color="warning" sx={{
                                    fontSize:"10px"
                                }}> Sign Up</Button>
                            </div>
                            <Typography component={'div'} style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize:"12px"
                            }}>

                                <img src="https://edzorblaw.com/wp-content/uploads/2023/07/avatars-als.png" style={{
                                    maxHeight: "20px",
                                    marginRight: "10px"
                                }} alt="" />
                                Joined by 10,000+ Students
                            </Typography>
                        </Typography>
                    </Typography>
                </Container>
            </div>
            <div style={{
                background: "linear-gradient(180deg, #004166 0%, #002033 100%), linear-gradient(180deg, #0E4B58 0%, #0F5F70 100%)",
                minHeight: "5vh"
            }}>
                <Container style={{
                    color: "gray",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>

                    <Typography component={'div'}>
                        © 2023 Edzorb Law Private Limited
                    </Typography>
                    <Typography component={'div'} sx={{
                        color: "gray",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            margin: "10px"
                        }}>F.A.Q</div>
                        <div style={{
                            margin: "10px"
                        }}>About Us</div>
                        <div style={{
                            margin: "10px"
                        }}>Career</div>
                        <div style={{
                            margin: "10px"
                        }}>Blog</div>
                        <div style={{
                            margin: "10px"
                        }}>Privacy Policy</div>
                        <div style={{
                            margin: "10px"
                        }}>Terms & Conditions</div>
                    </Typography>
                </Container>
            </div>
        </>
    )
}

export default Footer