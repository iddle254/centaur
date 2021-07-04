import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import InfoArea from "./InfoArea.js";

import styles from "../../assets/productStyle.js";
import ServicesImageComponent from "../home/services-image.component.jsx";

const useStyles = makeStyles(styles);

function ServicesComponent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we do</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <ServicesImageComponent
              title="Stylish websites"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYnNpdGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
            />
            {/* <InfoArea
              title="Website development"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            /> */}
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <ServicesImageComponent
              title="Cool apps"
              image="https://shellsharks-images.s3.amazonaws.com/Apple-WWDC-2019.png"
            />
            {/* <InfoArea
              title="App development"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            /> */}
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <ServicesImageComponent
              title="Search Engine Optimization"
              image="https://beanstalkim.com/wp-content/uploads/2015/08/cyfe-review-1.jpg"
            />
            {/* <InfoArea
              title="Search engine optimization"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            /> */}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default ServicesComponent;
