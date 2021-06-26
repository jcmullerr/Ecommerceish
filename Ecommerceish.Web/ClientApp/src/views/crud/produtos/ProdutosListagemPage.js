import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "assets/img/bgmakeup.jpg";
import ProductCard from "components/ProductCard/ProductCard.js"
import { Dialog, DialogContent, DialogTitle, ListItem } from "@material-ui/core";
import navStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import ProdutosCadastroPage from "./ProdutosCadastroPage";
import ProdutoService from "services/produtoService";
import Layout from "components/Layout/layout.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";

const useStylesNav = makeStyles(navStyles);

export default function ProdutosListagemPage(props) {
  const navClasss = useStylesNav();

  const [state, setState] = useState({
    produtos: [],
    produtosFiltrados: [],
    abrirModal: false,
    modelEdicaoId: null
  })

  useEffect(() => onChangePesquisa(), [state.produtos])

  const onChangePesquisa = (palavra = "") => {
    let produtosFiltrados = state.produtos.filter(x => x.nome.toLocaleLowerCase().includes(palavra.toLocaleLowerCase()))
    setState({ ...state, produtosFiltrados: produtosFiltrados })
  }

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


  const { ...rest } = props;

  useEffect(() => {
    async function fetchData() {
      await carregarProdutos()
    }

    fetchData()
  }, [])

  useEffect(() => {
      carregarProdutos()
  }, [state.abrirModal])

  const setAbrirModal = (abrir) => {
    setState({ ...state, abrirModal: abrir })
  }

  const leftLinks = (
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
  )

  return (
    <div>
      <Dialog open={state.abrirModal} onClose={async () => {
        setState({ ...state, abrirModal: false, modelEdicaoId: null })
      }}>
        <DialogTitle>Produtos</DialogTitle>
        <DialogContent>
          <ProdutosCadastroPage setAbrirModal={setAbrirModal} modelId={state.modelEdicaoId} atualizar={carregarProdutos} />
        </DialogContent>
      </Dialog>

      <Layout pageName="Produtos" setAbrirModal={setAbrirModal} leftLinks={leftLinks} onChangePesquisa={onChangePesquisa}>
        {state.produtosFiltrados.map((e, i) => <ProductCard model={e} key={i} atualizar={carregarProdutos} setModelId={setModelEdicaoId} />)}
      </Layout>
    </div>
  )
}
