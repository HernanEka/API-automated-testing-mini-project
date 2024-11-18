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

export async function getSingleProjectCosting(id) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pca/' + id, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getPageProjectCosting(size, number) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pca/' + size + '/' + number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}


/// Project Costing Item

export async function getAllProjectCostingItem() {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcaitem', {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}