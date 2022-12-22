import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import img2 from "../../assets/IMG_125.jpg";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import project_images_helper from "../../project_images_helper.json";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate, useLocation } from "react-router-dom";

const styles = {
  heading2: {
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "31px",
    fontSize: "26px",
    fontStyle: "normal",
    letterSpacing: "0.2em",
    textTransform: "capitalize",
    color: "white",
  },
  body: {
    lineHeight: "24px",
    fontSize: "30px",
    fontStyle: "normal",
    color: "#444444",
    textAlign: "justify",
    marginTop: "1%",
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
};

function App() {
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      history("/OurWork");
    } else {
      var project = location.state ? location.state.project_name : null;

      var index = project_images_helper.projects.indexOf(project);
      if (index == -1) {
        history("/OurWork");
      }
    }
  }, []);

  return (
    <React.Fragment>
      {location && location.state && location.state.project_name ? (
        <Grid container justifyContent="center" style={{ padding: "6vh 10vh" }}>
          <Grid item sm={11} xs={12}>
            <Carousel
              navButtonsAlwaysVisible={true}
              navButtonsProps={{
                style: {
                  backgroundColor: "black",
                  borderRadius: 0,
                  color: "white",
                  padding: "2vh",
                },
              }}
              NextIcon={<KeyboardArrowRightIcon />}
              PrevIcon={<KeyboardArrowLeftIcon />}
            >
              {project_images_helper[location.state.project_name].map(
                (image, key) => (
                  <React.Fragment key={key}>
                    <Typography style={styles.body}>
                      {location.state.project_name}
                    </Typography>
                    <img
                      style={{
                        height: "70vh",
                        marginTop: "5vh",
                        objectFit: "contain",
                      }}
                      src={require(`../../assets/Projects/${location.state.project_name}/${image}`)}
                    />
                  </React.Fragment>
                )
              )}
            </Carousel>
          </Grid>
        </Grid>
      ) : (
        history("/OurWork")
      )}
    </React.Fragment>
  );
}

export default App;
