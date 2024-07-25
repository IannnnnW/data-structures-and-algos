function binarySearch(sortedArray: Array<number>, searchTerm: number){
    if(sortedArray.length == 0){
        return -1
    }
    let mid = Math.floor(sortedArray.length / 2)
    if(sortedArray[mid] == searchTerm){
        return searchTerm
    }
    if(searchTerm > sortedArray[mid]){
        return binarySearch(sortedArray.slice(mid + 1), searchTerm)
    } else{
        return binarySearch(sortedArray.slice(0, mid), searchTerm)
    }
}
console.log(binarySearch([1, 2, 4, 5, 6, 7], 67))