
import API from './api'

import SignUpModel from '../pages/SignUp/SignUpModel'

export function signUp() {
    API.sendData('/users/register',
        {
            username: SignUpModel.username,
            email: SignUpModel.email,
            password: SignUpModel.password,
            password2: SignUpModel.password2
        }
    )
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}