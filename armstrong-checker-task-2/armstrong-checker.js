function armstrongChecker(value)
{
    let sum = 0
    for(num of String(value))
    {
        sum+= Math.pow(Number(num),(String(value).length))
    }
    return sum==value
}

console.log(armstrongChecker(153))