import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TypographyComponent from "./typography.component";
import ServiceImage from "./services-image.component";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.accent,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 90,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "flex",
    alignItems: "",
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ServicesComponent(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      {/* <Container className={classes.container}> */}
      {/* <img
        src="../../assets/banner.jpg"
        className={classes.curvyLines}
        alt="curvy lines"
      /> */}
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            {/* <img
                className={classes.image}
                src="https://images.unsplash.com/photo-1539278670307-a69d04dc8a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="suitcase"
              />  */}
            <ServiceImage
              title="Stylish websites"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYnNpdGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
            />
            <TypographyComponent variant="h4" className={classes.title}>
              What our clients have come to expect from us
            </TypographyComponent>
            <TypographyComponent variant="h5" className={classes.title}>
              Responsive websites, Classy designs and occasional hugs 🤭
            </TypographyComponent>
            {/* <TypographyComponent variant="h6">
                Responsive websites, Classy designs and occasional hugs 🤭
              </TypographyComponent> */}
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <ServiceImage
              title="Cool apps"
              image="https://shellsharks-images.s3.amazonaws.com/Apple-WWDC-2019.png"
            />
            <TypographyComponent variant="h4" className={classes.title}>
              Why us?
            </TypographyComponent>
            <TypographyComponent variant="h5" className={classes.title}>
              We have perfected the art of crafting functional cross-platform
              applications for both android and IOS platforms
            </TypographyComponent>
            {/* <TypographyComponent variant="h6">
                We have perfected the art of crafting functional cross-platform
                applications for both android and IOS platforms
              </TypographyComponent> */}
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <ServiceImage
              title="Search Engine Optimization"
              image="https://beanstalkim.com/wp-content/uploads/2015/08/cyfe-review-1.jpg"
            />
            <TypographyComponent variant="h4" className={classes.title}>
              Is it really important?
            </TypographyComponent>
            <TypographyComponent variant="h5" className={classes.title}>
              Let us improve your site's ranking for better visibility by
              potential customers
            </TypographyComponent>
            {/* <TypographyComponent variant="h6">
                Let us improve your site's ranking for better visibility by
                potential customers
              </TypographyComponent> */}
          </div>
        </Grid>
      </Grid>
      {/* </Container> */}
    </section>
  );
}
ServicesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ServicesComponent);
