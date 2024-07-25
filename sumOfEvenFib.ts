function sumOfEvenFib(): number {
    let first = 1;
    let second = 2;
    let sum = 0

    while(second < 4000000){
        if(first % 2 == 0){
            sum += first
        }
        let next = first + second
        first = second
        second = next
    }
    return sum
}

console.log(sumOfEvenFib())