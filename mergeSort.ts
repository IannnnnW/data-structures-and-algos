function merge(arr1: Array<number>, arr2: Array<number>): Array<number>{
    let result: Array<number> = []
    let i: number = 0
    let j: number = 0

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
        
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }

    return result
}

function mergeSort(unsortedArray: Array<number>): Array<number>{
    if(unsortedArray.length == 1){
        return unsortedArray
    }
    let mid = unsortedArray.length / 2
    let array2: Array<number> = []
    let array1: Array<number>= []

    unsortedArray.forEach((e: number, index: number) =>{
        if(index < mid){
            array1.push(e)
        }
        else{
            array2.push(e)
        }
    })
    
    return merge(mergeSort(array1), mergeSort(array2))
}