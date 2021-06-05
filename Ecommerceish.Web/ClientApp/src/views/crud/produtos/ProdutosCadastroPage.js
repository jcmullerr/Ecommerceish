import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";
import { Dialog, Hidden, makeStyles } from "@material-ui/core";
import CardBody from "components/Card/CardBody";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CustomInput from "components/CustomInput/CustomInput";
import CardFooter from "components/Card/CardFooter";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";


const useStyles = makeStyles(styles);

export default function ProdutosCadastroPage(props) {

  const { ...rest } = props;
  const classes = useStyles();

  return (
    <>
      <CardBody>
        <CustomInput
          id="regular"
          labelText="Nome produto"
          formControlProps={{
            fullWidth: true
          }}
        />
        <CustomInput
          id="regular"
          labelText="Descrição produto"
          formControlProps={{
            fullWidth: true
          }}
        />
        <CustomInput
          id="regular"
          labelText="Valor Compra"
          formControlProps={{
            fullWidth: true
          }}
        />
        <CustomInput
          id="regular"
          labelText="Percentual lucro"
          formControlProps={{
            fullWidth: true
          }}
        />
      </CardBody>
      <CardFooter>
        <Button simple color="primary" size="lg">
          Salvar
        </Button>
      </CardFooter>
    </>
  );

}