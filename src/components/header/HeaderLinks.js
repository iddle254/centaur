/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import CodeIcon from "@material-ui/icons/Code";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BookIcon from "@material-ui/icons/Book";
import BuildIcon from "@material-ui/icons/Build";
// core components
import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button.js";

import styles from "../../assets/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="/services"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <BuildIcon className={classes.icons} /> Services
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/about"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <CodeIcon className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/blog"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <BookIcon className={classes.icons} /> Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={AccountTreeIcon}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Vic's firm
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Play card ecom
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Deb's agency
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Tole Realty
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Handas online
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Bazu furniture
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Sokomarket ads
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Men's online
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Book exchange
            </Link>,
            // <a
            //   href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   Allan ecom
            // </a>,
          ]}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/"
            // target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/"
            // target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
