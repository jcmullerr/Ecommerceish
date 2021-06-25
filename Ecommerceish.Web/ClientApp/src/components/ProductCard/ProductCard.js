import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import homeStyles from "assets/jss/material-kit-react/views/homePage.js";

import { useHistory } from "react-router-dom";
import ProdutoService from "services/produtoService";

const useStyles = makeStyles(styles);
const useStylesImage = makeStyles(imagesStyles);
const useStylesHome = makeStyles(homeStyles);

export default function ProductCard(props) {
  const classes = useStyles();
  const imageClasses = useStylesImage();
  const { ...rest } = props;

  const apagarProduto = async () => {
    const res = await new ProdutoService().ApagarProduto(props.model.id)
    if(res.ok)
        await props.atualizar()
  }

  return (
    <GridItem md={3}>
      <Card >
        <form className={classes.form} >
          <CardBody onClick={() => {
            
          }}>
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
            <Button simple color="primary" size="sm" onClick={() => props.setModelId(props.model.id)}>
              Editar
            </Button>
            <Button simple color="danger" size="sm" onClick={async () => await apagarProduto(true)}>
              Excluir
            </Button>
          </CardFooter>
        </form>
      </Card>
    </GridItem>
  )
}