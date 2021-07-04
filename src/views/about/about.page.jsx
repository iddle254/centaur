import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import NavComponent from "../../components/home/Nav.component";
import Parallax from "../../components/about/Parallax.js";
import GridContainer from "../../components/about/GridContainer.js";
import GridItem from "../../components/about/GridItem.js";
import styles from "../../assets/landingPage.js";
import Button from "../../components/about/Button.js";
import cover from "../../assets/cover.jpg";
import ServicesComponent from "../../components/about/Services.component";
import TeamSection from "../../components/about/TeamSection";
import FooterComponent from "../../components/footer/home-footer.component";

const useStyles = makeStyles(styles);

function AboutPage() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={cover}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>About Us</h1>
              <h4>We know you love ...</h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ServicesComponent />
          <TeamSection />

          {/* <ProductSection />
          <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
