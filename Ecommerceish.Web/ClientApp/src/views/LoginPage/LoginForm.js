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

const useStyles = makeStyles(styles);

const LoginForm = (props) => {
  const classes = useStyles();

  const [state,setState] = React.useState({
    email : "",
    senha : ""
  })
  const history = useHistory();

  const login = async () => {
    let res = await new LoginService().Login({email : state.email,senha : state.senha});
    if(res.ok){
      let data = await res.json()
      localStorage.setItem('token',data.token)
      history.push("/produtos/listagem")
      return
    }

    props.setErroLogin(true)
  }
  return (
    <div>
      <CardHeader color="primary" className={classes.cardHeader}>
        <h4>Login</h4>
      </CardHeader>
      <CardBody>
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
                login()
            }
          }}
        />
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button simple color="primary" size="lg" onClick={login}>
          Login
        </Button>
        <Button simple color="primary" size="lg" onClick={() => props.setExibirCadastro(true)}>
          Cadastre-se
        </Button>
      </CardFooter>
    </div>
  )
}

export default LoginForm;
