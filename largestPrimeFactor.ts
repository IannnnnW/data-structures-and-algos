function largestPrimeFactor(num: number){
    let largestPrime = 1

    for(let i = 3; i < (Math.sqrt(num)); i+=2){
        while (num % i === 0) {
            largestPrime = i;
            num = num / i;
        }
    }
    return num;

}
console.log(largestPrimeFactor(600851475143))