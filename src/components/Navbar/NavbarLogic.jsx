import { useTheme } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";


function NavbarLogic() {
  let [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [theme, toggle, setToggle, scrolled];
}

export default NavbarLogic;
