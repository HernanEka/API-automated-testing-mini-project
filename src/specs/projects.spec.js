import { expect } from "chai"
import { getAllProjectCosting } from "../apis/projects.api.js"

describe('PROJECT API', function () {
    
    describe.only('Project Costing API - /pca', function () {
        
        it('Get project all costing', async function () {
            
            const res = await getAllProjectCosting()

            expect(res.status).to.equal(200)
        })

        it('Check json schema', async function () {
            
            

        })

    })

})