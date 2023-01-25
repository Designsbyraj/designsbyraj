import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/About.jpeg";
import img2 from "../../assets/IMG_2161.jpg";
import { Button, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Reviews from "../../Reviews_helper.json"


const styles = {
  heading: {
    lineHeight: "31px",
    fontSize: "26px",
    fontStyle: "normal",
    letterSpacing: "0.1em",
  },
  body: {
    lineHeight: "24px",
    fontSize: "16px",
    fontStyle: "normal",
    color: "#444444",
    textAlign: "justify",
    marginTop: "3%",
  },
  container: { margin: "2% 0px", padding: "0px  5%" },
  container1: { margin: "4% 0px", padding: "0px  5%" },
  heading1: {
    lineHeight: "31px",
    fontSize: "26px",
    fontStyle: "normal",
    letterSpacing: "0.1em",
    textTransform: "capitalize",
  },
  heading2: {
    lineHeight: "31px",
    fontSize: "26px",
    fontStyle: "normal",
    letterSpacing: "0.1em",
    textTransform: "capitalize",
    color: "white",
  },
  body1: {
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "24px",
    fontSize: "16px",
    fontStyle: "",
    color: "#444444",
    textAlign: "justify",
    marginTop: "3%",
    fontWeight: "bold",
  },
  rating: {
    color: "#ffbe28",
    fontSize: "10px",
  },
  body2: {
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "24px",
    fontSize: "16px",
    fontStyle: "",
    color: "#444444",
    textAlign: "justify",
  },
};

function App() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={styles.container}
      >
        <Grid item xs={6}>
          <img src={img1} style={{ width: "90%", height: "80vh",  objectFit:"cover"}}></img>
        </Grid>
        <Grid item xs={6} style={{ padding: "0px 5%" }}>
          <Typography style={styles.heading}>Who We Are</Typography>
          <Typography style={styles.body}>
            Designs by Raj is a interior design company located in Charlotte, NC
            that brings minimalistic yet elegant, and glamorous design into
            homes. Raj has a very distinct style and a passion for design.
            Always having an eye for fashion and interiors she decided to change
            her career from health care to pursuing her passion for interior
            design. Where she could continue to help people but this time, to
            help them create a perfect space. In 2018 after finishing school at
            New York's Institute of Art and Design, she began her journey and
            her dream as an interior designer full time with the support of her
            husband and two children. Strongly influenced by art and fashion,
            Raj believes that interior design is also a way to express yourself.
            The space she creates for a client, expresses who they are while
            enhancing the function of the room. Each piece carefully chosen to
            meet the needs and desires of each client.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={styles.container1}>
        <Grid item xs={12}>
          <Typography style={styles.heading1}>TESTIMONIALS</Typography>
        </Grid>
        {Reviews.map((review, key) => (
          <Grid item xs={9} key={key}>
            <Typography style={styles.body1}>
              {review.display_name} &nbsp;
              {review.rating.map(() => (
                <StarIcon style={styles.rating} />
              ))}
            </Typography>
            <Typography style={styles.body2}>{review.review}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#00000066",
          }}
        >
          <Grid container
            style={{
              backgroundColor:"#00000066",
              padding: "12vh 0px",
            }}
          >
            <Grid item xs={12}>
              <Typography style={styles.heading2}>REACH OUT TO US</Typography>
              <Button
                variant="contained"
                style={{
                  fontFamily:
                    "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
                  lineHeight: "31px",
                  fontSize: "17px",
                  fontStyle: "normal",
                  letterSpacing: "0.2em",
                  textTransform: "capitalize",
                  backgroundColor: "#c3a373",
                  fontWeight: 350,
                  marginTop: "3vh",
                  padding:"9px 36px"
                }}
              >
                CONTACT
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
