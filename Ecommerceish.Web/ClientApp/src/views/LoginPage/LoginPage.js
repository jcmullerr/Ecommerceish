import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bgmakeup.jpg";

import { useHistory } from "react-router-dom";
import LoginService from "services/loginService";
import LoginForm from "./LoginForm";
import LoginCadastroForm from "./LoginCadastroForm";
import { Check } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [exibirCadastro, setExibirCadastro] = React.useState(false)
  const [erroLogin, setErroLogin] = React.useState(false)
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const getFormulario = () => {
    if (exibirCadastro)
      return (<LoginCadastroForm setExibirCadastro={setExibirCadastro}></LoginCadastroForm>)

    return (<LoginForm setExibirCadastro={setExibirCadastro} setErroLogin={setErroLogin}></LoginForm>)
  }

  const getLoginError = () => {
    if (erroLogin)
      return (
        <SnackbarContent
          message={
            <span>
              <b>ERRO:</b> Credencias inválidas.
            </span>
          }
          close
          color="danger"
          icon={Check}
          onClick={() => setErroLogin(false)}
        />
      )
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="VIP MAKEUP"
        rightLinks={<HeaderLinks />}
        rota="/home"
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  {getFormulario()}
                </form>
              </Card>
              {getLoginError()}
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
