class Node {
    constructor(start, right, left){
        this.start = (start === undefined ? 0 : start);
        this.right = (right === undefined ? null : right);
        this.left = (left === undefined ? null : left);
    }
}

function reverseNode(node) {
    if (node == null) {
        return null
    }
        reverseNode(node.left);
        reverseNode(node.right);
        
        let holdLeft = node.left;
        node.left = node.right;
        node.right = holdLeft;
    return node;
}

function reverseTree(tree) {
    return reverseNode(tree)
}

const inputNode = new Node('A', new Node('B','E','D'), new Node('C','F', null))
reverseTree(inputNode);

console.log(inputNode)
console.log(reverseTree(inputNode))
