function deepClone(obj)
{
    return structuredClone(obj)
}

console.log(deepClone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}))