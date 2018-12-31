class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Stack:
    def __init__(self):
        self.size = 0
        self.first = None
        self.last = None

    def push(self, value):
        newNode = Node(value)
        if self.size == 0:
            self.first = newNode
            self.last = self.first
        else:
            newNode.next = self.first
            self.first = newNode
        self.size += 1
        return self

    def pop(self):
        oldTop = self.first
        newTop = oldTop.next
        self.first = newTop
        oldTop.next = None
        self.size -= 1
        return oldTop.value

    def log(self):
        data = []
        current = self.first
        for _ in range(self.size):
            data.append(current.value)
            current = current.next
        print(data)


s = Stack()
s.push(10)
s.push(20)
s.push(30)
print(s.pop())
print(s.pop())
print(s.pop())
s.log()
