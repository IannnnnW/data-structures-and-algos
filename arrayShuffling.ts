function shuffle(array: Array<number>){
    let n: number = array.length, t: number, i:number
    while(n){
        i = Math.random() * n-- | 0
        t = array[n]
        array[n] = array[i]
        array[i] = t
    }
    return array
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))