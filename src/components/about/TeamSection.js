import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "./GridContainer.js";

import styles from "../../assets/teamStyle.js";

import charles from "../../assets/me32.jpg";
import sam from "../../assets/sam.jpg";
import TeamComponent from "./TeamComponent.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  const profiles = [
    {
      name: "Charles Motaroki",
      title: "Software Engineer",
      image: { charles },
      description:
        "Driven, motivated and ambitious. We couldn't recommend anyone better to handle your ...",
    },
    {
      name: "Sam Motaroki",
      title: "Frontend Engineer",
      image: { sam },
      description:
        "Driven, motivated and ambitious. We couldn't recommend anyone better to handle your ...",
    },
  ];
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Who we are</h2>
      <div>
        <GridContainer>
          {/* <TeamComponent name="Sam Motaroki" title="Frontend Engineer" image={sam} description="Driven, motivated and ambitious. We couldn't recommend anyone better to handle your ..."/> */}
          {profiles.map((profile) => (
            <TeamComponent
              name={profile.name}
              title={profile.title}
              image={profile.image}
              description={profile.description}
            />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
