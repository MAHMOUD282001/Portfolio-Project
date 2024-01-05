import { GitHub, Language, Link } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

function ProjectCard({ project }) {
  let theme = useTheme();

  return (
    <Grid item xs={12} md={6} lg={4} data-aos="zoom-in">
      <Card sx={{ background: theme.palette.tertiary.main }}>
        <CardMedia sx={{ height: 200 }} image={project.img} />
        <CardContent sx={{ height: 200 }}>
          <Typography
            gutterBottom
            variant="sectionSubText"
            sx={{ color: "#fff" }}
          >
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {project.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 2 }}>
          {project.live ? (
            <IconButton aria-label={project.title}>
              <a href={project.live} target="_blank">
                <Language sx={{ color: "#fff", fontSize: "25px" }} />
              </a>
            </IconButton>
          ) : (
            ""
          )}

          {project.code ? (
            <IconButton aria-label={project.title}>
              <a href={project.code} target="_blank">
                <GitHub sx={{ color: "#fff", fontSize: "25px" }} />
              </a>
            </IconButton>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
