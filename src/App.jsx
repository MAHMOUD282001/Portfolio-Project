import { Box, Button, createTheme } from "@mui/material";
import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { getDesignTokens } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Experiance from "./components/Experiance/Experiance";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects/Projects";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: theme.palette.primary.main }}>
        <Navbar setMode={setMode} />
        <Hero />
        <About />
        <Skills />
        <Experiance />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
