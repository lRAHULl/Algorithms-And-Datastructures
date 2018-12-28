class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return null; // BSTs cannot have duplicates;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    else if (this.root.value === value) return this.root;
    else {
      let current = this.root;
      while (true) {
        if (value === current.value) {
          return current;
        } else if (value < current.value) {
          if (!current.left) return false;
          else current = current.left;
        } else if (value > current.value) {
          if (!current.right) return false;
          else current = current.right;
        }
      }
    }
  }
  DFSInOrder() {
    let data = [];
    let current = this.root;
    traverse(current);

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder()); // [ 3, 6, 8, 10, 15, 20 ]