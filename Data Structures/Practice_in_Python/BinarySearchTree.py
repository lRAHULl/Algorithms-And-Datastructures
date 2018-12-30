class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        newNode = Node(value)
        if not self.root:
            self.root = newNode
            return self
        else:
            current = self.root
            while True:
                if current.value == value:
                    return None
                else:
                    if value < current.value:
                        if not current.left:
                            current.left = newNode
                            return self
                        else:
                            current = current.left
                    elif value > current.value:
                        if not current.right:
                            current.right = newNode
                            return self
                        else:
                            current = current.right

    def find(self, value):
        if self.root == None:
            return False
        elif value == self.root.value:
            return True
        else:
            current = self.root
            while True:
                if current.value == value:
                    return True
                elif value < current.value:
                    if current.left == None:
                        return False
                    else:
                        current = current.left
                elif value > current.value:
                    if current.right == None:
                        return False
                    else:
                        current = current.right

    def BFS(self):
        data = []
        queue = []
        node = self.root
        queue.append(node)
        while len(queue):
            node = queue.pop(0)
            data.append(node.value)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return data

    def DFSPreOrder(self):
        data = []
        current = self.root

        def traverse(node):
            data.append(node.value)
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)

        traverse(current)
        return data

    def DFSPostOrder(self):
        data = []
        current = self.root

        def traverse(node):
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
            data.append(node.value)

        traverse(current)
        return data

    def DFSInOrder(self):
        data = []
        current = self.root

        def traverse(node):
            if node.left:
                traverse(node.left)
            data.append(node.value)
            if node.right:
                traverse(node.right)

        traverse(current)
        return data

    def height(self, root):
        if not root:
            return -1
        leftDepth = self.height(root.left)
        rightDepth = self.height(root.right)
        if leftDepth > rightDepth:
            return leftDepth + 1
        else:
            return rightDepth + 1


t = BinarySearchTree()
t.insert(5)
t.insert(3)
t.insert(8)
t.insert(1)
t.insert(4)
t.insert(9)
t.insert(6)
# print(t.find(10))
# print(t.find(2))
print(t.BFS())  # [5, 3, 8, 1, 4, 6, 9]
print(t.DFSPreOrder())  # [5, 3, 1, 4, 8, 6, 9]
print(t.DFSPostOrder())  # [1, 4, 3, 6, 9, 8, 5]
print(t.DFSInOrder())  # [1, 3, 4, 5, 6, 8, 9]
print(t.height(t.root))
# print(t.root.left.left.value)
