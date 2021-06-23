export default class ProdutoService {
    constructor() {
        var url = window.location;
        this.rota = `${url.protocol}//${url.host}/api/produto`
    }

    async AdicionarProduto(produto) {
        return fetch(this.rota, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(produto)
        })
    }

    async ListarProdutos() {
        return fetch(this.rota, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    async ApagarProduto(id) {
        return fetch(`${this.rota}/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    async AtualizarProduto(produto) {
        return fetch(`${this.rota}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(produto)
        })
    }

    async ObterProduto(id) {
        return fetch(`${this.rota}/${id}`, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}