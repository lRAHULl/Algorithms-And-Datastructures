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

/**
 * Time Complexity
 * ===============
 *
 * Insertion(Best & Average) => O(log N)
 *
 * Insertion(Worst) => O(N)
 *
 * Searching(Best & Average) => O(log N)
 *
 * Searching(Worst) => O(N)
 *
 */
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
// console.log(tree.insert(16)); // null
tree.insert(3);
// console.log(tree.root.left.value); // 5
// console.log(tree.root.left.left.value); // 2
// console.log(tree.root.left.right.value); // 7
// console.log(tree.root.right.value); // 13
// console.log(tree.root.right.left.value); // 11
// console.log(tree.root.right.right.value); // 16
// console.log(tree.root.left.left.right.value); // 3
console.log(tree.find(5)); // true
// console.log(tree.find(2)); // true
// console.log(tree.find(7)); // true
// console.log(tree.find(13)); // true
// console.log(tree.find(11)); // true
// console.log(tree.find(16)); // true
// console.log(tree.find(3)); // true
// console.log(tree.find(10)); // true
// console.log(tree.find(0)); // false
