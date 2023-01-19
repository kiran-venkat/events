// import React, { useState } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// // import logo from '../../logo.svg';
// import "./navbar.css";
// import logo3 from "../../assets/logo3.png";
// import { useNavigate } from "react-router-dom";
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <img
//             onClick={() => navigate("/")}
//             style={{ width: "180px", height: "120px", cursor: "pointer" }}
//             src={logo3}
//           />
//           {/* <p className="logo-text">EVNTORG</p> */}
//         </div>
//         <div className="gpt3__navbar-links_container">
//           <p>
//             <a onClick={() => navigate("/")} href="#home">
//               Home
//             </a>
//           </p>
//           <p>
//             <a onClick={() => navigate("/")} href="#wgpt3">
//               Mission
//             </a>
//           </p>
//           <p>
//             <a onClick={() => navigate("/")} href="#features">
//               Features
//             </a>
//           </p>
//           <p>
//             <a onClick={() => navigate("/")} href="#possibility">
//               Comments
//             </a>
//           </p>
//           {/* <p>
//             <a onClick={() => navigate("/")} href="#blog">
//               Events
//             </a>
//           </p> */}
//           <p>
//             <a onClick={() => navigate("/")} href="#footer">
//               Contact Us
//             </a>
//           </p>
//           <p>
//             <a style={{ color: "rgb(1,41,112)" }} onClick={() => navigate("/gallery")}>
//               Gallery
//             </a>
//           </p>
//           <p>
//             <a style={{ color: "rgb(1,41,112)" }} onClick={() => navigate("/feedback")}>
//               Feedback
//             </a>
//           </p>
//         </div>
//       </div>
//       {/* <div className="gpt3__navbar-sign">
//         <p>Sign in</p>
//         <button type="button">Sign up</button>
//       </div> */}
//       <div className="gpt3__navbar-menu">
//         {toggleMenu ? (
//           <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
//         ) : (
//           <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
//         )}
//         {toggleMenu && (
//           <div className="gpt3__navbar-menu_container scale-up-center">
//             <div className="gpt3__navbar-menu_container-links">
//               <p>
//                 <a onClick={() => navigate("/")} href="#home">
//                   Home
//                 </a>
//               </p>
//               <p>
//                 <a onClick={() => navigate("/")} href="#wgpt3">
//                   Mission
//                 </a>
//               </p>
//               <p>
//                 <a onClick={() => navigate("/")} href="#features">
//                   Features
//                 </a>
//               </p>
//               <p>
//                 <a onClick={() => navigate("/")} href="#possibility">
//                   Comments
//                 </a>
//               </p>
//               {/* <p>
//             <a onClick={() => navigate("/")} href="#blog">
//               Events
//             </a>
//           </p> */}
//               <p>
//                 <a onClick={() => navigate("/")} href="#footer">
//                   Contact Us
//                 </a>
//               </p>
//               <p>
//                 <a onClick={() => navigate("/gallery")}>Gallery</a>
//               </p>
//               <p>
//                 <a onClick={() => navigate("/feedback")}>Feedback</a>
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

import { navigations } from "./navigation.data";
import curve from "./headline-curve.svg";
import { useTheme } from "@mui/material/styles";
import { Menu, Close } from "@mui/icons-material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo3 from "../../assets/logo3.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "background.paper", width: "100%" }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* <Logo /> */}
          <img
            onClick={() => navigate("/")}
            style={{ width: "140px", height: "100px", cursor: "pointer" }}
            src={logo3}
          />
          <Box sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },

              transition: (theme) => theme.transitions.create(["top"]),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: "background.paper",
                zIndex: "appBar",
                position: "fixed",
                height: { xs: "100vh", md: "auto" },
                top: visibleMenu ? 0 : "-120vh",
                left: 0,
              }),
            }}
          >
            {visibleMenu && matchMobileView && (
              <img
                onClick={() => navigate("/")}
                style={{ width: "180px", height: "140px", cursor: "pointer" }}
                src={logo3}
              />
            )}

            <Box /> 
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
              {navigations.map(({ path: destination, label, href }) => (
                <Box
                  // component={ScrollLink}
                  // activeClass="current"
                  // spy={true}
                  // smooth={true}
                  // duration={350}
                  sx={{
                    position: "relative",
                    color: "text.disabled",
                    cursor: "pointer",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 0, md: 3 },
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: "1.2rem", md: "inherit" },
                    // ...(destination === "/" && {
                    //   color: "primary.main",
                    // }),

                    //   "& > div": { display: "none" },

                    //   "&.current>div": { display: "block" },

                    //   "&:hover": {
                    //     color: "primary.main",
                    //     "&>div": {
                    //       display: "block",
                    //     },
                    //   },
                  }}
                >
                  <Link
                    onClick={() => navigate("/")}
                    activeClass="active"
                    className="test6"
                    to={href}
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
              <Box
                // component={ScrollLink}
                // activeClass="current"
                // spy={true}
                // smooth={true}
                // duration={350}
                sx={{
                  position: "relative",
                  color: "text.disabled",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 0, md: 3 },
                  mb: { xs: 3, md: 0 },
                  fontSize: { xs: "1.2rem", md: "inherit" },
                }}
              >
                <Link
                  onClick={() => navigate("/gallery")}
                  activeClass="active"
                  className="test6"
                  // to={href}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Gallery
                </Link>
              </Box>
            </Box>
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: "fixed",
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
