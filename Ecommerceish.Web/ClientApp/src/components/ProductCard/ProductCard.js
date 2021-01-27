import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import homeStyles from "assets/jss/material-kit-react/views/homePage.js";

import image from "assets/img/bgmakeup.jpg";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);
const useStylesImage = makeStyles(imagesStyles);
const useStylesHome = makeStyles(homeStyles);

export default function ProductCard(props) {
  const [querComprar, setquerComprar] = React.useState(false);
  const history = useHistory();
  const classes = useStyles();
  const imageClasses = useStylesImage();
  const homeClasses = useStylesHome();
  const { ...rest } = props;
  return (
    <GridItem md={3}>
      <Card>
        <form className={classes.form} onClick={() => {
          if (!querComprar)
            alert("Vai ir pro produto")
        }}>
          <CardBody>
            <h3>{props.model.nome}</h3>
            <GridItem>
              <img
                src={props.model.imagem}
                alt="..."
                className={imageClasses.imgRounded + " " + imageClasses.imgCard}
              />
            </GridItem>
            <p>{props.model.descricao}</p>
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button simple color="primary" size="sm" onClick={async () => {
              await setquerComprar(true)
                alert("Quer comprar")
            }}>
              Comprar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </GridItem>
  )
}