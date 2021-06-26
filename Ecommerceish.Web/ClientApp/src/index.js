import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProdutosCadastroPage from "views/crud/produtos/ProdutosCadastroPage.js";
import ProdutosListagemPage from "views/crud/produtos/ProdutosListagemPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/produtos/cadastro" component={ProdutosCadastroPage} />
      <Route path="/produtos/listagem" component={ProdutosListagemPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
