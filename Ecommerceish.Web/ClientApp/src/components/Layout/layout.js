import React, { } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import homeStyles from "assets/jss/material-kit-react/views/homePage.js";

import image from "assets/img/bgmakeup.jpg";

import Parallax from "components/Parallax/Parallax.js";

import classNames from "classnames";


import Button from "components/CustomButtons/Button.js";


import Paginations from "components/Pagination/Pagination.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { List, ListItem } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import navStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import GridContainer from "components/Grid/GridContainer";

const useStyles = makeStyles(styles);
const useStylesImage = makeStyles(imagesStyles);
const useStylesHome = makeStyles(homeStyles);
const useStylesNav = makeStyles(navStyles);

const Layout = (props) => {
    const classes = useStyles();
    const homeClasses = useStylesHome();
    const navClasss = useStylesNav();

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="VIP MAKEUP"
                rightLinks={<HeaderLinks />}
                rota="/login"
            />
            <div
                className={classes.pageHeader}
            >
                <Parallax small filter image={image}>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <Header
                        brand={props.pageName}
                        color="dark"
                        leftLinks={
                            <List className={navClasss.list}>
                                <ListItem className={navClasss.listItem}>
                                    <Button simple onClick={e => props.setAbrirModal(true)} color="white">
                                        Adicionar
                                    </Button>
                                </ListItem>
                                {props.leftLinks}
                            </List>
                        }
                        rightLinks={
                            <div>
                                <CustomInput
                                    white
                                    inputRootCustomClasses={navClasss.inputRootCustomnavClasss}
                                    formControlProps={{
                                        className: navClasss.formControl
                                    }}
                                    inputProps={{
                                        placeholder: "Pesquisar",
                                        inputProps: {
                                            "aria-label": "Search",
                                            className: navClasss.searchInput
                                        },
                                        onChange: (e) => { props.onChangePesquisa(e.target.value) }
                                    }}
                                />
                                <Button justIcon round color="transparent">
                                    <Search className={navClasss.searchIconLight} />
                                </Button>
                            </div>
                        }
                    />
                    <div className={homeClasses.container}>
                        <GridContainer>
                            {props.children}
                        </GridContainer>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Paginations
                                pages={[
                                    { text: "PREV" },
                                    { active: true, text: 1 },
                                    { text: 2 },
                                    { text: 3 },
                                    { text: 4 },
                                    { text: 5 },
                                    { text: "NEXT" }
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <Footer blackFont />
            </div>
        </div>
    )
}

export default Layout;