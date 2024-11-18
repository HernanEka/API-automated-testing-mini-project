import expect from "../libs/expect.js"
import { getAllProjectCosting, getAllProjectCostingItem, getPageProjectCosting, getSingleProjectCosting, getSingleProjectCostingItem } from "../apis/projects.api.js"

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

            const projectCostingItemSchema = {

                type: 'object',
                properties: {
                    data: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                projectCostingId: { type: 'number' },
                                contractDateStart: { type: 'string', format: 'date' },
                                contractDateEnd: { type: 'string', format: 'date' },
                                itemNumber: { type: 'number' },
                                itemNumberDsiplay: { type: 'number' },
                                itemName: { type: 'string' },
                                roleDisplay: { type: 'string' },
                                manpowerSolutionOpportunityId: { type: 'number' },
                                note: { type: 'string' },
                                personId: { type: 'number' },
                                salaryGrade: { type: 'number' },
                                cost: { type: 'number' },
                                sellPrice: { type: 'number' },
                                grossProfit: { type: 'number' },
                                grossProfitPercentage: { type: 'number' }
                            }
                        }
                    }
                }

            }

            // console.log(res.data)

            expect(res.data).to.be.jsonSchema(projectCostingItemSchema)

        })

        it('Check response status code get Single project costing item by ID', async function () {
            
            const allProject = await getAllProjectCostingItem()

            const firstProject = await allProject.data.data[0].id

            const res = await getSingleProjectCostingItem(firstProject)

            expect(res.status).to.equal(200)

        })

    })


})