import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import GridItem from "./GridItem.js";
import Button from "./Button.js";
import Card from "./Card.js";
import CardBody from "./CardBody.js";
import CardFooter from "./CardFooter.js";
import styles from "../../assets/teamStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { BackgroundImageContainer } from "./menu-item/menu-item.styles";

const useStyles = makeStyles(styles);

function TeamComponent({ name, title, description, image }) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  console.log(image);
  return (
    // <Link to={`/team/${name}`} style={{ textDecoration: "none" }}>
    <GridItem xs={12} sm={12} md={4}>
      <Card plain>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img
            src={image.charles ? image.charles : image.sam}
            alt="..."
            className={imageClasses}
          />
        </GridItem>
        {/* <BackgroundImageContainer
          className="background-image"
          imageUrl={image}
        /> */}
        {/* <div
          className="background-image"
          style={{ backgroundImage: `url(${image})` }}
        /> */}
        <h4 className={classes.cardTitle}>
          {name}
          <br />
          <small className={classes.smallTitle}>{title}</small>
        </h4>
        <CardBody>
          <p className={classes.description}>{description}</p>
        </CardBody>
        <CardFooter className={classes.justifyCenter}>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-twitter"} />
          </Button>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-instagram"} />
          </Button>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-facebook"} />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
    // </Link>
  );
}

export default TeamComponent;
