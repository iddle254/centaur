import React from "react";
import GridItem from "./GridItem.js";
import NavPills from "./NavPills.js";

import FaceIcon from "@material-ui/icons/Face";
import BookIcon from "@material-ui/icons/Book";
import Quote from "./Quote.js";

function TeamComponent() {
  return (
    <GridItem xs={12} sm={12} md={12} lg={6}>
      <NavPills
        color="brown"
        horizontal={{
          tabsGrid: { xs: 12, sm: 4, md: 4 },
          contentGrid: { xs: 12, sm: 8, md: 8 },
        }}
        tabs={[
          {
            tabButton: "About me",
            tabIcon: FaceIcon,
            tabContent: (
              <span>
                <p>
                  I am a fullstack web developer with four years experience
                  developing mobile and web applications
                </p>
                <br />
                <p>
                  I have a passion for software engineering and data science.
                  The world is constantly evolving and as a result versatility
                  is required in order to survive in today's tech scene.
                </p>
                {/* <br />
                <p>
                  Dramatically visualize customer directed convergence without
                  revolutionary ROI. Collaboratively administrate empowered
                  markets via plug-and-play networks. Dynamically procrastinate
                  B2C users after installed base benefits.
                </p> */}
              </span>
            ),
          },
          {
            tabButton: "Blog",
            tabIcon: BookIcon,
            tabContent: (
              <Quote
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                author=" Kanye West, Musician"
              />
              // <span>
              //   <p>
              //     Efficiently unleash cross-media information without
              //     cross-media value. Quickly maximize timely deliverables for
              //     real-time schemas.
              //   </p>
              //   <br />
              //   <p>
              //     Dramatically maintain clicks-and-mortar solutions without
              //     functional solutions. Dramatically visualize customer directed
              //     convergence without revolutionary ROI. Collaboratively
              //     administrate empowered markets via plug-and-play networks.
              //     Dynamically procrastinate B2C users after installed base
              //     benefits.
              //   </p>
              // </span>
            ),
          },
        ]}
      />
    </GridItem>
  );
}

export default TeamComponent;
