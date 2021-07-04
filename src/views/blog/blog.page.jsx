import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "../../components/footer/Button.js";
import Card from "../../components/footer/Card.js";
import CardBody from "../../components/footer/CardBody.js";

import cardImagesStyles from "../../assets/cardImagesStyles";
import NavComponent from "../../components/home/Nav.component.jsx";
import Header from "../../components/header/Header.component.jsx";
import BlogItemComponent from "../../components/blog/BlogItem.component.jsx";
import HeaderLinks from "../../components/header/HeaderLinks.js";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/about/GridItem.js";
import FooterComponent from "../../components/footer/home-footer.component.jsx";

const styles = {
  ...cardImagesStyles,
  textWhite: {
    "&, & *": {
      color: "#FFF",
    },
  },
};
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BlogPage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Centaur Labs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Grid container>
        <GridItem xs={12} sm={12} md={6}>
          <BlogItemComponent />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <BlogItemComponent />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <BlogItemComponent />
        </GridItem>
      </Grid>
      <FooterComponent />

      {/* <NavComponent />
      <Card style={{ width: "20rem" }}>
        <img
          className={classes.cardImgTop}
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: "180px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button color="primary">Go somewhere</Button>
        </CardBody>
      </Card>
      <br />
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </CardBody>
        <img
          className={classes.cardImgBottom}
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: "180px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </Card> */}
    </div>
  );
}
