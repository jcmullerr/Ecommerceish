export default class LoginService {
    constructor() {
        this.controller = 'api/login'
    }

    async Login(usuario) {
        debugger;
        return fetch(this.controller, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(usuario)
        });
    }
}