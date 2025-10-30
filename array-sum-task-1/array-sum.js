function arraySum(array_list)
{
    if(!typeAsserter(array_list,'Array'))
    {
        return 'Invalid argument'
    }
    // console.log(array_list)
    let sum = 0
    for(let item of array_list)
    {
        if(!Array.isArray(item))
        {
            return 'Invalid argument'
        }
        // console.log(item)
        // console.log(Number(item.reduce(((a,b)=>a+b),'')))
        sum+=Number(item.reduce(((a,b)=>a+b),''))
    }
    return isNaN(sum)?'Invalid argument':sum
}

// console.log(arraySum([[1,2,3], [0, 7]]))

function typeAsserter(...typelist)
{
    let i =0
    for(i=0;i<typelist.length;i+=2)
    {
        if(typelist[i+1].indexOf('|')!=-1)
        {
            let tlist = typelist[i+1].split('|')
            if(!(tlist.find((e)=>e==typeof typelist[i])))
            {
                // console.log(tlist)
                return false
            }
        }
        else if(Array.isArray(typelist[i])||typelist[i+1]=='Array')
        {
            if(!Array.isArray(typelist[i])||(typelist[i+1]!=='Array'))
            {
                return false
            }
        }
        else if(typeof typelist[i]!=typelist[i+1])
        {
            return false
        }
    }
    return true
}

function testProgram(callback,inputArray,expectedOutputArray)
{
    function getcopy(element){
        return JSON.parse(JSON.stringify(element))
    }
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(Object.keys(obj1).length!=Object.keys(obj2).length)
      {
        return 'Not Equal'
      }
      for(let key in obj1)
      {
          if(typeof obj1[key]=='object'||typeof obj2[keys[i]]=='object')
          {
              if(typeof obj1[key]!='object'||typeof obj2[keys[i]]!='object')
              {
                  return 'Not Equal'
              }
              else
              {
                  if(checkEqual(obj1[key],obj2[keys[i]])!='Equal')
                  {
                      return 'Not Equal'
                  }
              }
              i++
          }
          else
          {
            if((typeof key=='number'&&isNaN(key)||(typeof obj1[key]=='number')&&isNaN(obj1[key])))
            {
                if((typeof key=='number'||typeof obj1[key]=='number')&&(isNaN(key)&&!(isNaN(keys[i]))||isNaN(obj1[key])&&!isNaN(obj2[keys[i]])))
                {
                    // console.log('nan2')
                    return 'Not Equal'
                }
            }
            else if(key!=keys[i]||obj1[key]!=obj2[keys[i]])
            {
                return 'Not Equal'
            }
            i++
          }
      }
      return 'Equal'
  }
  for(let i = 0;i<inputArray.length;i++)
  {
    if(typeof expectedOutputArray[i]=='object')
    {
        // console.log(i,'obj')
        // console.log(i,...inputArray[i])
      if(checkEqual(callback(...getcopy(inputArray[i])),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
        console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if((typeof callback(...getcopy(inputArray[i]))=='number')&&(isNaN(callback(...getcopy(inputArray[i])))))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
        else if((callback(...getcopy(inputArray[i])))===expectedOutputArray[i])
        {
            console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
        }
        else
        {
            console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
        }
    }   
  }
}

let input1 = [[[1,2,3], [0, 7]]]
let ouput1 = 130
let input2 = [[['Hello'], ['World']]]
let ouput2 = 'Invalid argument'
let input3 = [[['1','2','3'],['0','7']]]
let ouput3 = 130
let input4 = [[['252']]]
let ouput4 = 252
let input5 = [[[2,5,0],[2,5,0]]]
let ouput5 = 500
let input6 = [[0]]
let ouput6 = 'Invalid argument'
let input7 = [[[0,0,7],[0,0,7]]]
let ouput7 = 14
let input8 = ['level']
let ouput8 = 'Invalid argument'
let input9 = [{a:1,b:2}]
let ouput9 = 'Invalid argument'
let input10 = [[10,50,10]]
let ouput10 = 'Invalid argument'
let input11 = [["username@mailid.com","user","mailid",'com']]
let ouput11 = 'Invalid argument'
let input12 = [[[1,1,1,1],[1,1,1,1]]]
let ouput12 = 2222
let input13 = []
let ouput13 = 'Invalid argument'
let input14 = [[[1,3,3],[1,1,7]]]
let ouput14 = 250
let input15 = [[[],[]]]
let ouput15 = 0

testProgram(arraySum,[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,
                    input11,input12,input13,input14,input15],
                    [ouput1,ouput2,ouput3,ouput4,ouput5,ouput6,ouput7,ouput8,ouput9,ouput10,
                    ouput11,ouput12,ouput13,ouput14,ouput15])