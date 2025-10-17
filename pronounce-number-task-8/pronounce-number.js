function pronounceNumber(value)
{
    let numberlist = {'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'Five',
                      '6':'six','7':'seven','8':'eight','9':'nine','10':'ten',
                      '20':'twenty','30':'thirty','40':'fourty','50':'Fifty','60':'sixty',
                      '70':'seventy','80':'eighty','90':'ninety','100':'hundred','1000':'thousand'}
    let pronounce = ''
    let tempkey = '1'
    let fflag = 1
    let andflag = 1
    let string_val = String(value)
    let i = 0
    while(i<string_val.length)
    {
        console.log(string_val)
        if(tempkey='1')  
        {
            for(j=0;j<string_val.slice(i).length-1;j++)
            {
                tempkey+=0
            }
            console.log(tempkey)
        }
        if(string_val.slice(i).length>3)
        {
            //the count variable extract the number like 23 in 23456 to get 23 thousand or somethig like 100 thousand
            let count = tempkey
            let cc = 1
            while(numberlist[tempkey]==undefined&&numberlist[count]==undefined)
            {
                count = tempkey.slice(0,-cc)
                cc++
                console.log('count',count)
            }
            console.log('final count',count)
            //we count and mod to get the 23 and call this funtion to get the prnounciation and cut and
            pronounce+=' '+pronounceNumber((Number(string_val)-(Number(string_val)%Number(count)))/count).slice(5)+' '+numberlist[count]
            i+=cc
            continue
        }
        else if(string_val.slice(i).length>2)
        {
            //tempkeyt should have the corresponding 1xxx base value 700 - 100,
            pronounce += ' '+numberlist[string_val[i]]+' '+numberlist[tempkey]
            // console.log(numberlist[string_val[i]])
        }
        else
        {
            if(andflag&&string_val.length>2)
            {
                pronounce+=' and'
                andflag = 0
                //to get 723 seven hundred 'and' twenty three, andflag limits it's execution
            }
            //string_val.slice(i) cuts the range 723->23->3 we can use it to mod and minus 3
            // console.log('tkey',tempkey)
            // console.log('strval-',Number(string_val.slice(i))-Number(string_val.slice(i))%Number(tempkey))
            pronounce+=' '+numberlist[Number(string_val.slice(i))-Number(string_val.slice(i))%Number(tempkey)]
            if(Number(string_val.slice(i))%Number(tempkey)==0)
            {
                i+=2
                continue
            }
        }
        i++
    }
    return pronounce
}

console.log(pronounceNumber(723))
console.log(pronounceNumber(2359))