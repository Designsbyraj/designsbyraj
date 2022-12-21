import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import img2 from "../../assets/IMG_125.jpg";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, Typography } from "@mui/material";
import ContactForm from "./ContactForm";


const styles={
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
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "24px",
    fontSize: "16px",
    fontStyle: "normal",
    color: "#444444",
    textAlign: "justify",
    marginTop: "1.5%",
    color: "white",
    textAlign: "center"
  },
}

function App() {
  return (
    <React.Fragment>
      <Grid container style={{ padding: "6vh 10vh" }}>
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
          <Grid
            container
            style={{
              backgroundColor:"#00000066",
              padding: "13vh 0px",
            }}
          >
            <Grid item xs={12}>
              <Typography style={styles.heading2}>CONTACT US</Typography>
              <Typography style={styles.body}>
                If you are interested in working with us, or just want to say
                hello, send us a message or give us a call.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <div style={{padding:"6vh"}}></div>
        <ContactForm />
      </Grid>
    </React.Fragment>
  );
}

export default App;
