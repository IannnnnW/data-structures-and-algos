export class ListNode<T>{
    value: T
    nextNode: ListNode<T> | null

    constructor(value: T){
        this.value = value
        this.nextNode = null
    }
}

class LinkedList{
    head: ListNode<any> | null
    constructor(){
        this.head = null
    }

    //Add nodes to the end of the linked list
    append(value: any): void{
        let newNode = new ListNode(value)
        if(this.head == null){
            this.head = newNode
        } else {
            let temp = this.head
            while(temp.nextNode != null){
                temp = temp.nextNode
            }
            temp.nextNode = newNode
        }
    }

    // Add nodes to the start of the linked list
    prepend(value: any): void{
        let temp = this.head
        let newNode = new ListNode(value)
        newNode.nextNode = temp
        this.head = newNode
    }

    // find the number of nodes in the linked list.
    size(): number{
        let count = 0;
        let temp = this.head
        while(temp != null){
            count += 1
            temp = temp.nextNode
        }
        return count
    }

    // return the first node
    listHead(): any{
        return this.head?.value
    }

    //return the last node
    tail(): any{
        let temp = this.head
        while(temp?.nextNode != null){
            temp = temp.nextNode
        }
        return temp?.value
    }

    // find the element at a given index in the linked list
    at(index: number): any{
        let iter = 0
        let temp = this.head
        while(iter != index){
            temp = temp?.nextNode!
            iter += 1
        }
        return temp?.value
    }

    //remove element from the end of the linked list
    pop(): void{
        let temp = this.head
        let secondLastNode: ListNode<any> | null = null
        while(temp?.nextNode != null){
            secondLastNode = temp
            temp = temp.nextNode
        }
        if(secondLastNode != null){
            secondLastNode.nextNode = null
        }

    }

    //find out if the linked list contains a given element
    contains(value: any): boolean{
        let temp = this.head
        let result: boolean = false
        while(temp?.nextNode != null){
            if(temp.value === value){
                result = true
                break
            }
            temp = temp.nextNode
        }
        return result
    }

    // find the position of an element in the linked list, returns null if it doesn't exist.
    find(value: any): any{
        let temp = this.head
        let index = 0
        let result = null
        
        while(temp?.value != null){
            if(temp.value == value){
                result = value
                break;
            } else {
                index += 1
                temp = temp.nextNode
            }
        }

        if(!result){
            return null
        } else {
            return index
        }
    }

    // displays the linked list in a string format eg. ( 5 ) -> ( 4 ) -> null
    toString(): string{
        let temp = this.head
        let string = ``
        while(temp?.value != null){
            string += `( ${temp.value} ) -> `
            temp = temp.nextNode
        }
        string += 'null'
        return string
    }

    //inserts an element at given index in the linked list.
    insertAt(value: any, index: number): void{
        let temp = this.head
        let iterator = 0
        let newNode = new ListNode(value)

        if(index == 0){
            this.prepend(value)
        }
        else {
            while(temp?.nextNode != null){
                if(iterator == index - 1){
                    newNode.nextNode = temp.nextNode
                    temp.nextNode = newNode
                }
                temp = temp.nextNode
                iterator += 1
            }
        }
    }
    
    // removes the element at a given position in the linked list.
    removeAt(index: number): void{
        let iterator = 0
        let temp = this.head

        if( index == this.size() - 1){
            this.pop()
        }

        while(temp?.nextNode != null){
            if(iterator == index - 1){
                temp.nextNode = temp.nextNode.nextNode
                break
            }
            temp = temp.nextNode
            iterator += 1
        }
    }
}

export default LinkedList

let list = new LinkedList()
list.append(4)
list.append(5)
list.prepend(3)
list.prepend(1)
// list.removeAt(3)
// list.pop()
console.log(list.toString())