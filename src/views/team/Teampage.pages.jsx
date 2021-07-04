import React from "react";
import classNames from "classnames";

import CardsImages2 from "../../components/footer/cards-images.component";
import personal from "../../assets/Aki-wewe.mp4";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/landingPage.js";
import TeamComponent from "../../components/team/TeamComponent";
import GridContainer from "../../components/team/GridContainer";

const useStyles = makeStyles(styles);

function Teampage({ ...props }) {
  const classes = useStyles();
  return (
    <div>
      <CardsImages2 footerImage={personal} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <div className={classes.container}> */}
        <div id="navigation-pills">
          <GridContainer>
            <TeamComponent />
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Teampage;
