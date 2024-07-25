import LinkedList from "./linkedlist"
class HashMap{
    buckets: Array<LinkedList | null>
    loadfactor: number
    constructor(){
        this.buckets = Array(16)
        this.loadfactor = 0.75 * this.buckets.length
    }

    hash(key: string){
        let hashCode: number = 0
        const primeNumber: number = 31

        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode %= this.buckets.length
        }
        return hashCode;
    }

    set(key: string, value: string | number): void{
        if(this.loadfactor > this.buckets.length){
            this.buckets = [...this.buckets, ...Array(16)]
        }
        if(!this.buckets[this.hash(key)]){
            let list = this.buckets[this.hash(key)] = new LinkedList()
            list.prepend({key, value})
        }
    
        this.buckets[this.hash(key)]?.prepend({key, value})
    }

    get(key: string): string{
        let hashCode = this.hash(key)
        return this.buckets[hashCode]?.head?.value.value
    }

    has(key: string): boolean{
        return this.buckets[this.hash(key)] ? true : false
    }

    remove(key: string): boolean {
       if(this.buckets[this.hash(key)]){
        delete this.buckets[this.hash(key)]
        return true
       }
       return false
    }

    length(): number{
        let result = 0
        for(let bucket in this.buckets){
            if(bucket){
                result += 1
            }
        }
        return result
    }

    clear(): void{
        for(let i = 0; i < this.buckets.length; i++){
            delete this.buckets[i]
        }
    }

    keys(){
        let keysArray = Array()
        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i]?.head?.value.key ? keysArray.push(this.buckets[i]?.head?.value.key) : null
        }
        return keysArray
    }

    values(){
        let valuesArray = Array()
        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i]?.head?.value.value ? valuesArray.push(this.buckets[i]?.head?.value.value) : null
        }
        return valuesArray
    }

    entries(): Array<Array<string>>{
        let entriesArray = Array()
        for(let i = 0; i < this.buckets.length; i++){
            let result = [this.buckets[i]?.head?.value.key, this.buckets[i]?.head?.value.value]
            this.buckets[i]?.head?.value.value ? entriesArray.push(result) : null
        }
        return entriesArray
    }
}

class HashSet{
    buckets: Array<any>
    loadfactor: number
    constructor(){
        this.buckets = Array(16)
        this.loadfactor = 0.75 * this.buckets.length
    }

    hash(key: string){
        let hashCode: number = 0
        const primeNumber: number = 31

        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode %= this.buckets.length
        }
        return hashCode;
    }

    set(key: string): void{
        if(this.loadfactor > this.buckets.length){
            this.buckets = [...this.buckets, ...Array(16)]
        }
    
        this.buckets[this.hash(key)] = key
    }
    
    length(): number{
        let result = 0
        for(let bucket in this.buckets){
            if(bucket){
                result += 1
            }
        }
        return result
    }
    entries(): Array<string>{
        let entriesArray = Array()
        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i] ? entriesArray.push(this.buckets[i]) : null
        }
        return entriesArray
    }

}
const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')

//Trying to overwrite the key 'moon'
test.set('moon', 'gray')

// console.log(test.entries())

//Testing the HashSet
const set = new HashSet()
set.set('millipede')
set.set('cow')
set.set('mosquito')
set.set('bird')
console.log(set.entries())