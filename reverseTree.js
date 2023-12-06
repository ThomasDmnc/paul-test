class Node {
    constructor(start, right, left){
        this.start = (start === undefined ? 0 : start);
        this.right = (right === undefined ? null : right);
        this.left = (left === undefined ? null : left);
    }

    reverse() {
        const oldRight = this.right;
        const oldLeft = this.left;
        this.right = oldLeft;
        this.left = oldRight;
        return this
    }
}

const inputNode = new Node('A', new Node('B','E','D'), new Node('C','F', null))

