import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { GeoAltFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { Globe } from "react-bootstrap-icons";
import createdby from "../../assets/createdby.png";


function App() {
  const styles = {
    container: {
      backgroundColor: "#fafafa",
      padding: 30,
    },
    location: {
      
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 100,
      marginBottom: 20,
    },
    globe: {
      
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: 100,
    },
    createdby:{
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: 100,
      marginTop:10,
      borderRadius:"5px",
      padding:"0.2% 2%",
      width:"auto",
    },
    icon: {
      color: "#c3a373",
      fontSize: "14px",
      marginRight: 8,
    },
  };
  return (
    <Grid container style={styles.container}>
      <Grid item xs={12}>
        <i class="bi bi-geo-alt-fill"></i>
        <Typography style={styles.location}>
          <GeoAltFill style={styles.icon} />
          <span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Charlotte%2C%20NC%2028277"
              style={{ textDecoration: "none", color: "black" }}
            >
            Charlotte, NC 28277
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
        <Typography style={styles.globe}>
        <Globe style={styles.icon} />
          <span>
            <a
              href="ttps://www.instagram.com/designsbyrajal/?hl=en"
              style={{ textDecoration: "none", color: "black", fontSize: 16 }}
            >
              Instagram
            </a>
          </span>
        </Typography>
        <div style={{borderRadius:"5px"}}>
        <Typography style={styles.createdby}>
          <div style={{backgroundColor:'black',width:"max-content",padding:"0.2% 2%",borderRadius:"5px",marginLeft:"44%"}}>
          <a style={{textDecoration:"none", color:"black"}} href="https://karthikdattu.com/">
          <div
            class="one"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <div style={{ fontSize: 10, fontWeight:"bold",borderRadius: "5px", color:"white" }}>
              Created With
            </div>&nbsp;
            <div style={{ fontSize: 12, borderRadius: "5px", fontWeight:"bold", color:"Red" }}>Karthik Dattu</div>&nbsp;
            <div>
              <img
                src={createdby}
                style={{ height: "16px", borderRadius: "5px" }}
              />
            </div>
          </div>
          </a>
          </div>
        </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
