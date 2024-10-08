import { Phone, WhatsApp } from "@mui/icons-material";
import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Typed from "react-typed";
import meImg from "../../assets/Me.webp";

function Hero() {
  let theme = useTheme();
  return (
    <Box className="hero">
      <Box
        sx={{
          position: "absolute",
          top: { md: "50%", xs: "30%" },
          transform: { md: "translateY(-50%)", xs: "" },
          left: "0",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "space-between", xs: "center" },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: 2,
              }}
            >
              <Box sx={{ width: { sm: "70vw", md: "50vw" } }}>
                <Typography
                  variant="heroHeadText"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Typed
                    strings={[`I am Mahmoud Khallaf`]}
                    typeSpeed={100}
                    loop
                    showCursor={true}
                    bindInputFocusEvents={false}
                    cursorChar="|"
                    autoInsertCss={true}
                  />
                </Typography>

                <Typography
                  variant="heroSubText"
                  sx={{ mt: 2 }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Hello, I am Mahmoud Khallaf, Front End Developer React Js
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                data-aos="fade-up"
                data-aos-delay="700"
                sx={{
                  width: { xs: "220px", md: "400px" },
                  height: { xs: "220px", md: "400px" },
                  mt: { xs: "30px", md: "0" },
                  background: theme.palette.tertiary.main,
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img src={meImg} alt="User Img" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
