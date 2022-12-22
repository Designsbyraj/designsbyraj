import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import { GeoAltFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { Globe } from "react-bootstrap-icons";
import { useMemo } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import PhoneInput from "react-phone-input-2";
import emailjs from "emailjs-com";
import axios from "axios";
import 'react-phone-input-2/lib/material.css';
import 'react-phone-input-2/lib/high-res.css';
import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import * as EmailValidator from 'email-validator';


const containerStyle = {
  width: "100%",
  height: "200px",
};

function App() {

  const [loader, setLoader] = React.useState(true);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [zip, setZip] = React.useState(null);


  const sendEmail = () =>{
    const templateParams = {
      to_email: email,
      customer_email: email,
      customer_name: name,
      customer_phone: phone,
      customer_message: message,
      customer_zip: zip,
    };
    if(!email || !name || !phone || !message || !zip){
      toast.info(
        "Please enter all details and try again 🙂",
        {
          position: "top-right",
          pauseOnHover: true,
          draggable: true,
          autoClose: false,
        }
      );
      return 0;
    }
    if(!EmailValidator.validate(email)){
      toast.info(
        "Please enter a valid Email and try again 🙂",
        {
          position: "top-right",
          pauseOnHover: true,
          draggable: true,
          autoClose: false,
        }
      );
      return 0;
    }
    emailjs
      .send(
        "service_82ylnsf",
        "template_uw0t69v",
        templateParams,
        "0BEVTa1lWt6tpJfFK"
      )
      .then(
        (response) => {
          toast.info(
            "Email has been sent successfully🎉",
            {
              position: "bottom-center",
              pauseOnHover: true,
              draggable: true,
              autoClose: false,
            }
          );
        },
        (err) => {
          toast.warning(
            "Something went wrong in sending mail, Please contact personally🙂",
            {
              position: "bottom-center",
              pauseOnHover: true,
              draggable: true,
              autoClose: false,
            }
          );
        }
      );
  }


  const styles = {
    container: {
      padding: "0px 0%",
    },
    location: {
      fontFamily:
        "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
      fontSize: "14px",
      lineHeight: "26px",
      fontWeight: 400,
      marginBottom: 7,
    },
    globe: {
      fontFamily:
        "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
      fontSize: "17px",
      lineHeight: "26px",
      fontWeight: 400,
    },
    icon: {
      color: "#c3a373",
      fontSize: "14px",
      marginRight: 8,
    },
  };
  const center = useMemo(
    () => ({
      lat: 35.0535496,
      lng: -80.8211696,
    }),
    []
  );
  return (
    <Grid container style={styles.container}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily:
                  "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
                fontStyle: "normal",
                color: "black",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "31px",
                letterSpacing: "0.1em",
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              CONTACT US
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "left", paddingLeft: "2%" }}>
            <i class="bi bi-geo-alt-fill"></i>
            <Typography style={styles.location}>
              <GeoAltFill style={styles.icon} />
              <span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Charlotte%2C%20NC%2028277"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Charlotte, NC 2877
                </a>
              </span>
            </Typography>
            <Typography style={styles.location}>
              <TelephoneFill style={styles.icon} />
              <span>
                <a
                  href="tel:rajalsdesigns@gmail.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  (980) 253-9070
                </a>
              </span>
            </Typography>
            <Typography style={styles.location}>
              <EnvelopeFill style={styles.icon} />
              <span>
                <a
                  href="mailto:rajalsdesigns@gmail.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  rajalsdesigns@gmail.com
                </a>
              </span>
            </Typography>
          </Grid>
          <Grid xs={12} style={{marginTop:"2vh",marginBottom:"2vh"}}>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{
                  mapTypeControl: false,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "5px 0px 0px 5px",

                    color: "#1a73e8",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#1a73e8",
                      fontSize: "20px",
                    }}
                    href="https://maps.google.com/maps/dir//Charlotte,+NC+28277/@35.0535496,-80.8211696,12z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88569d575b0475e1:0x709cd6f776257408"
                  >
                    <ForkRightIcon />
                  </a>
                </div>
                <MarkerF
                  position={{
                    lat: 35.0535496,
                    lng: -80.8211696,
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ padding: "0px 0%" }}>
        <Typography
          style={{
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "2px",
            fontWeight: 100,
          }}
        >
          Name(Required)
        </Typography>
        <TextField
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          fullWidth
          size="small"
          placeholder="John Doe"
          style={{ borderRadius: "20px" }}
        ></TextField>
        <div style={{ padding: "10px" }}></div>
        <Typography
          style={{
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "2px",
            fontWeight: 100,
          }}
        >
          Email(Required)
        </Typography>
        <TextField
          value={email}
          type="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          fullWidth
          size="small"
          placeholder="john.doe@gmail.com"
          style={{ borderRadius: "20px" }}
        ></TextField>
        <div style={{ padding: "10px" }}></div>
        <Typography
          style={{
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "2px",
            fontWeight: 100,
          }}
        >
          Phone(Required)
        </Typography>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(e)=>{setPhone(e)}}
          inputProps={{
            name: '',
            required: true
          }}
          inputStyle={{
            width:"100%"
          }}
        />
        {/* <TextField fullWidth size="small" placeholder="(555) 555-1234" style={{borderRadius:"20px"}}></TextField> */}
        <div style={{ padding: "10px" }}></div>
        <Typography
          style={{
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "2px",
            fontWeight: 100,
          }}
         
        >
          Zip
        </Typography>
        <TextField
        onChange={(e)=>{setZip(e.target.value)}}
          value={zip}
          fullWidth
          type="number"
          size="small"
          placeholder="90210"
          style={{ borderRadius: "20px" }}
        ></TextField>
        <div style={{ padding: "10px" }}></div>
        <Typography
          style={{
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "2px",
            fontWeight: 100,
          }}
        >
          Message(Required)
        </Typography>
        <TextField
          value={message}
          fullWidth
          size="small"
          placeholder="Please type a message"
          multiline={true}
          minRows={4}
          style={{ borderRadius: "20px" }}
          onChange={(e)=>{setMessage(e.target.value)}}
        ></TextField>
        <div style={{ padding: "10px" }}></div>
        <Typography
          style={{
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "2px",
            fontWeight: 100,
            padding: "0px 10px",
          }}
        >
          I agree that Designs by Raj can email and call me in response to my
          inquiry, as well as with tips and offers for similar services.
        </Typography>
        <div style={{ padding: "5px" }}></div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#c3a374",
            padding: "0.7em 1em",
            borderRadius: 0,
            boxShadow: "none",
          }}
          fullWidth
          onClick={sendEmail}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
