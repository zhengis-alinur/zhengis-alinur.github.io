import { observable, action, makeObservable } from 'mobx';

class AppStore {
    isAuth = false;
    userName = '';
    token = '';
    constructor() {
        sessionStorage.getItem("isAuth") ? this.isAuth = true : this.isAuth = false;
        sessionStorage.getItem("userName") ? this.userName = sessionStorage.getItem("userName") : this.userName = '';
        sessionStorage.getItem("token") ? this.token = sessionStorage.getItem("token") : this.token = '';
        makeObservable(this, {
            userName: observable,
            token: observable,
            isAuth: observable,
        });
    }
    setAuth(value) {
        this.isAuth = value;
    }
    setUserName(value) {
        this.userName = value;
    }
    setToken(value) {
        this.token = value;
    }
}

export default new AppStore();
