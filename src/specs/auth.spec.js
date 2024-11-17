import { authAutoLogin, authLogin } from "../apis/auth.api.js"
import expect from "../libs/expect.js"

describe('AUTH API', function () {

    it('Check response status code', async function () {

        const credential = {

            'username': 'dummy@prosigmaka.com',
            'password': 'dummypsm'

        }

        const res = await authLogin(credential)

        expect(res.status).to.equal(200)

    })

    it('Check if access token exist after authenticate', async function () {

        const res = await authAutoLogin()

        expect(res.data.access_token).to.exist

    })

    it('Check response status code with wrong authenticate credential', async function () {

        const credential = {

            'username': 'hernanda@prosigmaka.com',
            'password': 'dummypsm'

        }

        try {
            const res = await authLogin(credential)
            throw Error
        } catch (error) {
            expect(error?.response?.status).to.equal(401)
            
        }

    })

})