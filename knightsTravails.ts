
function isValid([x, y]: number[]): boolean{
    return x < 8 && x >= 0 && y < 8 && y >= 0 
}

function possibleMoves([x, y]: number[]): number[][]{
    const moves = [
        [x + 2, y + 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 2, y - 1],
        [x - 1, y - 2],
        [x + 1, y - 2]
    ]
    return moves.filter(move => isValid([move[0], move[1]]))
}

function knightMoves([a, b]: number[], [x, y]: number[]){
    let queue = Array()
    let destination: number[] = [x, y]
    let source = [a, b]
    queue.push([source])
    let result: number[][] | null = null

    while(queue.length){
        let path: number[][] = queue.shift()
        let node: number[] = path[path.length - 1]
        if(node.toString() == destination.toString()){
            result = path
            break
        }
        possibleMoves([node[0], node[1]]).forEach( move => {
            let newPath = [...path]
            newPath.push(move)
            queue.push(newPath)
        })
    }
    return result
}

console.log(knightMoves([0, 0], [1, 1]))