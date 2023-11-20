import { Button, Card, Container, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const StrikeRateCardData = [
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    },
    {
        strikeRate: "91%",
        strikeRateText: "Questions from edzorb's concise Content",
        strikeRateButton: "Delhi JS 2021"
    }
]


function Testimonial() {
    return (
        <>
            <div style={{
                background: "url('https://edzorblaw.com/wp-content/uploads/2023/06/bg-4.png') no-repeat",
                backgroundSize: "cover",
                minHeight: "70vh",
                backgroundPosition: "top",
                width: "100%",
            }}>

                <Container sx={{
                    display: {
                        xs: "flex",
                        md: "grid"
                    },
                    gridTemplateColumns: {
                        md: "1fr 1fr"
                    },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: "60px 60px",
                    flexDirection: "column",
                }}>


                    <Typography component={'div'} sx={{

                    }}>
                        <img src="https://edzorblaw.com/wp-content/uploads/2023/06/free-mentorship-new-changess.jpg" style={{
                            minWidth: "290px",
                            maxWidth: "500px",
                            width: "100%",
                            borderRadius: "20px"
                        }} alt="" />
                    </Typography>
                    <Typography component={'div'} sx={{
                        minHeight: "80%",
                        // padding:"20px",
                    }}>
                        <h2 style={{
                            color: "#173947"
                        }}>Are You Ready to Begin Your Judiciary Journey? Sign Up Now for Free Mentorship Session.
                        </h2>
                        <Button variant="contained" sx={{
                            background: "#01324e",
                            textTransform: "none",
                            fontWeight: "bold",
                            padding: "10px 10px",
                            borderRadius: "10px",
                            ":hover": {
                                background: "#01326e",
                            },
                            fontSize: "18px",
                            margin: "30px 0"
                        }}>
                            Book Now Free Mentorship
                        </Button>
                        <Typography variant='h5' style={{
                            display: "flex",
                            alignItems: "center",
                        }}>

                            <img src="https://edzorblaw.com/wp-content/uploads/2023/07/avatars-als.png" style={{
                                maxHeight: "30px",
                                margin: "10px"
                            }} alt="" />
                            Joined by 10,000+ Students
                        </Typography>
                    </Typography>
                </Container>

                <div
                    style={{
                        background: "url('https://edzorblaw.com/wp-content/uploads/2023/06/bg-4.png') no-repeat",
                        backgroundPosition: "top",
                        maxHeight: "30vh",
                        backgroundSize: "cover",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        padding: window.innerWidth > 600 ? "50px 0px" : "10px 0",
                    }}
                >
                    <img style={{
                        maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                        maxWidth: "10%"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png" alt="" />
                    <Typography variant={
                        window.innerWidth > 600 ? "h3" : "h4"
                    } style={{
                        padding: window.innerWidth > 600 ? "50px 0px" : "20px 0",
                        margin: "0 -20px",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>
                        Strike Rate
                    </Typography>
                    <img style={{
                        maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                        maxWidth: "10%"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png" alt="" />
                </div>
            </div>
            <Container sx={{
                minHeight: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <StrikeRateCardSlider StrikeRateCardData={StrikeRateCardData} />

            </Container>
            <div
                style={{
                    background: "url('https://edzorblaw.com/wp-content/uploads/2023/06/bg-4.png') no-repeat",
                    backgroundPosition: "top",
                    // maxHeight: "50vh",
                    minHeight: "50vh",
                    backgroundSize: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    padding: window.innerWidth > 600 ? "50px 0px" : "10px 0",
                }}
            >
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png" alt="" />
                <Typography variant={
                    window.innerWidth > 600 ? "h3" : "h4"
                } style={{
                    padding: window.innerWidth > 600 ? "50px 0px" : "20px 0",
                    margin: "0 -20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    Testimonials
                </Typography>
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png" alt="" />
            </div>
            <Container sx={{
                minHeight: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-30vh"
            }}>
                <TestimonialCardSlider TestimonialCardData={StrikeRateCardData} />

            </Container>
            <div
                style={{
                    background: "url('https://edzorblaw.com/wp-content/uploads/2023/06/bg-4.png') no-repeat",
                    backgroundPosition: "top",
                    // maxHeight: "50vh",
                    minHeight: "40vh",
                    backgroundSize: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    padding: window.innerWidth > 600 ? "50px 0px" : "10px 0",
                }}
            >
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png" alt="" />
                <Typography variant={
                    window.innerWidth > 600 ? "h3" : "h4"
                } style={{
                    padding: window.innerWidth > 600 ? "50px 0px" : "20px 0",
                    margin: "0 -20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    What makes Edzorb Law unique
                </Typography>
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png" alt="" />
            </div>
            <Container sx={{
                minHeight: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-20vh"
            }}>
                <UniquenessCardSlider UniquenessCardData={StrikeRateCardData} />
            </Container>
            <div
                style={{
                    background: "url('https://edzorblaw.com/wp-content/uploads/2023/06/bg-4.png') no-repeat",
                    backgroundPosition: "top",
                    // maxHeight: "50vh",
                    minHeight: "20vh",
                    backgroundSize: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    padding: window.innerWidth > 600 ? "50px 0px" : "10px 0",
                }}
            >
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png" alt="" />
                <Typography variant={
                    window.innerWidth > 600 ? "h3" : "h4"
                } style={{
                    padding: window.innerWidth > 600 ? "50px 0px" : "20px 0",
                    margin: "0 -20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    Latest Videos
                </Typography>
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png" alt="" />
            </div>
            <Container sx={{
                minHeight: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-20vh"
            }}>
                <YoutubeCardSlider YoutubeCardData={StrikeRateCardData} />
            </Container>
            <div
                style={{
                    background: "url('https://edzorblaw.com/wp-content/uploads/2023/06/bg-4.png') no-repeat",
                    backgroundPosition: "top",
                    // maxHeight: "50vh",
                    minHeight: "40vh",
                    backgroundSize: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    padding: window.innerWidth > 600 ? "50px 0px" : "10px 0",
                }}
            >
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png" alt="" />
                <Typography variant={
                    window.innerWidth > 600 ? "h3" : "h4"
                } style={{
                    padding: window.innerWidth > 600 ? "50px 0px" : "20px 0",
                    margin: "0 -20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    Get Started Today
                </Typography>
                <img style={{
                    maxHeight: window.innerWidth > 600 ? "150px" : "100px",
                    maxWidth: "10%"
                }} src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png" alt="" />
            </div>
            <Container sx={{
                minHeight: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-20vh",
                marginBottom:"20px"
            }}>
                <StartingCardSlider StartingCardData={StrikeRateCardData} />
            </Container>
        </>
    )
}
type StrikeRateCardSliderProps = {
    StrikeRateCardData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }[]
}
type TestimonialCardSliderProps = {
    TestimonialCardData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }[]
}

function StrikeRateCardSlider({ StrikeRateCardData }: StrikeRateCardSliderProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (

        <>
            <Typography id='strikerateScrollbar' component={'div'} sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "scroll",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "::-webkit-scrollbar": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-track": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-thumb": {
                    display: "none",
                    width: "0px",
                },

            }}>

                {
                    StrikeRateCardData.map((item, index) => {
                        return (
                            <StrikeRateCard strikeRateData={item} />
                        )
                    })
                }

            </Typography>
            <Typography sx={{
                position: "absolute",
                bottom: "20px",
                display: {
                    xs: "none",
                    md: "flex"
                },
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
            }} component={'div'}>
                {
                    Array(Math.floor(StrikeRateCardData.length / 3)).fill(0).map((image, index) => {
                        return (
                            <Typography component={'div'} sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "1px solid gray",
                                margin: "0 8px",
                                cursor: "pointer",
                                background: index === currentIndex ? "gray" : "white"
                            }} onClick={(element) => {
                                setCurrentIndex(index)

                                document.getElementById('strikerateScrollbar')?.scrollTo({
                                    left: index * 380 * 3,
                                    behavior: 'smooth'
                                })
                            }}></Typography>
                        )
                    })
                }
            </Typography>
        </>
    )
}
function TestimonialCardSlider({ TestimonialCardData }: TestimonialCardSliderProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (

        <>
            <Typography id='testimonialScrollbar' component={'div'} sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "scroll",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "::-webkit-scrollbar": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-track": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-thumb": {
                    display: "none",
                    width: "0px",
                },

            }}>

                {
                    TestimonialCardData.map((item, index) => {
                        return (
                            <TestimonialCard testimonialData={item} />
                        )
                    })
                }

            </Typography>
            <Typography sx={{
                position: "absolute",
                bottom: "0px",
                display: {
                    xs: "none",
                    md: "flex"

                },
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                marginBottom: "20px"
            }} component={'div'}>
                {
                    Array(Math.floor(TestimonialCardData.length / 3)).fill(0).map((image, index) => {
                        return (
                            <Typography component={'div'} sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "1px solid gray",
                                margin: "0 8px",
                                cursor: "pointer",
                                background: index === currentIndex ? "gray" : "white"
                            }} onClick={(element) => {
                                setCurrentIndex(index)

                                document.getElementById('testimonialScrollbar')?.scrollTo({
                                    left: index * 380 * 3,
                                    behavior: 'smooth'
                                })
                            }}></Typography>
                        )
                    })
                }
            </Typography>
        </>
    )
}


type StrikeRateCardProps = {
    strikeRateData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }
}
type TestimonialCardProps = {
    testimonialData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }
}

function StrikeRateCard({
    strikeRateData
}: StrikeRateCardProps) {

    return (
        <>
            <Card sx={{
                minWidth: "340px",
                minHeight: "300px",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                margin: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
            }}>
                <img src="https://edzorblaw.com/wp-content/uploads/2023/06/trophy-new-ong-1.png" style={{
                    maxWidth: "150px",
                }} alt="" />
                <Typography component={'div'} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "20px"
                }}>
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/07/brush-strokes-dimen-18-1024x279.png" style={{
                        maxWidth: "80%",

                    }} alt="" />
                    <Typography variant='h5' sx={{
                        position: "absolute",
                        fontWeight: "bold",
                    }}>
                        91% Strike Rate
                    </Typography>
                </Typography>
                <h3 style={{
                    textAlign: "center",
                }}>
                    Questions from edzorb's concise Content
                </h3>
                <Button variant="contained" sx={{
                    background: "#01324e",
                    textTransform: "none",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    ":hover": {
                        background: "#01326e",
                    },
                    fontSize: "12px",
                    margin: "10px 0"
                }}>
                    Delhi JS 2021
                </Button>
            </Card>

        </>
    )
}
function TestimonialCard({
    testimonialData
}: TestimonialCardProps) {

    return (
        <>
            <Card sx={{
                minWidth: "340px",
                minHeight: "480px",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                margin: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px 40px",
                textAlign: "center",
                background: "transparent"
            }}>
                <Card sx={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                }}>
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/07/icons2-avatars-39-150x150.png" style={{
                        maxWidth: "150px",
                    }} alt="" />
                </Card>
                <Typography variant='h6' style={{
                    margin: " 10px 0 ",
                    padding: "0"
                }}>
                    ⭐⭐⭐⭐⭐
                </Typography>
                <p style={{
                    color: "gray",
                    fontStyle: "italic",
                }}>Most convenient mode for preparation of the pcsj examination.. Tried the premium version too, <span style={{
                    color: "blue",
                    fontWeight: "bold",
                    textDecoration: "underline"
                }}>Read More</span>  </p>
                <Typography component={'div'} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "20px",
                    fontWeight: "bold",
                    color: "gray",
                    margin: "20px 0"
                }}>
                    Shivkumar Chauahan
                </Typography>
                <audio controls style={{ width: "100%" }}>
                    <source src="####" type="audio/mpeg" />
                </audio>
            </Card>

        </>
    )
}



type UniquenessCardSliderProps = {
    UniquenessCardData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }[]
}
function UniquenessCardSlider({ UniquenessCardData }: UniquenessCardSliderProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (

        <>
            <Typography id='UniquenessScrollbar' component={'div'} sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "scroll",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "::-webkit-scrollbar": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-track": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-thumb": {
                    display: "none",
                    width: "0px",
                },

            }}>

                {
                    UniquenessCardData.map((item, index) => {
                        return (
                            <UniquenessCard UniquenessData={item} index={
                                index
                            } />
                        )
                    })
                }

            </Typography>
            <Typography sx={{
                position: "absolute",
                bottom: "0px",
                display: {
                    xs: "none",
                    md: "flex"

                },
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                marginBottom: "20px"
            }} component={'div'}>
                {
                    Array(Math.floor(UniquenessCardData.length / 3)).fill(0).map((image, index) => {
                        return (
                            <Typography component={'div'} sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "1px solid gray",
                                margin: "0 8px",
                                cursor: "pointer",
                                background: index === currentIndex ? "gray" : "white"
                            }} onClick={(element) => {
                                setCurrentIndex(index)

                                document.getElementById('UniquenessScrollbar')?.scrollTo({
                                    left: index * 290 * 3,
                                    behavior: 'smooth'
                                })
                            }}></Typography>
                        )
                    })
                }
            </Typography>
        </>
    )
}

type UniquenessCardProps = {
    UniquenessData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    },
    index: number
}
function UniquenessCard({
    UniquenessData,
    index
}: UniquenessCardProps) {
    function getBackground() {
        if (index % 4 == 0) {
            return "linear-gradient(180deg, #F5FBFF 0%, #99DAFF 100%)"
        }
        if (index % 4 == 1) {
            return "linear-gradient(180deg, #FDF0FF 0%, #FAE0FF 100%)"
        }
        if (index % 4 == 2) {
            return "linear-gradient(180deg, #FFF9F9 0%, #FFDADA 100%)"
        }
        if (index % 4 == 3) {
            return "linear-gradient(180deg, #FBFEFD 0%, #BAE5DD 100%)"
        }
    }
    return (
        <>
            <Card sx={{
                minWidth: "250px",
                minHeight: "300px",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                margin: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px 40px",
                textAlign: "center",
            }}>
                <Card sx={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: getBackground(),
                }}>
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/07/Qbank.png" style={{
                        maxWidth: "80px",
                    }} alt="" />
                </Card>
                <Typography variant='h6' style={{
                    margin: " 10px 0 ",
                    padding: "0",
                    fontWeight: "bold"
                }}>
                    Main Question Bank
                </Typography>
                <p style={{
                    color: "gray",
                }}>Empowering Mains Excellence</p>
            </Card>

        </>
    )
}


type YoutubeCardSliderProps = {
    YoutubeCardData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }[]
}
function YoutubeCardSlider({ YoutubeCardData }: YoutubeCardSliderProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (

        <>
            <Typography id='UniquenessScrollbar' component={'div'} sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "scroll",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "::-webkit-scrollbar": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-track": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-thumb": {
                    display: "none",
                    width: "0px",
                },

            }}>

                {
                    YoutubeCardData.map((item, index) => {
                        if (index)
                            return (
                                <YoutubeCard YoutubeData={item} />
                            )
                    })
                }

            </Typography>
            <Typography sx={{
                position: "absolute",
                bottom: "0px",
                display: {
                    xs: "none",
                    md: "flex"

                },
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                marginBottom: "20px"
            }} component={'div'}>
                {
                    Array(Math.floor(YoutubeCardData.length / 3)).fill(0).map((image, index) => {
                        return (
                            <Typography component={'div'} sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "1px solid gray",
                                margin: "0 8px",
                                cursor: "pointer",
                                background: index === currentIndex ? "gray" : "white"
                            }} onClick={(element) => {
                                setCurrentIndex(index)

                                document.getElementById('UniquenessScrollbar')?.scrollTo({
                                    left: index * 380 * 3,
                                    behavior: 'smooth'
                                })
                            }}></Typography>
                        )
                    })
                }
            </Typography>
        </>
    )
}

type YoutubeCardProps = {
    YoutubeData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }
}
function YoutubeCard({
    YoutubeData
}: YoutubeCardProps) {

    return (
        <>
            <Card sx={{
                minWidth: "340px",
                // minHeight: "480px",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                margin: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // padding: "20px 40px",
                textAlign: "center",
                background: "transparent"
            }}>

                <img src="https://edzorblaw.com/wp-content/uploads/2023/07/msg981541423-15007.jpg" style={{
                    width: "100%",
                }} alt="" />

            </Card>

        </>
    )
}
type StartingCardSliderProps = {
    StartingCardData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }[]
}
function StartingCardSlider({ StartingCardData }: StartingCardSliderProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (

        <>
            <Typography id='StartingScrollbar' component={'div'} sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "scroll",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "::-webkit-scrollbar": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-track": {
                    display: "none",
                    width: "0px",
                },
                "::-webkit-scrollbar-thumb": {
                    display: "none",
                    width: "0px",
                },

            }}>

                {
                    StartingCardData.map((item, index) => {
                        if (index)
                            return (
                                <StartingCard StartingData={item} />
                            )
                    })
                }

            </Typography>
            <Typography sx={{
                position: "absolute",
                bottom: "-20px",
                display: {
                    xs: "none",
                    md: "flex"

                },
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                marginBottom: "20px"
            }} component={'div'}>
                {
                    Array(Math.floor(StartingCardData.length / 3)).fill(0).map((image, index) => {
                        return (
                            <Typography component={'div'} sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "1px solid gray",
                                margin: "0 8px",
                                cursor: "pointer",
                                background: index === currentIndex ? "gray" : "white"
                            }} onClick={(element) => {
                                setCurrentIndex(index)

                                document.getElementById('StartingScrollbar')?.scrollTo({
                                    left: index * 380 * 3,
                                    behavior: 'smooth'
                                })
                            }}></Typography>
                        )
                    })
                }
            </Typography>
        </>
    )
}

type StartingCardProps = {
    StartingData: {
        strikeRate: string,
        strikeRateText: string,
        strikeRateButton: string,
    }
}
function StartingCard({
    StartingData
}: StartingCardProps) {

    return (
        <>
            <Card sx={{
                minWidth: "340px",
                minHeight: "480px",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                margin: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px 40px",
                textAlign: "center",
                transition: "all 0.5s ease",
                ":hover": {
                    background: "#01326e",
                    color: "white",
                    top: "-10px",
                },
            }}>
                <Card sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.15)",
                }}>
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-11.png" style={{
                        maxWidth: "70px",
                    }} alt="" />
                </Card>
                <Typography variant='h5' style={{
                    margin: "20px 0",
                    fontWeight: "bold"
                }}>
                    Marks Enhancement Programme
                </Typography>
                <p style={{
                    fontWeight: "bold",
                    margin: "10px",
                    color:"#7C67E6"
                }}>
                    90 Days Tapasya
                </p>
                <ul style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                }}>
                    <li style={{
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        margin:"10px"
                    }}> <img style={{
                        margin:"0 10px"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/03/icons8-checkmark-21-1.png" alt="" /><span> Dedicated 90 Days Schedule</span></li>
                    <li style={{
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        margin:"10px"
                    }}> <img style={{
                        margin:"0 10px"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/03/icons8-checkmark-21-1.png" alt="" /><span> Prelims & Mains Target</span></li>
                    <li style={{
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        margin:"10px"
                    }}> <img style={{
                        margin:"0 10px"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/03/icons8-checkmark-21-1.png" alt="" /><span> Essay Writing & Judgment Writing Tests</span></li>
                    <li style={{
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        margin:"10px"
                    }}> <img style={{
                        margin:"0 10px"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/03/icons8-checkmark-21-1.png" alt="" /><span> Simplified Notes</span></li>
                    <li style={{
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        margin:"10px"
                    }}> <img style={{
                        margin:"0 10px"
                    }} src="https://edzorblaw.com/wp-content/uploads/2023/08/icons8-checkmark-20.png" alt="" /><span style={{
                        textDecoration:"underline"
                    }}> Check All Features </span></li>
                </ul>
                <Button variant='contained' sx={{
                    background: "#01324E",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    margin: "20px 0",
                    padding: "10px 20px",
                    ":hover": {
                        background: "#01324E",
                    },
                }}>
                    Buy Now <ChevronRightIcon/>
                </Button>
                <Typography component={'div'}>

                    <img src="https://edzorblaw.com/wp-content/uploads/2023/06/icons2-whatsaapp-e1687690015465.png" style={{
                        maxWidth: "50px",
                        margin:"10px",
                        background:"white",
                        padding:"5px"
                    }} alt="" />
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/06/icons2-call.png" style={{
                        maxWidth: "50px",
                        margin:"10px",
                        background:"white",
                        padding:"5px"
                    }} alt="" />

                </Typography>
            </Card>

        </>
    )
}











export default Testimonial