function arraySum(array_list)
{
    console.log(array_list)
    let sum = 0
    for(let item of array_list)
    {
        console.log(item)
        console.log(Number(item.reduce(((a,b)=>a+b),'')))
        sum+=Number(item.reduce(((a,b)=>a+b),''))
    }
    return sum
}

console.log(arraySum([[1,2,3], [0, 7]]))