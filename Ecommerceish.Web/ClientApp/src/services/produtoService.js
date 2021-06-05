export default class ProdutoService {
    constructor() {
        var url = window.location;
        this.rota = `${url.protocol}//${url.host}/api/produto`
    }

    async AdicionarProduto(produto) {
        debugger
        return fetch(this.rota, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(produto)
        });
    }
}