import axiosInstance from "../libs/axiosInstance.js"
import { authAutoLogin } from "./auth.api.js"


export async function getAllProjectCosting() {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pca', {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}