function deepClone(obj)
{
    return {...obj}
}

console.log(deepClone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}))