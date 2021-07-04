import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ProductHeroLayoutComponent from "./product-hero-layout.component";

const backgroundImage =
  "https://images.unsplash.com/photo-1623916400613-6c13fa2f52a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
});

function BannerComponent(props) {
  const { classes } = props;

  return (
    <ProductHeroLayoutComponent backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <div className="jumbotron">
        <h1 className="display-4" style={{ color: "black" }}>
          Let us help bring your vision to life
        </h1>
        <p className="lead" style={{ color: "grey" }}>
          About us
        </p>
        <hr className="my-4" />
        <p style={{ color: "grey" }}>
          We design, develop and maintain web and mobile apps for startups,
          small and medium businesses
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </ProductHeroLayoutComponent>
  );
}

export default withStyles(styles)(BannerComponent);
