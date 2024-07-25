function fibs(num: number): Array<number>{
    let array = [0, 1]
    if(num == 1){
        return [0]
    }
    if(num == 2){
        return array
    }
    for(let i = 2; i < num; i++){
        array[i] = array[i - 1] + array [i - 2]
    }
    return array
}

function fibsRec(num :number): Array<number>{
    let array: Array<number> = [0, 1]
    if(num == 1){
        return [0]
    }
    if(num == 2){
        return array
    }
    
    function generateRec(index: number): Array<number>{
        if(index === num){
            return array
        }
        array.push(array[index - 1] + array[index - 2])
        return generateRec(index + 1)
    }
    return generateRec(2)
}

console.log(fibsRec(5))