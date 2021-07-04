import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FooterComponent from "../../components/footer/home-footer.component";
import NewFooter from "../../components/footer/NewFooter";
import Header from "../../components/header/Header.component";
import HeaderLinks from "../../components/header/HeaderLinks";
import BannerComponent from "../../components/home/banner.component";
import HeroComponent from "../../components/home/hero.component";
import NavComponent from "../../components/home/Nav.component";
import RecentWorkComponent from "../../components/home/recent-work.component";
import ServicesComponent from "../../components/home/services.component";
import TestimonialsComponent from "../../components/home/testimonials.component";

const dashboardRoutes = [];

const styles = (theme) => ({
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
});

function HomePage(props) {
  const { classes } = props;
  return (
    <div>
      {/* This is the home page
      Nav
      Banner
      hero
      Services
      Recent-work
      Prev-companies
      Personal-projects
      Testimonials
      Footer */}
      {/* <NavComponent /> */}
      {/* <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Centaur Labs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      /> */}
      <div style={{ margin: 0 }}>
        <HeroComponent />
        <BannerComponent />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ServicesComponent />
        <RecentWorkComponent />
        <TestimonialsComponent />

        {/* <FooterComponent /> */}
        <NewFooter />
      </div>
    </div>
  );
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage);
