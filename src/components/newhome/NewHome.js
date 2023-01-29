import React from "react";
import img1 from "./home-hero.jpg";
import img2 from "./headline-curve.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Element, Link as ScrollLink } from "react-scroll";
import StyledButton from "./styled-button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AOS from "aos";
import "aos/dist/aos.css";
import "./newhome.css";
import CountUp from "react-countup";

const ExpItem = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
      <Typography sx={{ color: "#1976D2", mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: "bold" }}>
        <CountUp end={value} duration={4} />+
      </Typography>
      <Typography color="#1976D2" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const exps = [
  {
    label: "Students",
    value: 3000,
  },
  {
    label: "Online Events",
    value: 40,
  },
  {
    label: "Offline Events",
    value: 6,
  },
  {
    label: "Speakers",
    value: 100,
  },
];

const HomeHero = () => {
  return (
    <Element name="home" className="element">
      <Box
        id=" hero"
        sx={{
          backgroundColor: "background.paper",
          position: "relative",
          pt: 4,
          pb: { xs: 8, md: 10 },
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container id="home" maxWidth="lg">
          <Grid container spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    component="h2"
                    sx={{
                      position: "relative",
                      fontSize: { xs: 40, md: 72 },
                      letterSpacing: 1.5,
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                    <Typography
                      component="mark"
                      sx={{
                        position: "relative",
                        color: "primary.main",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        backgroundColor: "unset",
                      }}
                    >
                      Join
                      <Box
                        sx={{
                          position: "absolute",
                          top: { xs: 24, md: 34 },
                          left: 2,
                          transform: "rotate(3deg)",
                          "& img": { width: { xs: 146, md: 210 }, height: "auto" },
                        }}
                      >
                        {/* eslint-disable-next-line */}
                        <img data-aos="fade-in" src={img2} alt="Headline curve" />
                      </Box>
                    </Typography>
                    <span className="gradient-text">India&apos;s</span>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        position: "relative",
                        "& svg": {
                          position: "absolute",
                          top: -16,
                          right: -21,
                          width: { xs: 22, md: 30 },
                          height: "auto",
                        },
                        ml: 1,
                      }}
                      className="textEffect"
                    >
                      Largest
                      <svg version="1.1" viewBox="0 0 3183 3072">
                        <g id="Layer_x0020_1">
                          <path
                            fill="#127C71"
                            d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                          />
                          <path
                            fill="#127C71"
                            d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                          />
                          <path
                            fill="#127C71"
                            d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                          />
                        </g>
                      </svg>
                    </Typography>{" "}
                    <br />
                    competitive student community
                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {
                      "' Learn from top industry experts, build connections, join different clubs, learn real time skills through our community.'"
                    }
                  </Typography>
                </Box>
                <Box sx={{ "& button": { mr: 2 } }}>
                  <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                    <StyledButton color="primary" size="large" variant="contained">
                      Get Started
                    </StyledButton>
                  </ScrollLink>
                  {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                    Watch Video
                  </StyledButton>
                </ScrollLink> */}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ position: "relative" }}>
              {/* Sertificate badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 30,
                  left: { xs: 0, md: -150 },
                  boxShadow: 1,
                  borderRadius: 3,
                  px: 2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 280,
                }}
                data-aos="fade-down"
              >
                <img
                  style={{ width: "70px", height: "47px", borderRadius: "50%", marginRight: "10px" }}
                  src={
                    "https://img.freepik.com/free-vector/handshake-screens-shaking-hands-agreement-collaboration-money-idea_613284-2365.jpg?size=338&ext=jpg"
                  }
                  alt="Certificate icon"
                />

                <Box>
                  {/* <Typography
                  component="h6"
                  sx={{ color: "secondary.main", fontSize: "1.1rem", fontWeight: 700, mb: 0.5 }}
                >
                  Certificate
                </Typography> */}
                  <Typography variant="secondary.main" sx={{ color: "text.secondary", lineHeight: 1.3 }}>
                    Direct collabration with college clubs
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ lineHeight: 0 }}>
                <img
                  className="heroImg"
                  src="https://img.freepik.com/free-vector/flat-graduate-students-mantle-cap-holding-university-diploma-paper-scroll-happy-young-people-academic-gown-with-bachelor-degree-celebrating-graduation-from-college-university-high-school_88138-929.jpg?size=626&ext=jpg"
                  alt="Hero img"
                />
              </Box>
            </Grid>
          </Grid>

          {/* Experience */}
          <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4, mt: 2 }}>
            <Grid container spacing={2}>
              {exps.map((item) => (
                <Grid key={item.value} item xs={12} md={3}>
                  <ExpItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default HomeHero;
