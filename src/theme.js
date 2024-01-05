export const getDesignTokens = (mode) => ({
  typography: {
    heroHeadText: {
      fontWeight: "600",
      color: "white",
      fontSize: "30px",
      lineHeight: "40px",
      display: "block",
      "@media (min-width: 700px)": {
        fontSize: "40px",
        lineHeight: "65px",
      },
      "@media (min-width: 900px)": {
        fontSize: "50px",
        lineHeight: "65px",
      },
    },
    heroSubText: {
      fontWeight: "500",
      color: "#fff",
      fontSize: "16px",
      lineHeight: "30px",
      display: "block",
      "@media (min-width: 700px)": {
        fontSize: "18px",
        lineHeight: "40px",
      },
      "@media (min-width: 900px)": {
        fontSize: "22px",
      },
    },
    sectionHeadText: {
      color: "#fff",
      fontSize: "30px",
      margin: "60px 0 30px 0",
      textAlign: "center",
      display: "block",
      lineHeight: "40px",
      position: "relative",
      
      "@media (min-width: 700px)": {
        fontSize: "35px",
        lineHeight: "40px",
        margin: "100px 0 50px 0",
      },
      "@media (min-width: 900px)": {
        fontSize: "40px",
        lineHeight: "50px",
      },
    },
    sectionSubText: {
      fontWeight: "normal",
      color: "#fff",
      display: "block",
      fontSize: "20px",
      lineHeight: "40px",
      letterSpacing: "wider",
      "@media (min-width: 700px)": {
        fontSize: "25px",
      },
    },

    sectionSubSubText: {
      fontWeight: "normal",
      color: "#fff",
      display: "block",
      fontSize: "14px",
      lineHeight: "35px",
      letterSpacing: "wider",
      "@media (min-width: 700px)": {
        fontSize: "16px",
      },
      "@media (min-width: 900px)": {
        fontSize: "18px",
      },
    },

    body2: {
      lineHeight: "24px",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1400,
      xl: 1600,
    },
  },

  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#050816",
          },
          secondary: {
            main: "#fefefe",
          },
          tertiary: {
            main: "#8754AF",
          },
          fourtiary: {
            main: "#58B787",
          },
        }
      : {
          primary: {
            main: "#fefefe",
          },
          secondary: {
            main: "#050816",
          },
          tertiary: {
            main: "#8754AF",
          },
          fourtiary: {
            main: "#58B787",
          },
        }),
  },
});
