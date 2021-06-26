export default class LoginService {
    constructor() {
        this.controller = 'api/login'
    }

    async Login(usuario) {
        return fetch(this.controller, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(usuario)
        });
    }

    async Salvar(usuario) {
        return fetch(`${this.controller}/cadastro`, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(usuario)
        });
    }
}