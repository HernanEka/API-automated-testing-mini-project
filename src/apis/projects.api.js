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

export async function getSingleProjectCostingItem(id) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcaitem/'+id, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getPageProjectCostingItem(size, number) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcaitem/' + size + "/" + number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getProjectCostingItemByIDanditemNumber(id, number) {
    
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcaitem/byid/' + id + "/" + number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res

}

export async function getProjectCostingItembyProjectCostingID(id,size,number) {
    
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcaitem/byidpcid/'+id+'/' + size + '/' + number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res

}

export async function getAllProjectCostingSubitem() {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcasubitem', {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getAllProjectCostingSubitemByPcId(pcid) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcasubitem/all/'+pcid, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getPageProjectCostingSubitemByPcId(pcid, size, number) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcasubitem/all/'+pcid+'/'+size+'/'+number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getSpesificProjectCostingSubitem(pcid, itemNumber, subItemName) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcasubitem/'+pcid+'/'+itemNumber+'/'+subItemName, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getPageProjectCostingSubitem(size, number) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pcasubitem/'+size+'/'+number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getAllProjectCostingDocument() {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pca-supportdoc', {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getProjectCostingDocumentByAttachmentId(id) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pca-supportdoc/9999/'+id, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}

export async function getPageProjectCostingDocument(size,number) {
    const auth = await authAutoLogin()

    const access_token = await auth.data.access_token

    const res = await axiosInstance.get('/project/pca-supportdoc/'+size+'/'+number, {

        headers: {
            'X-TenantID': 9999,
            Authorization: `Bearer ${access_token}`
        }

    })

    return res
}