function strStr(haystack: string, needle: string): number{
    let result: number = -1
    for(let i = 0; i < haystack.length; i++){
        let count: number = 0;
        for(let j = 0; j < needle.length; j++){
            if(needle[j] === haystack[j + i]){
                count += 1
            }
        }
        if(count == needle.length){
            result = i
            break
        }
        else{
            continue
        }
    }
    return result
}

console.log(strStr('mississippi', 'sipp'))