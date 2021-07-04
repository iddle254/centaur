import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TypographyComponent from "../home/typography.component";
import FooterFaq from "./footer-faq.component";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import cardImagesStyles from "../../assets/cardImagesStyles";

const useStyles = makeStyles((theme) => ({
    ...cardImagesStyles,
    
  }));

function FooterCard() {
    const classes = useStyles();
    return (
        <div className={classes.cardImgOverlay}>
          <TypographyComponent component="footer" className={classes.root}>
            <Container className={classes.container}>
              <Grid container spacing={5}>
                <Grid item xs={6} sm={4} md={3}>
                  <FooterFaq />
                </Grid>
              </Grid>
            </Container>
          </TypographyComponent>
        </div>
    )
}

export default FooterCard
