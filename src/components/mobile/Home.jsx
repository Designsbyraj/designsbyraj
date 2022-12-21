import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import image1 from "../../assets/ballantyne-20sitting-20room.jpeg";
import { Button, Paper, Typography } from "@mui/material";
import { lineHeight } from "@mui/system";
import ContactForm from "./ContactForm";
import Carousel from "react-material-ui-carousel";
import img2 from "../../assets/IMG_126.jpeg";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import OurWok from "./OurWork_Home";
import Reviews from "../../Reviews_helper.json"


function App() {
  const history = useNavigate();
  const location = useLocation();
  const styles = {
    section1: {
      margin: "0vh auto",
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
      height: "90vh",
      objectFit: "cover",
    },
    section2: {
      margin: "20px 0px 40px 0px",
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
      fontSize: "20px",
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

 

  return (
    <Grid container>
      <Grid item xs={12} style={styles.section1}>
        <img src={image1} style={styles.section1Image}></img>
      </Grid>
      <Grid item xs={12} style={styles.section2}>
        <Grid
          container
          style={styles.section2container}
          justifyContent="center"
        >
          <Grid item xs={12} style={styles.spacer120}>
            &nbsp;
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <h1 style={styles.section2Typ1}>WHO WE ARE</h1>
            </Typography>
            <span
              style={{
                minHeight: "10px",
                maxHeight: "24px",
                height: "3.07692308vw",
              }}
            ></span>
            <Typography style={styles.section2Typ2}>
              <p
                style={{
                  fontSize: "17px",
                  margin: "0px 6%",
                }}
              >
                Designs by Raj is a interior design company located in
                Charlotte, NC that brings minimalistic yet elegant, and
                glamorous design into homes.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} style={styles.spacer36}>
            &nbsp;
          </Grid>
          <Grid item xs={4}>
            <Button style={styles.button}>About</Button>
          </Grid>

          <Grid item xs={12} style={styles.spacer120}>
            &nbsp;
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <OurWok></OurWok>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url(${img2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom: "10vh",
        }}
      >
        <Grid
          container
          style={{
            backgroundColor: "#00000066",
            padding: "7vh 7% 7vh 2%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            style={{ backgroundColor: "white", padding: "6vh 0vh",transform: "translate3d(10px, 10px, 10px)",
            opacity: 0.8 }}
          >
            <Carousel
            navButtonsAlwaysVisible={true}
            navButtonsProps={{      
              style: {
                  backgroundColor: 'transparent',
                  borderRadius: 0,
                  color:"black"
              }
          }} 
            NextIcon={<KeyboardArrowRightIcon/>}
            PrevIcon={<KeyboardArrowLeftIcon/>}
            >
              {Reviews.map((review, key) => (
                <Paper
                  key={key}
                  style={{
                    minHeight: "65vh",
                    height: "65vh",
                    boxShadow: "none",
                    border: "0px",
                    padding:"0vh 4vh 0px 4vh"
                  }}
                >
                  <Typography>
                    {review.rating.map(() => (
                      <StarIcon style={styles.rating} />
                    ))}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: "#444444",
                    }}
                  >
                    {review.review}
                  </Typography>
                  <br></br>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: "#444444",
                    }}
                  >
                    {review.display_name}
                  </Typography>
                </Paper>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "6vh",padding:"0% 5%" }}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}

export default App;
