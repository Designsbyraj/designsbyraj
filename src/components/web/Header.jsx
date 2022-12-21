import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.webp";
import { useNavigate, useLocation } from "react-router-dom";


const pages = ["Home", "About", "Portfolio", "Contact"];
const styles = {
  toolbar: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  navs:{
    color: "white",
    display: "block",
    color: "#c3a373",
    fontVariant: "normal",
    fontFamily: "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing:"0.2em",
    fontSize:"17px",
    padding:"8px 16px"
  },
  box:{ flexGrow: 1, display: { md: "flex" } },
  appbar:{ backgroundColor: "black",padding:"16px", boxShadow:"none" }
}

function Header() {
  const history = useNavigate();
  const handleNav = (page) => {
  }

  return (
    <AppBar position="static" style={styles.appbar}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={styles.toolbar}
        >
          <img
            width="200px"
            style={{marginBottom:"16px"}}
            src={logo}
          />
          <Box sx={styles.box}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{history("/"+page.replace(/\s/g, ''))}}
                style={styles.navs}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
