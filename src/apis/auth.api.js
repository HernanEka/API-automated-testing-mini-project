import axiosInstance from "../libs/axiosInstance.js"

export function authLogin(credential) {

    return axiosInstance.post('/auth/auth/login', credential)

}

export function authAutoLogin() {

    const credential = {

        'username': 'dummy@prosigmaka.com',
        'password': 'dummypsm'

    }

    return authLogin(credential)
}
