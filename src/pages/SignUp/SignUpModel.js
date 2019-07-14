import { observable, computed, configure, action, decorate } from 'mobx'

configure({ enforceActions: 'observed' })

export class SignUpModel {
    
    username = undefined;
    email = undefined;
    password = undefined;
    password2 = undefined;

    set(item, value) {
        this[item] = value;
    }

}

decorate(SignUpModel, {
    username: observable,
    email: observable,
    password: observable,
    password2: observable,

    set: action
})

export default new SignUpModel()
