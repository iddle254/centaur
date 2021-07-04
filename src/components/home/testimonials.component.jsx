import React from "react";
import PropTypes from "prop-types";
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import TypographyComponent from "./typography.component";

const items = [
  {
    src: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-4.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-3.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: "4px solid currentColor",
    borderRadius: 0,
    height: "auto",
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function TestimonialsComponent(props) {
  const { classes } = props;
  return (
    <>
      <Container className={classes.root} component="section">
        <Button className={classes.button}>
          <TypographyComponent variant="h4" component="span">
            What our clients think of us
          </TypographyComponent>
        </Button>
        <TypographyComponent variant="subtitle1" className={classes.link}>
          Here are some sample reviews from some of our satisfied clients. Join
          the growing list!
        </TypographyComponent>
        {/* <img
        src="/static/themes/onepirate/producBuoy.svg"
        className={classes.buoy}
        alt="buoy"
      /> */}
      </Container>
      <Row>
        <Col md="10" className="mx-auto">
          <Container>
            <h3>Reviews</h3>
            <UncontrolledCarousel items={items} />
            <Card className=" p-3">
              <CardBody className=" blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className=" blockquote-footer">
                  <small className=" text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    </>
  );
}
TestimonialsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TestimonialsComponent);
