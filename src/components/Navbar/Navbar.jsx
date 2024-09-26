import { Container, IconButton, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { navLinks } from "../../data";
import NavbarLogic from "./NavbarLogic";
import { Link } from "react-scroll";

function Navbar({ setMode }) {
  let [theme, toggle, setToggle, scrolled] = NavbarLogic();

  return (
    <Box
      sx={{
        py: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        width: "100%",
        backgroundColor: scrolled ? "#050816" : "transparent",
        boxShadow: scrolled ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "",
      }}
      className="navbar"
    >
      <Container style={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ height: "100px", width: "100px", cursor: "pointer" }}>
            <Link
              href={"hero"}
              to={"hero"}
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
              style={{ cursor: "pointer" }}
            >
              <img src={logo} alt="logo" />
            </Link>
          </Box>

          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
            <ul>
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: "#fefefe",
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  <Link
                    href={navLink.id}
                    to={navLink.id}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                    style={{ cursor: "pointer" }}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}

              <Stack direction={"row"} style={{ marginLeft: "auto" }}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{ marginRight: "20px" }}
                  >
                    <LightModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{ marginRight: "20px" }}
                  >
                    <DarkModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </Stack>
            </ul>
          </Box>

          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
              cursor: "pointer",
              zIndex: "5",
            }}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: { xs: toggle ? "0" : "-250px", sm: "-250px" },
              transition: "all .5s",
              top: 0,
              background: "#8754AF",
              width: "250px",
              height: "100vh",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              paddingTop: 12,
            }}
          >
            <ul
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    padding: "8px",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}

              <Stack direction={"row"}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <LightModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <DarkModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </Stack>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
