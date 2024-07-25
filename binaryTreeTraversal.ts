class TreeNode<T> {
    value: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null

    constructor(value: T){
        this.value = value
        this.left = null
        this.right = null
    }
}
// Depth First 
// Preorder Traversal

function PreOrderTraversal(root: TreeNode<string>){
    if(root == null){
        return
    }

    console.log(root.value)

    PreOrderTraversal(root.left!)
    PreOrderTraversal(root.right!)
}

let treeRoot = new TreeNode('F')
let first = treeRoot.left = new TreeNode('D')
let second = treeRoot.right = new TreeNode('J')

let third = first.left = new TreeNode('B')
let forth = first.right = new TreeNode('E')

let fifth = second.left = new TreeNode('G')
let sixth = second.right = new TreeNode('K')

let seventh = third.left = new TreeNode('A')
let eigth = third.right = new TreeNode('C')

let ninth = fifth.left = new TreeNode('I')
ninth.right = new TreeNode('H')


console.log(PreOrderTraversal(treeRoot))

