import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.webp";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import MenuIcon from "@mui/icons-material/Menu";
import { isMobile } from "react-device-detect";
import { useState } from "react";

const pages = ["Home", "About", "Our Work", "Contact"];
const styles = {
  toolbar: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  navs: {
    color: "white",
    display: "block",
    color: "#c3a373",
    fontVariant: "normal",
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0.2em",
    fontSize: "17px",
    padding: "8px 16px",
  },
  box: { flexGrow: 1, display: { md: "flex" } },
  appbar: { backgroundColor: "black", padding: "16px", boxShadow: "none" },
};

function Header() {
  const history = useNavigate();
  const handleNav = (page) => {
  };
  const [openmenu, setOpenmenu] = useState(false);

  return (
    <React.Fragment>
      <AppBar position="static" style={styles.appbar}>
        <Container maxWidth="xl">
          {!isMobile ? (
            <Toolbar disableGutters style={styles.toolbar}>
              <img width="200px" style={{ marginBottom: "16px" }} src={logo} />
              <Box sx={styles.box}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      history("/" + page.replace(/\s/g, ""));
                    }}
                    style={styles.navs}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          ) : (
            <React.Fragment>
              <div style={{ textAlign: "right" }}>
                <MenuIcon
                  style={{
                    textAlign: "right",
                    color: "#c3a373",
                  }}
                  onClick={() => {
                    setOpenmenu(true);
                  }}
                />
              </div>
              <Toolbar style={styles.toolbar}>
                <img
                  width="200px"
                  style={{ marginBottom: "16px" }}
                  src={logo}
                />
              </Toolbar>
            </React.Fragment>
          )}
        </Container>
      </AppBar>
      <Dialog open={openmenu} fullScreen>
        <Grid container style={{ height: "100%", backgroundColor: "black" }}>
          <Grid xs={12}>
            <Grid container justifyContent="right" style={{ height: "10%" }}>
              <Grid
                item
                xs={2}
                style={{ padding: "3% 0% 0px 0px",textAlign:"center" }}
              >
                <CloseIcon
                  style={{
                    color: "#c3a373", fontSize: "30px",fontWeight:"bold"
                  }}
                  onClick={() => {
                    setOpenmenu(false);
                  }}
                ></CloseIcon>
              </Grid>
            </Grid>
            <Grid container style={{ height: "60%" }} justifyContent="center" alignItems="center" direction="row">
              <Grid item xs={5} style={{textAlign:"center"}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      setOpenmenu(false)
                      history("/" + page.replace(/\s/g, ""));
                    }}
                    style={styles.navs}
                  >
                    {page}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}

export default Header;
