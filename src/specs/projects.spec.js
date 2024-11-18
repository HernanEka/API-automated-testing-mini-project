import expect from "../libs/expect.js"
import { getAllProjectCosting, getPageProjectCosting, getSingleProjectCosting } from "../apis/projects.api.js"

describe('PROJECT API', function () {
    
    describe.only('Project Costing API - /pca', function () {
        
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

        it('Check response status code Get 2 project costing on page 1', async function () {
            
            const res =  await getPageProjectCosting(2,1)

            expect(res.status).to.equal(200)

        })

        it('Check pageNumber to equal 1 when Get 2 project costing on page 1', async function () {
            
            const res =  await getPageProjectCosting(2,1)
            
            expect(res.data.data.pageNumber).to.equal(1)

        })

        it('Check pageSize to equal 2 when Get 2 project costing on page 1', async function () {
            
            const res =  await getPageProjectCosting(2,1)
            
            expect(res.data.data.pageSize).to.equal(2)

        })

    })

})