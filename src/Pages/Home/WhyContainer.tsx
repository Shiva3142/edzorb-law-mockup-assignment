import { Button, Container, ListItem, TextField, Typography } from '@mui/material'
import React from 'react'

function WhyContainer() {
    return (
        <div style={{
            background: "#00395A",
            overflow: "hidden",
            minHeight: "60vh",
        }}>
            <Container style={{
                color: "#FFFFFF",
            }}>

                <h1 style={{
                    fontSize: "50px",
                    textAlign: "center",
                    padding: "30px 0px",
                }}>Why Edzorb Law?</h1>
                <Typography component={'div'} sx={{
                    display: {
                        xs: "flex",
                        md: "grid"
                    },
                    gridTemplateColumns: {
                        md: "5fr 3fr"
                    },
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection:"column"
                }}>
                    <Typography component={'div'} sx={{
                        padding: "20px 10px"
                    }}>
                        <Typography variant='h6'>
                            Edzorb’s mission: Equal access to top-notch study materials for aspiring judicial exam candidates, achieving top 10 ranks through our guidance and your dedication.
                        </Typography>
                        <Typography variant='h6' style={{
                            margin: "20px 0"
                        }}>
                            We want to make sure that every aspirant gets access to the best study material there is.
                        </Typography>
                        <Typography variant='h6' style={{
                            margin: "20px"
                        }}>
                            <li style={{
                                listStyle: "disc"
                            }}>Give learners access to the highest quality digital learning materials and resources.</li>
                            <li style={{
                                listStyle: "disc"
                            }}>Edzorb Law’s Guidance + Your Dedication = A rank in Top 10!</li>
                        </Typography>
                        <Typography component='div' sx={{
                            display: {
                                xs: "flex",
                                md: "grid"
                            },
                            gridTemplateColumns: {
                                md: "1fr 1fr"
                            },
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            flexWrap:"wrap"
                        }}>
                            <Typography component={'div'} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "20px",
                                flexDirection: "column"
                            }}>

                                <img src="https://edzorblaw.com/wp-content/uploads/2023/09/Asset-28.png" alt="" />
                                <h1 style={{
                                    margin: "10px"
                                }}>1,000+</h1>
                                <h2>Ranks</h2>
                            </Typography>
                            <Typography component={'div'} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "20px",
                                flexDirection: "column"
                            }}>

                                <img src="https://edzorblaw.com/wp-content/uploads/2023/09/Asset-27-1.png" alt="" />
                                <h1 style={{
                                    margin: "10px"
                                }}>10,000+</h1>
                                <h2>Students</h2>
                            </Typography>
                            <Typography component={'div'} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "20px",
                                flexDirection: "column"
                            }}>

                                <img src="https://edzorblaw.com/wp-content/uploads/2023/09/users.png" alt="" />
                                <h1 style={{
                                    margin: "10px"
                                }}>100,000+</h1>
                                <h2>Monthly Users
                                </h2>
                            </Typography>
                            <Typography component={'div'} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "20px",
                                flexDirection: "column"
                            }}>

                                <img src="https://edzorblaw.com/wp-content/uploads/2023/09/Asset-26-1.png" alt="" />
                                <h1 style={{
                                    margin: "10px"
                                }}>7+</h1>
                                <h2>Courses</h2>
                            </Typography>

                        </Typography>
                    </Typography>

                    <Typography component={'div'} sx={{
                        color: "#000000",
                    }}>
                        <Typography component={'div'} sx={{
                            minHeight: "700px",
                            position: "relative",
                            padding: "60px 60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <img src="https://edzorblaw.com/wp-content/uploads/2023/08/Asset-1.png" alt="" style={
                                {
                                    position: "absolute",
                                    left: "0",
                                    top: "0",
                                    width: "100%",
                                    height: "100%",
                                }
                            } />
                            <Typography variant='h5' sx={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <span style={{
                                    fontWeight: "bold"
                                }}>Get A Call Back </span>
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/10/icons8-call-100-4.png" style={{
                                    maxWidth: "40px",
                                    margin: "0px 10px",
                                }} alt="" />

                            </Typography>
                            <TextField sx={{
                                width: "100%",
                                marginTop: "20px",
                            }} label="Name" variant="standard" />
                            <TextField sx={{
                                width: "100%",
                                marginTop: "20px",
                            }} label="Email" variant="standard" />
                            <TextField sx={{
                                width: "100%",
                                marginTop: "20px",
                            }} label="Mobile No." variant="standard" />
                            <textarea placeholder='Your Message (optional)' style={{
                                width: "100%",
                                minHeight: "100px",
                                margin: "20px 5px",
                                border: "1px solid gray",
                                padding: "10px",
                                borderRadius: "10px"
                            }}></textarea>
                            <Button variant='contained' sx={{
                                textTransform: "none"
                            }}>
                                Submit
                            </Button>
                        </Typography>
                    </Typography>
                </Typography>

            </Container>
        </div>
    )
}

export default WhyContainer