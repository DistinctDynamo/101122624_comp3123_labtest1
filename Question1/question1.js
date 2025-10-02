const mixedArray=['PIZZA',10,true,25,false,'Wings']

function lowerCaseWords(array){
    temp = []
    temp2 = []
    for(i=0;i<array.length;i++){
        if(typeof(array[i])=='string'){
            temp.push(array[i])
        }
    }

    for(i=0;i<temp.length;i++){
        word=temp[i]
        temp2.push(word.toLowerCase())
    }

    return temp2
}

console.log(lowerCaseWords(mixedArray))