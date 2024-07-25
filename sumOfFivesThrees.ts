function sumoFFivesThrees(num :number) :number{
    let sum :number = 0

    if( (num - 1) == 4){
        return 3
    }
    
    if( (num - 1) % 3 == 0 || (num - 1) % 5 == 0){
        sum += (num - 1)
    }
    return sum + sumoFFivesThrees(num - 1)

}
