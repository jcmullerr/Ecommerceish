import React, { useEffect, useState } from "react";
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

import ProductCard from "components/ProductCard/ProductCard.js"

import Button from "components/CustomButtons/Button.js";


import Paginations from "components/Pagination/Pagination.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Dialog, DialogContent, DialogTitle, List, ListItem } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import navStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import ProdutosCadastroPage from "./ProdutosCadastroPage";
import ProdutoService from "services/produtoService";

const useStyles = makeStyles(styles);
const useStylesImage = makeStyles(imagesStyles);
const useStylesHome = makeStyles(homeStyles);
const useStylesNav = makeStyles(navStyles);

export default function ProdutosListagemPage(props) {

  const [state, setState] = useState({
    produtos: [],
    abrirModal: false,
    modelEdicaoId: null
  })

  const carregarProdutos = async () => {

    const res = await new ProdutoService().ListarProdutos()
    if (res.ok) {
      const data = await res.json()
      data.forEach(x => x.imagem = image)
      setState({ ...state, produtos: data })
    }
  }

  const setModelEdicaoId = (modelId) => {
    setState({ ...state, modelEdicaoId: modelId, abrirModal: true })
  }

  const classes = useStyles();
  const homeClasses = useStylesHome();
  const navClasss = useStylesNav();

  const { ...rest } = props;

  useEffect(() => {
    async function fetchData() {
      await carregarProdutos()
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!state.abrirModal)
      carregarProdutos()
  }, [state.abrirModal])

  const setAbrirModal = (abrir) => {
    setState({ ...state, abrirModal: abrir })
  }

  return (
    <div>
      <Dialog open={state.abrirModal} onClose={async () => {
        await carregarProdutos()
        setState({ ...state, abrirModal: false, modelEdicaoId: null })
      }}>
        <DialogTitle>Produtos</DialogTitle>
        <DialogContent>
          <ProdutosCadastroPage setAbrirModal={setAbrirModal} modelId={state.modelEdicaoId} atualizar={carregarProdutos} />
        </DialogContent>
      </Dialog>

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
                  <Button simple onClick={e => setAbrirModal(true)} color="white">
                    Adicionar
                  </Button>
                </ListItem>
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
                    placeholder: "Pesquisar",
                    inputProps: {
                      "aria-label": "Search",
                      className: navClasss.searchInput
                    }
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
              {
                state.produtos.map((e, i) => <ProductCard model={e} key={i} atualizar={carregarProdutos} setModelId={setModelEdicaoId} />)
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
  )
}
