import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import React from "react";
import projects_image_helper from "../../project_images_helper_home.json";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function App() {
  const history = useNavigate();
  const location = useLocation();
  const styles = {
    section1: {
      margin: "0 auto",
      paddingTop: "",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    rating: {
      color: "#ffbe28",
      fontSize: "30px",
    },
    section1Image: {
      width: "-webkit-fill-available",
      height: "65vh",
      objectFit: "cover",
    },
    section2: {
      margin: "40px 0px 40px 0px",
      padding: "0% 5%",
    },
    section2container: {
      backgroundColor: "#3f3f3f",
      padding: "40px 0px",
    },
    section2Typ1: {
      fontFamily:
        "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
      fontStyle: "normal",
      color: "white",
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "34px",
      letterSpacing: "0.2em",
      lineHeight: 1.2,
    },
    section2Typ2: {
      fontSizeResponsive: "1.25rem",
      fontSizeResponsiveMin: "16px",
      fontFamily:
        "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
      fontStyle: "normal",
      color: "white",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.5,
    },
    spacer120: {
      minHeight: "90px",
      maxHeight: "120px",
      height: "15.38461538vw",
    },
    spacer36: {
      minHeight: "27px",
      maxHeight: "36px",
      height: "4.61538462vw",
    },
    button: {
      backgroundColor: "#c3a373",
      color: "white",
      padding: "9px 36px",
      letterSpacing: "0.2em",
      lineHeight: 1.4,
      fontSize: "18px",
      fontFamily:
        "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    },
  };

  const projects = ["Ballantyne Living Room"];

  return (
    <Grid
      container
      style={{
        padding: "2vh 2vh",
      }}
    >
      {projects_image_helper.projects.map((project, key) => (
        <Grid
          item
          xs={12}
          style={{
            padding: "2px 0.5vh",
            margin: "0px 0px 2vh 0px",
          }}
        >
          <Card
            onClick={(project) => {
              history("/Project", {
                state: { project_name: project.target.id },
              });
            }}
          >
            <CardActionArea id={project}>
              <CardMedia
                id={project}
                component="img"
                style={{
                  width: "100%",
                  height: "40vh",
                  objectFit: "cover",
                }}
                image={require(`../../assets/Projects/${project}.jpeg`)}
                alt="green iguana"
              />
              <CardContent id={project}>
                <Typography
                  id={project}
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ fontSize: 15 }}
                >
                  {project}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
