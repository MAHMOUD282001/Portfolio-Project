import React, { useState } from "react";
import { myProjects } from "../../../data";
import { useTheme } from "@mui/material";

function ProjectsLogic() {
  let theme = useTheme();

  let [active, setActive] = useState("all");

  let [updatedProjects, setUpdatedProjects] = useState(myProjects);

  let updateProjects = (category) => {
    setActive(category);
    if (category === "all") {
      setUpdatedProjects(myProjects);
    } else {
      setUpdatedProjects([]);
      setTimeout(() => {
        let newProjects = myProjects.filter((updatedProject) => {
          return updatedProject.category === category;
        });
        setUpdatedProjects(newProjects);
      });
    }
  };

  return [theme, active, updatedProjects, updateProjects];
}

export default ProjectsLogic;
