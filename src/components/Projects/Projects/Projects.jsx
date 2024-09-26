import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectsLogic from "./ProjectsLogic";

function Projects() {
  let [theme, active, updatedProjects, updateProjects] = ProjectsLogic();

  console.log(updatedProjects);

  return (
    <Box id="projects">
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <button
                onClick={() => updateProjects("all")}
                className={`common-btn ${active === "all" ? "active" : ""}`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                All
              </button>
              <button
                onClick={() => updateProjects("htmlCssJs")}
                className={`common-btn ${
                  active === "htmlCssJs" ? "active" : ""
                }`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                Html & Css & Js
              </button>
              <button
                onClick={() => updateProjects("react")}
                className={`common-btn ${active === "react" ? "active" : ""}`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                React Js
              </button>
              <button
                onClick={() => updateProjects("reactMui")}
                className={`common-btn ${
                  active === "reactMui" ? "active" : ""
                }`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                React Js & MUI
              </button>
              
              <button
                onClick={() => updateProjects("reactTailwind")}
                className={`common-btn ${
                  active === "reactTailwind" ? "active" : ""
                }`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                React Js & Tailwind
              </button>
              
              <button
                onClick={() => updateProjects("reactBootstrap")}
                className={`common-btn ${
                  active === "reactBootstrap" ? "active" : ""
                }`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                React Js & Bootstrap
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Grid container spacing={2}>
              {updatedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
