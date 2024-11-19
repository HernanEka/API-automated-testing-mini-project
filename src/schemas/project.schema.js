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


export const singleProjectCostingSubItemSchema = {
    type: 'object',
    properties: {
        projectCostingId: { type : 'number' },
        itemNumber: { type : 'number' },
        subItemName: { type : 'string' },
        urut: { type : ['number', 'null'] },
        grade: { type : 'string' },
        unit: { type : ['string', 'null'] },
        unitDisplay: { type : ['string', 'null'] },
        quantity: { type : 'number' },
        period: { type : 'number' },
        periodActual: { type : ['number', 'null'] },
        unitSellPrice: { type : 'number' },
        sellPrice: { type : 'number' },
        sellPriceActual: { type : ['number', 'null'] },
        unitCost: { type : ['number', 'null'] },
        cost: { type : ['number', 'null'] },
        costActual: { type : ['number', 'null'] },
        unitGrossProfit: { type : ['number', 'null'] },
        grossProfit: { type : ['number', 'null'] },
        grossProfitActual: { type : ['number', 'null'] },
        grossProfitPercentage: { type : ['number', 'null'] },
        grossProfitPercentageActual: { type : ['number', 'null'] }
    }

}

export const arrayProjectSubItemSchema = {

    type: 'array',
    items: singleProjectCostingSubItemSchema

}

export const projectCostingSubitemSchema = {

    type: 'object',
    properties: {
        data: arrayProjectSubItemSchema
    }

}
