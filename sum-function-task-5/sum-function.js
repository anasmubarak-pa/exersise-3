function sumFunction(...args)
{
    return args.reduce((a,b)=>a+b)
}

console.log(sumFunction(1,2,3,4))