import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { technologies } from "../../data";

function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills">
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          My Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {technologies.map((technology) => (
            <Box
              sx={{ width: "150px", height: "150px" }}
              key={technology.name}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={technology.icon} alt={technology.name} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
