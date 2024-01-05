import { Box, Container, Typography, useTheme } from "@mui/material";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperianceCard from "./ExperianceCard";
import logo from "../../assets/logo.webp";
import { experiences } from "../../data";

function Services() {
  let theme = useTheme();

  return (
    <Box id="experiance" sx={{ overflowX: "hidden" }}>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Experiance
        </Typography>

        <VerticalTimeline lineColor={theme.palette.secondary.main}>
          {experiences.map((experience, index) => (
            <ExperianceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Container>
    </Box>
  );
}

export default Services;
