import { cursorTo } from "readline"

class TreeNode{
    data: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(data: number){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    array: Array<number>
    root: TreeNode | null
    constructor(array: Array<number>){
        this.array = array
        this.root = this.buildTree(this.array)
    }

    buildTree(array: Array<number>){
        let end: number = array.length - 1
        let mid: number = Math.floor((0 + end) / 2)

        if(0 > end){
            return null
        }

        let node = new TreeNode(array[mid])
        node.left = this.buildTree(array.slice(0, mid))
        node.right = this.buildTree(array.slice(mid + 1, end + 1))

        return node
    }

    insert(value: number){
        let root = this.root

        while(root?.left || root?.right){
            if(value < root.data ){
                root = root.left
            } else {
                root = root.right
            }
        }
        value < root?.data! ? root!.left = new TreeNode(value) : root!.right = new TreeNode(value)
    }
    
    deleteItem(value: number){
        let parent: TreeNode | null = null
        let node = this.root

        while(node && node.data !== value){
            parent = node
            if(value < node.data){
                node = node.left
            } else {
                node = node.right
            }
        }

        //Case 1: Deleting a leaf Node
        if(!node?.left && !node?.right){
            if(parent?.left?.data === value){
                parent.left = null
            } else {
                parent!.right = null
            }
        }

        //Case 2: Deleteing a Node with atmost one-child
        if(node?.data == value && !node.left){
            node.data = node.right?.data!
            node.right = null

        } else if(node?.data == value && !node.right){
            node.data = node.left?.data!
            node.left = null
        }

        //Case 3: Deleting a Node with both children
        if(node?.left && node.right){
            let successorParent = node;
            let successor = node.right;
            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }

            node.data = successor.data;

            if (successorParent.left === successor) {
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }
        }
    }

    findValue(value: number){
        let root = this.root
        let result: TreeNode | null = null

        while(root?.left || root?.right){
            if(value == root?.data){
                result = root
                break
            }
            if(value < root.data ){
                root = root.left
            } else {
                root = root.right
            }
            if(value == root?.data){
                result = root
                break
            }
        }
        return result
    }

    levelOrder(callback?: (result: number[]) => any): number[]{
        let processor: Array<TreeNode> = []
        let current: TreeNode
        let result: Array<number> = []
        let root = this.root
        processor.push(root!)
        let i = 0;
        while(i < this.array.length){
            current = processor[i]
            result.push(current?.data)
            if(current?.left){
                processor.push(current.left)
            }
            if(current?.right){
                processor.push(current.right)
            }
            i += 1
        }

        return callback ? callback(result) : result
    }

    inOrder(callback?: (result: number[]) => any): number[]{
        let stack: TreeNode[] = []
        let result: number[] = []
        let root: TreeNode | null = this.root

        while(root || stack.length > 0){
            while(root){
                stack.push(root)
                root = root.left
            }
            let current = stack.pop()
            result.push(current?.data!)
            root = current?.right!
        }
        return callback ? callback(result) : result
    }

    preOrder(callback?: (result: number[]) => any): number[]{
        let stack: TreeNode[] = []
        let result: number[] = []
        let root: TreeNode | null = this.root
        while(root || stack.length > 0){
            while(root){
                stack.push(root)
                result.push(root.data)
                root = root.left
            }
            let current = stack.pop()
            root = current?.right!
        }
        return callback ? callback(result) : result
    }

    postOrder(callback?: (result: number[])=>any): number[]{
        let stack: TreeNode[] = []
        let result: number[] = []
        let root: TreeNode | null = this.root
        let lastVisited: TreeNode | null = null
        while(root || stack.length > 0){
            while(root){
                stack.push(root)
                root = root.left
            }
            let peek = stack[stack.length - 1]

            if(peek.right && lastVisited !== peek.right){
                root = peek.right
            } else {
                stack.pop()
                result.push(peek.data)
                lastVisited = peek
                root = null
            }
        }
        return callback ? callback(result) : result
    }

    height(node: number): number{
        let heightLeft: number = 0
        let heightRight: number = 0
        let needle = this.findValue(node)
        while(needle?.right){
            heightRight += 1
            needle = needle.right
        }
        needle = this.findValue(node)
        while(needle?.left){
            heightLeft += 1
            needle = needle.left
        }
        return heightLeft > heightRight ? heightLeft : heightRight
    }

    depth(node: number):number{
        let root = this.root
        let depth = 0
        while(root?.left || root?.right){
            if(root.data < node){
                depth += 1
                root = root.right
            }
            if(root?.data! > node){
                depth += 1
                root = root?.left!
            }
            if(root?.data === node){
                break
            }
        }
        return depth
    }

    isBalanced(): boolean{
        let isBalanced: boolean = false

        this.array.forEach(ele => {
            let node = this.findValue(ele)
            if(this.height(node?.left?.data!) - this.height(node?.right?.data!) <= Math.abs(1)){
                isBalanced = true
            }
        })

        return isBalanced
    }
}
function prettyPrint(node: TreeNode | null, prefix: string = "", isLeft: boolean = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const binaryTree = new Tree([7, 6, 5, 4, 3, 2, 1])
prettyPrint(binaryTree.root)
console.log(binaryTree.isBalanced())
