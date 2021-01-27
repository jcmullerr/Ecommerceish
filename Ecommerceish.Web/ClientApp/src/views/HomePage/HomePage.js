import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import homeStyles from "assets/jss/material-kit-react/views/homePage.js";

import image from "assets/img/bgmakeup.jpg";

import Parallax from "components/Parallax/Parallax.js";

import classNames from "classnames";

import ProductCard from "../../components/ProductCard/ProductCard.js"

import { useHistory } from "react-router-dom";


import Paginations from "../../components/Pagination/Pagination.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Button, List, ListItem } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import navStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

const useStyles = makeStyles(styles);
const useStylesImage = makeStyles(imagesStyles);
const useStylesHome = makeStyles(homeStyles);
const useStylesNav = makeStyles(navStyles);

export default function HomePage(props) {
  const history = useHistory();
  const classes = useStyles();
  const imageClasses = useStylesImage();
  const homeClasses = useStylesHome();
  const navClasss = useStylesNav();
  
  const products = [
    {
      nome: "Base Mary Kay",
      descricao: "Rebooc muito louco pra esconder as sardas de quem nao gosta ou até mais",
      imagem: image
    },
    {
      nome: "Base Mary Kay",
      descricao: "Rebooc muito louco pra esconder as sardas de quem nao gosta ou até mais",
      imagem: image
    },
    {
      nome: "Base Mary Kay",
      descricao: "Rebooc muito louco pra esconder as sardas de quem nao gosta ou até mais",
      imagem: image
    },
    {
      nome: "Base Mary Kay",
      descricao: "Rebooc muito louco pra esconder as sardas de quem nao gosta ou até mais",
      imagem: image
    },
    {
      nome: "Base Mary Kay",
      descricao: "Rebooc muito louco pra esconder as sardas de quem nao gosta ou até mais",
      imagem: image
    },
    {
      nome: "Base Mary Kay",
      descricao: "Rebooc muito louco pra esconder as sardas de quem nao gosta ou até mais",
      imagem: image
    },
  ]
  const { ...rest } = props;

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="VIP MAKEUP"
        rightLinks={<HeaderLinks />}
        rota="/login"
        {...rest}
      />
      <div
        className={classes.pageHeader}
      >
        <Parallax small filter image={image}>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
        <Header
              brand="Produtos"
              color="dark"
              leftLinks={
                <List className={navClasss.list}>
                  <ListItem className={navClasss.listItem}>
                    <CustomDropdown
                      buttonText="Categorias"
                      buttonProps={{
                        className: navClasss.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Bases",
                        "Delineadores",
                        "Iluminadores",
                        "Corretivos",
                        "Pó compacto",
                        "Sombras",
                        { divider: true },
                        "Pinceis",
                        "Contornos",
                        "Cilios"
                      ]}
                    />
                  </ListItem>
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
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                        className: navClasss.searchInput
                      }
                    }}
                  />
                  <Button justIcon round color="white">
                    <Search className={navClasss.searchIcon} />
                  </Button>
                </div>
              }
            />
          <div className={homeClasses.container}>
            <GridContainer>
              {
                products.map((e, i) => <ProductCard model={e} key={i} />)
              }
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
  );
}
