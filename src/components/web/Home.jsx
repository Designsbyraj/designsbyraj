import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import image1 from "../../assets/bedroom.jpeg";
import { Button, Paper, Typography } from "@mui/material";
import { lineHeight } from "@mui/system";
import ContactForm from "./ContactForm";
import Carousel from "react-material-ui-carousel";
import img2 from "../../assets/IMG_126.jpeg";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import OurWork from "./OurWork_Home"

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
      objectFit: "fill",
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

  const Reviews = [
    {
      given_by: "Anu Shenoy",
      review:
        "Rajal was such a joy to work with. She was really meticulous about her work. She took charge when I asked her to but also listened to my concerns as we worked through my new home. The final result is absolutely fantastic. She worked within our budget too. I highly recommend rajal for all your home decor needs.",
      rating: [5,5,5,5,5]
    },
    {
      given_by: "S Dave",
      review: `"Raj of Designs by Raj, has an amazing sense of style and is incredibly talented. Her attention to detail is remarkable. Raj has the ability to turn the simplest objects  into extravagant show pieces. She takes the time to understand your style and figures out what you like even when you are unsure. She is professional , punctual, direct and absolutely delightful to work with. She tolerated my indecisiveness with such patience. I will admit that I can be difficult to work with but she was there to calm me down during my times of panic. After my very frugal husband saw her portfolio, he figured that she would be way above our designing budget. But Raj is able to work with all price points and managed to make my rooms look classy and luxurious. Can't say enough great things."`,
      rating: [5, 5, 5, 5, 5],
    },
    {
      given_by: "SHWETA T",
      review:`"The part that stood out in my experience with this impressive, down to earth, passionate interior designer is her endless capability to bring together pieces from different time eras and make it all flow together.
      Her unique sense of design ,space, aura and  energy; her understanding of how light plays an integral role in making a space warm and welcoming;
      her ability to bring the outdoor elements inside and play with different colors sets her apart from the rest.She weaves a tapestry which transcends you into a space that is tasteful , delightful and that resonates with you."`,
      rating: [5, 5, 5, 5, 5],
    },
    {
      given_by:"Aneesha Arora",
      review:`"We had a wonderful experience working with Rajal. She is patient, totally customer focused and has a keen eye for detail and design. She carefully recommended and selected everything from paint, pictures, furniture, lighting/fixtures and so much more (including recommending alternatives and options)  to create comprehensive modern updated looks for several rooms in our house. Loved working with and highly recommend her!
      Services: Living room design, Bedroom design, Home decor selection, Interior decorating, Kitchen design"`,
      rating: [5, 5, 5, 5, 5],
    },
    {
      given_by: "Pinky Desai",
      review: `"Raj helped me out to remodel and decor my new home. She is a great
      professional and an incredible person,empathic and enthusiastic. She
      is attending all the details you need . She is a brilliant designer.
      It was absoulute pleasure to work with her. She turned our house in
      home !!! It is needless to say I ended up working with her on my
      rental unit and results were beyond our imagination. Thank you so
      much for your wonderful and fearless vision. I recommend her to all
      my friends and family."`,
      rating: [5, 5, 5, 5, 5],
    },
    {
      given_by: "J. Wright",
      review: `"Raj was amazing to work with. We were nervous we wouldn't be able to find who understood our taste, but Raj took the effort to understand what we like. She also has amazing taste and finds the perfect pieces. She utilized some of my existing pieces instead of making me start from scratch. I height recommend DBR!!"`,
      rating: [5, 5, 5, 5, 5],
    },
    {
      given_by: "Houzz User",
      review: `"Rajal is so talented, easy and fun to work with. She has great taste, and a keen sense of style. She managed to find us the most amazing selections, that were actually within our budget. Rajal was able to understand our vision, and integrated some of our most prized old possessions to create a modern eclectic style of home we wanted. She is super organized and efficient. Pays close attention to detail. We were so impressed with her professionalism and thoughtfulness. We love our new home and it’s all thanks to Rajal. We highly recommend her."`,
      rating: [5, 5, 5, 5, 5],
    },
  ];

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
                  fontSize: "21px",
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
        <OurWork></OurWork>
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
            padding: "10vh 7%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            style={{ backgroundColor: "white", padding: "6vh 7vh",transform: "translate3d(10px, 10px, 10px)",
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
                    minHeight: "20vh",
                    height: "24vh",
                    boxShadow: "none",
                    border: "0px",
                    padding:"0vh 10vh"
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
                    {review.given_by}
                  </Typography>
                </Paper>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "6vh" }}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}

export default App;
