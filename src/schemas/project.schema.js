export const singleProjectCostingItemSchema = {

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

export const arrayProjectItemSchema = {
    type: 'array',
    items: singleProjectCostingItemSchema
}

export const projectCostingItemSchema = {

    type: 'object',
    properties: {
        data: arrayProjectItemSchema
    }

}
