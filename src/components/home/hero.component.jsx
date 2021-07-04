import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Image from "react-bootstrap/Image";
import ProductHeroLayoutComponent from "./product-hero-layout.component";
import TypographyComponent from "./typography.component";
import ButtonComponent from "./button.component";

const backgroundImage =
  "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HeroComponent(props) {
  const { classes } = props;
  return (
    <ProductHeroLayoutComponent backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <TypographyComponent
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
      >
        Design, Prototype, Experience, Build
      </TypographyComponent>
      <TypographyComponent
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        You hire us to pay attention to detail
      </TypographyComponent>
      <ButtonComponent
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Checkout our portfolio
      </ButtonComponent>
      <TypographyComponent
        variant="body2"
        color="inherit"
        className={classes.more}
      >
        Discover the experience
      </TypographyComponent>
    </ProductHeroLayoutComponent>
  );
}

HeroComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroComponent);
