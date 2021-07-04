import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "../footer/Button.js";
import Card from "../footer/Card.js";
import CardBody from "../footer/CardBody.js";

// import footerLogo from "../../assets/Centaur.mp4";

const useStyles = makeStyles((theme) => ({
  textWhite: {
    "&, & *": {
      color: "#FFF",
    },
  },
  videoTag: {
    position: "fixed",
    zIndex: -1,
    width: "100%",
    objectFit: "cover",
  },
}));

export default function CardsImages2({ footerImage }) {
  const classes = useStyles();
  return (
    <div style={{ margin: 0, marinTop: "-180px" }}>
      <Card className={classes.textWhite}>
        {/* {children ? {children} : null} */}

        <video
          className="videoTag"
          autoPlay
          loop
          muted
          //   style={{ width: "100%", height: "40vh" }}
        >
          <source src={footerImage} type="video/mp4" />
        </video>
        {/* <img
          className={classes.cardImg}
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
          alt="100%x270"
          style={{ height: "400px", width: "100%", display: "flex" }}
          src={footerImg}
          data-holder-rendered="true"
        /> */}
      </Card>
    </div>
  );
}
