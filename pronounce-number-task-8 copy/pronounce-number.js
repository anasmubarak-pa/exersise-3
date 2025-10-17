function pronounceNumber(value)
{
    let numberlist = {'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'Five',
                      '6':'six','7':'seven','8':'eight','9':'nine','10':'ten',
                      '20':'twenty','30':'thirty','40':'fourty','50':'Fifty','60':'sixty',
                      '70':'seventy','80':'eighty','90':'ninety','100':'hundred','1000':'thousand','100000':'lakh','10000000':'crore'}
    let pronounce = ''
    let tempkey = '1'
    let fflag = 1
    let andflag = 1
    let string_val = String(value)
    let i = 0
    let tval = value
    while(i<string_val.length)
    {
        if(numberlist[String(value)])
        {
            pronounce+=' '+numberlist[String(value)]
        }   
    }
    return pronounce
}

console.log(pronounceNumber(100))
console.log(pronounceNumber(723))
console.log(pronounceNumber(2359))
console.log(pronounceNumber(99999))
console.log(pronounceNumber(79999))
console.log(pronounceNumber(65789))
console.log(pronounceNumber(50585))
console.log(pronounceNumber(102070))