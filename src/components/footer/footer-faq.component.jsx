import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));
function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        Centaur Labs
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}
function FooterFaq() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          {/* <Grid item xs>
            <Typography gutterBottom variant="h4">
              Centaur Labs
            </Typography>
          </Grid> */}
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              <Copyright />
              <Divider variant="middle" />
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2" justify="flexEnd">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Contact us
        </Typography>
        <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
          <div style={{ flexDirection: "column", flex: 0.5 }}>
            <Chip className={classes.chip} color="primary" label="Location" />
            <Chip
              className={classes.chip}
              color="primary"
              label="Phone Number"
            />
            <Chip className={classes.chip} color="primary" label="Email" />
          </div>
          <div style={{ flexDirection: "column", flex: 0.5 }}>
            <Chip
              className={classes.chip}
              label="Kilimani, Dennis Pritt road"
            />
            <Chip className={classes.chip} label="0714158146" />
            <Chip className={classes.chip} label="centaursupport@gmail.com" />
          </div>
        </div>
      </div>
      <div className={classes.section3}>
        <Button color="primary">Request a quote</Button>
      </div>
    </div>
  );
}

export default FooterFaq;
