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

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const history = useHistory();
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const login = async () => {
    let res = await new LoginService().Login({email,senha});
    if(res.ok){
      let data = await res.json()
      localStorage.setItem('token',data.token)
      history.push("/produtos/listagem")
    }else{
      alert('deu ruim')
    }
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
                        value: email,
                        onChange: (e) => { setEmail(e.target.value) }
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
                        value: senha,
                        onChange: (e) => { setSenha(e.target.value) },
                        onKeyDown:(e) => {
                          if(e.key === "Enter")
                            login()
                        }
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={login}>
                      Login
                    </Button>
                    <Button simple color="primary" size="lg">
                      Cadastre-se
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
