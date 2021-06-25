import React, { useEffect, useState } from "react"
import Button from "components/CustomButtons/Button.js"
import { makeStyles } from "@material-ui/core"
import CardBody from "components/Card/CardBody"
import styles from "assets/jss/material-kit-react/views/loginPage.js"
import CustomInput from "components/CustomInput/CustomInput"
import CardFooter from "components/Card/CardFooter"
import ProdutoService from "services/produtoService"


const useStyles = makeStyles(styles)

export default function ProdutosCadastroPage(props) {

  const { ...rest } = props
  const classes = useStyles()

  const [state, setState] = useState({
    nome: "",
    descricao: "",
    valorCusto: 0.00,
    percentualLucro: 0.00,
    id: null
  })

  const salvar = async () => {
    let res = null

    if (state.id)
      res = await new ProdutoService().AtualizarProduto(state)
    else
      res = await new ProdutoService().AdicionarProduto(state)

    if (res.ok) {
      props.setAbrirModal(false)
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (props.modelId && state) {
        let res = await new ProdutoService().ObterProduto(props.modelId)
        if (res.ok) {
          let produto = await res.json()
          setState({
            nome: produto.nome,
            descricao: produto.descricao,
            valorCusto: produto.valorCusto,
            percentualLucro: produto.percentualLucro,
            id : produto.id
          })
        }
      }
    }

    fetchData()
  }, [props.modelId])

  return (
    <>
      <CardBody>
        <CustomInput
          id="regular"
          labelText="Nome produto"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => { setState({ ...state, nome: e.target.value }) },
            value: state.nome
          }}
        />
        <CustomInput
          id="regular"
          labelText="Descrição produto"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => { setState({ ...state, descricao: e.target.value }) },
            value: state.descricao
          }}
        />
        <CustomInput
          id="regular"
          labelText="Valor Compra"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => { setState({ ...state, valorCusto: e.target.value }) },
            value: state.valorCusto
          }}
        />
        <CustomInput
          id="regular"
          labelText="Percentual lucro"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => { setState({ ...state, percentualLucro: e.target.value }) },
            value: state.percentualLucro
          }}
        />
      </CardBody>
      <CardFooter>
        <Button simple color="primary" size="lg" onClick={async () => await salvar()}>
          Salvar
        </Button>
      </CardFooter>
    </>
  )

}