function insertArray(target,insertArray,index)
{
    return target.slice(0,index).concat(insertArray).concat(target.slice(index,index.length))
}

console.log(insertArray([1, 2, 3], [4, 5, 6], 2))