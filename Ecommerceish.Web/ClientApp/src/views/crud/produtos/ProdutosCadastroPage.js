import React, { useState } from "react";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core";
import CardBody from "components/Card/CardBody";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CustomInput from "components/CustomInput/CustomInput";
import CardFooter from "components/Card/CardFooter";
import ProdutoService from "services/produtoService";


const useStyles = makeStyles(styles);

export default function ProdutosCadastroPage(props) {

  const { ...rest } = props;
  const classes = useStyles();

  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [valorCusto, setValorCusto] = useState(0);
  const [percentualLucro, setPercentualLucro] = useState(0);


  const salvar = async () => {
    let produto = {
      nome : nomeProduto,
      descricao : descricaoProduto,
      valorCusto : valorCusto,
      percentualLucro : percentualLucro
    }

    const res = await new ProdutoService().AdicionarProduto(produto);
    if(res.ok)
      props.setAbrirModal(false);
  }

  return (
    <>
      <CardBody>
        <CustomInput
          id="regular"
          labelText="Nome produto"
          formControlProps={{
            fullWidth: true
          }}
          value={nomeProduto}
          inputProps={{
            onChange: (e) => { setNomeProduto(e.target.value) }
          }}
        />
        <CustomInput
          id="regular"
          labelText="Descrição produto"
          formControlProps={{
            fullWidth: true
          }}
          value={descricaoProduto}
          inputProps={{
            onChange: (e) => { setDescricaoProduto(e.target.value) }
          }}
        />
        <CustomInput
          id="regular"
          labelText="Valor Compra"
          formControlProps={{
            fullWidth: true
          }}
          value={valorCusto}
          inputProps={{
            onChange: (e) => { setValorCusto(e.target.value) }
          }}
        />
        <CustomInput
          id="regular"
          labelText="Percentual lucro"
          formControlProps={{
            fullWidth: true
          }}
          value={percentualLucro}
          inputProps={{
            onChange: (e) => { setPercentualLucro(e.target.value) }
          }}
        />
      </CardBody>
      <CardFooter>
        <Button simple color="primary" size="lg" onClick={salvar}>
          Salvar
        </Button>
      </CardFooter>
    </>
  );

}