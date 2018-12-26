/**
 * Tree Terminology
 * ================
 * 
 * Root -> The Top Node.
 * 
 * Child -> A node directly connected to another node, when moving away from the root.
 * 
 * Parent -> The Converse notion of a child.
 * 
 * Sibling -> The nodes with same parent.
 * 
 * Leaf -> The node with no children.
 * 
 * Edge -> The Connection between one Node and Other.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}