import Ajv from "ajv"
import { expect, use } from "chai"
import ApplyAjvFormat from "ajv-formats"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

const ajvInstance = Ajv()

ApplyAjvFormat(ajvInstance)

const jsonSchemaFormat = chaiJsonSchemaAjv.create({
    ajv : ajvInstance
})

use(jsonSchemaFormat)

export default expect