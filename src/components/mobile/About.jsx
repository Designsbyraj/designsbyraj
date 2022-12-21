import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/IMG_0499.jpg";
import img2 from "../../assets/IMG_2161.jpg";
import { Button, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const styles = {
  heading: {
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "31px",
    fontSize: "26px",
    fontStyle: "normal",
    letterSpacing: "0.2em",
  },
  body: {
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "24px",
    fontSize: "16px",
    fontStyle: "normal",
    color: "#444444",
    textAlign: "justify",
    marginTop: "3%",
  },
  container: { margin: "12% 0px", padding: "0px  4%" },
  container1: { margin: "4% 0px", padding: "0px  5%" },
  heading1: {
    fontFamily:
      "Montserrat, proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif",
    lineHeight: "31px",
    fontSize: "26px",
    fontStyle: "normal",
    letterSpacing: "0.2em",
    textTransform: "capitalize",
  },
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

function App() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={styles.container}
      >
        <Grid item xs={12}>
          <img
            src={img1}
            style={{ width: "98%", height: "40vh", objectFit: "cover" }}
          ></img>
        </Grid>
        <Grid item xs={12} style={{ padding: "0px 5%", marginTop: "5vh" }}>
          <Typography style={styles.heading}>Who We Are</Typography>
          <Typography style={styles.body}>
            Designs by Raj is a interior design company located in Charlotte, NC
            that brings minimalistic yet elegant, and glamorous design into
            homes. Raj has a very distinct style and a passion for design.
            Always having an eye for fashion and interiors she decided to change
            her career from health care to pursuing her passion for interior
            design. Where she could continue to help people but this time, to
            help them create a perfect space. In 2018 after finishing school at
            New York’s Institute of Art and Design, she began her journey and
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
        <Grid item xs={12} style={{ marginTop: "5vh" }}>
          <Typography style={styles.heading1}>TESTIMONIALS</Typography>
          <br></br>
        </Grid>
        {Reviews.map((review, key) => (
          <Grid item xs={11} key={key}>
            <Typography style={styles.body1}>
              {review.given_by} &nbsp;
              {review.rating.map(() => (
                <StarIcon style={styles.rating} />
              ))}
            </Typography>
            <Typography style={styles.body2}>{review.review}</Typography>
            <br></br>
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
          <Grid
            container
            style={{
              backgroundColor: "#00000066",
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
                  padding: "9px 36px",
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
