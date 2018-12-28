class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def enqueue(self, value):
        newNode = Node(value)
        if (self.length == 0):
            self.first = newNode
            self.last = self.first
        else:
            self.last.next = newNode
            self.last = newNode
        self.length += 1
        return self

    def dequeue(self):
        oldFirst = self.first
        newFirst = oldFirst.next
        self.first = newFirst
        oldFirst.next = None
        self.length -= 1
        return oldFirst.value

    def log(self):
        data = []
        current = self.first
        for _ in range(self.length):
            data.append(current.value)
            current = current.next
        print(data)


q = Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.log()
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
q.log()
