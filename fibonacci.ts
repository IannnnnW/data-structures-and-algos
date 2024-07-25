function fibnoacci(num :number) :number{
    if(num < 2){
        return num;
    }
    return fibnoacci(num - 1) + fibnoacci(num - 2)
}