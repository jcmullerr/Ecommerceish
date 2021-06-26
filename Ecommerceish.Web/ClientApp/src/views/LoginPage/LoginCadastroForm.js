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
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bgmakeup.jpg";

import { useHistory } from "react-router-dom";
import LoginService from "services/loginService";
import People from "@material-ui/icons/People";

const useStyles = makeStyles(styles);

const LoginCadastroForm = (props) => {
  const classes = useStyles();

  const [state,setState] = React.useState({
    nome : "",
    email : "",
    senha : "",
    senhaConfirmada : ""
  })
  const history = useHistory();

  const salvar = async () => {
    let res = await new LoginService().Salvar({email : state.email,senha : state.senha,nome : state.nome});
    if(res.ok)
      props.setExibirCadastro(false)
    else
      alert("Não foi possivel cadastrar o usuario")
  }
  return (
    <div>
      <CardHeader color="primary" className={classes.cardHeader}>
        <h4>Cadastrar Usuário</h4>
      </CardHeader>
      <CardBody>
        <CustomInput
          labelText="Nome..."
          id="nome"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            endAdornment: (
              <InputAdornment position="end">
                <People />
              </InputAdornment>
            ),
            value: state.nome,
            onChange: (e) => { setState({...state, nome:e.target.value}) }
          }}
        />
        <CustomInput
          labelText="Email..."
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "email",
            endAdornment: (
              <InputAdornment position="end">
                <Email className={classes.inputIconsColor} />
              </InputAdornment>
            ),
            value: state.email,
            onChange: (e) => { setState({...state, email:e.target.value}) }
          }}
        />
        <CustomInput
          labelText="Senha"
          id="pass"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>
                  lock_outline
                </Icon>
              </InputAdornment>
            ),
            autoComplete: "off",
            value: state.senha,
            onChange: (e) => { setState({...state, senha:e.target.value}) },
            onKeyDown: (e) => {
              if (e.key === "Enter")
                salvar()
            }
          }}
        />
        <CustomInput
          labelText="Confirmação de senha"
          id="pass"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>
                  lock_outline
                </Icon>
              </InputAdornment>
            ),
            autoComplete: "off",
            value: state.senhaConfirmada,
            onChange: (e) => { setState({...state, senhaConfirmada:e.target.value}) },
            onKeyDown: (e) => {
              if (e.key === "Enter")
                salvar()
            }
          }}
        />
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button simple color="primary" size="lg" onClick={salvar}>
          Salvar
        </Button>
      </CardFooter>
    </div>
  )
}

export default LoginCadastroForm;
