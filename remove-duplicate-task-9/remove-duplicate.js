function removeDuplicate(word)
{
    let letter_list = new Set(word).values()
    return [...letter_list].reduce((a,b)=>a+b)
}

console.log(removeDuplicate('apple'))