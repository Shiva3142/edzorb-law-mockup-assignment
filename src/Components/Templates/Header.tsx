import React from 'react'
import { Button, Container, Typography } from '@mui/material'


function Header() {
    return (
        <>
            <div style={{
                background: "#01324E"
            }}>
                <Container sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: "space-between",
                        md: "start"
                    },
                    alignItems: 'center',
                    color: "#FFFFFF",
                    flexWrap: {
                        // xs: "wrap",
                        md: "nowrap"
                    },
                    padding: "0px 0px",
                }}>
                    <Typography component={'div'} style={{
                        padding:"0px"
                    }}>
                        <img src="https://edzorblaw.com/wp-content/uploads/2023/05/legal-rumble-2-logo.png" alt="" style={{
                            maxWidth: "190px"
                        }} />
                    </Typography>
                    <Typography component={'div'} sx={{
                        // width: '100%'
                        width:{
                            md:"100%",
                            xs:"auto"
                        
                        },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: {
                            // xs: "wrap",
                            md: "nowrap"
                        }
                    }}>
                        <Typography component={'div'} sx={{
                            maxWidth: '350px',
                            width: '100%',
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: {
                                xs: "wrap",
                                md: "nowrap"
                            }
                        }}>
                            <img src="https://edzorblaw.com/wp-content/uploads/2023/01/secure-icon-png-30.png" style={{
                                maxWidth: "30px",
                            }} alt="" />
                            <h4>Premium +</h4>
                            <h4>Blogs</h4>
                            <h4 style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/08/Asset-144.png" style={{
                                    maxWidth: "30px",
                                    margin: "10px"
                                }} alt="" />Podcast
                            </h4>
                        </Typography>
                        <Typography component={'div'} sx={{
                            maxWidth:{
                                xs:"200px",
                                md:"300px"
                            },
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            
                        }}>
                            <Typography component={'div'} sx={{
                                display:{
                                    xs:"none",
                                    md:"flex"
                                },
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                minWidth:"80px"
                            }}>

                                <img src="https://edzorblaw.com/wp-content/uploads/2023/02/pngegg-1.png" style={{
                                    maxWidth: "30px",
                                }} alt="" />
                                <img src="https://edzorblaw.com/wp-content/uploads/2023/02/pngegg.png" style={{
                                    maxWidth: "30px",
                                }} alt="" />
                            </Typography>
                            <Button variant="contained" color='warning' style={{
                                width: "90px",
                                margin: "0px 5px",
                                textTransform: 'none',
                                fontWeight: 'bold'
                            }}>Login</Button>
                            <Button variant="contained" style={{
                                width: "90px",
                                background: "#F2F2F2",
                                color: "#000000",
                                margin: "0px 5px",
                                textTransform: 'none',
                                fontWeight: 'bold'
                            }}>Sign Up</Button>
                        </Typography>
                    </Typography>
                </Container>
            </div>
        </>
    )
}

export default Header