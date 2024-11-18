import expect from "../libs/expect.js"
import { getAllProjectCosting, getAllProjectCostingItem, getPageProjectCosting, getPageProjectCostingItem, getProjectCostingItemByIDanditemNumber, getProjectCostingItembyProjectCostingID, getSingleProjectCosting, getSingleProjectCostingItem } from "../apis/projects.api.js"
import { arrayProjectItemSchema, projectCostingItemSchema, singleProjectCostingItemSchema } from "../schemas/project.schema.js"

describe('PROJECT API', function () {

    describe('Project Costing API - /pca', function () {

        it('Check response status code get All project Costing', async function () {

            const res = await getAllProjectCosting()

            expect(res.status).to.equal(200)
        })

        // it.only('Check json schema on Project Costing', async function () {

        //     const res = await getAllProjectCosting()

        //     const allProjectCostingSchema = {

        //     }

        //     console.log(res.data)

        // })

        it('Check response status code Get single project costing', async function () {

            const project = await getAllProjectCosting()

            const firstProject = await project.data.data[0].id

            const res = await getSingleProjectCosting(firstProject)

            expect(res.status).to.equal(200)
        })

        it('Check response status code when Get Single Project Costing with non-existent ID', async function () {

            try {

                const res = await getSingleProjectCosting(0)

                throw Error

            } catch (error) {

                expect(error?.response?.status).to.equal(400)

            }

        })

        it('Check response status code Get 2 project costing on page 1', async function () {

            const res = await getPageProjectCosting(2, 1)

            expect(res.status).to.equal(200)

        })

        it('Check pageNumber to equal 1 when Get 2 project costing on page 1', async function () {

            const res = await getPageProjectCosting(2, 1)

            expect(res.data.data.pageNumber).to.equal(1)

        })

        it('Check pageSize to equal 2 when Get 2 project costing on page 1', async function () {

            const res = await getPageProjectCosting(2, 1)

            expect(res.data.data.pageSize).to.equal(2)

        })

    })

    describe('Project Costing Item API - /pcaitem', function () {

        it('Check response status code get ALL project costing item', async function () {

            const res = await getAllProjectCostingItem()

            expect(res.status).to.equal(200)

        })

        it('Check json schema of project costing item', async function () {

            const res = await getAllProjectCostingItem()

            expect(res.data).to.be.jsonSchema(projectCostingItemSchema)

        })

        it.skip('Check response status code get Single project costing item by ID', async function () {
            
            const allProject = await getAllProjectCostingItem()

            const firstProject = await allProject.data.data[0].projectCostingId

            const res = await getSingleProjectCostingItem(firstProject)

            expect(res.status).to.equal(200)

        })

        it('Check pageSize to equal 3 when get 3 Project Costing Item on page number 1', async function () {
            
            const res = await getPageProjectCostingItem(3,1)

            expect(res.data.data.pageSize).to.equal(3)

        })

        it('Check pageNumber to equal 1 get 3 Project Costing Item on page number 1', async function () {
            
            const res = await getPageProjectCostingItem(3,1)

            expect(res.data.data.pageNumber).to.equal(1)

        })

        it('Check total items to equal 3 when get 3 Project Costing Item on page number 1', async function () {
            
            const res = await getPageProjectCostingItem(3,1)

            expect(res.data.data.items.length).to.equal(3)

        })

        it('Check json Schema of Project Costing Items when get 3 Project Costing Item on page number 1', async function () {
            
            const res = await getPageProjectCostingItem(10,1)

            expect(res.data.data.items).to.be.jsonSchema(arrayProjectItemSchema)

        })

        it('Check response status code when get Project Costing Item with projectCosting ID 19 and itemNumber 1', async function () {
            
            const res = await getProjectCostingItemByIDanditemNumber(19,1)

            expect(res.status).to.be.equal(200)

        })

        it('Check projectCostingID when get Project Costing Item with projectCosting ID 19 and itemNumber 1', async function () {
            
            const res = await getProjectCostingItemByIDanditemNumber(19,1)

            expect(res.data.data.projectCostingId).to.equal(19)

        })

        it('Check itemNumber when get Project Costing Item with projectCosting ID 19 and itemNumber 1', async function () {
            
            const res = await getProjectCostingItemByIDanditemNumber(19,1)

            expect(res.data.data.itemNumber).to.equal(1)

        })

        it('Check jsonSchema when get Project Costing Item with projectCosting ID 19 and itemNumber 1', async function () {
            
            const res = await getProjectCostingItemByIDanditemNumber(19,1)

            expect(res.data.data).to.be.jsonSchema(singleProjectCostingItemSchema)

        })

        it('Check response status when get all Project Costing Item with projectCostingId 19', async function () {
            
            const res = await getProjectCostingItembyProjectCostingID(19,2,1)

            expect(res.status).to.be.equal(200)

        })

        it('Check projectCostingId of every items to equal 19 when get all Project Costing Item with projectCostingId 19', async function () {
            
            const res = await getProjectCostingItembyProjectCostingID(19,2,1)

            res.data.data.items.forEach(item => {
                expect(item).to.have.property('projectCostingId', 19)
            });

        })

    })


})