function isPalindrome(x: number): boolean{
    let stringArray: string = String(x);
    let result: boolean = true
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] === stringArray[stringArray.length - (1 + i)]){
            continue
        } else {
            result = false;
            break;
        }
    }
    return result
}

console.log(isPalindrome(-121))