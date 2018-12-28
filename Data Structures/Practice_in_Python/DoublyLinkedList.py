class Node():
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedList():
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def push(self, value):
        newNode = Node(value)
        if self.length == 0:
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode
        self.length += 1
        return self

    def pop(self):
        if self.length == 0:
            return None
        oldTail = self.tail
        newTail = self.tail.prev
        newTail.next = None
        oldTail.prev = None
        self.tail = newTail
        self.length -= 1
        return oldTail.value

    def shift(self):
        if self.length == 0:
            return None
        oldHead = self.head
        newHead = self.head.next
        oldHead.next = None
        newHead.prev = None
        self.head = newHead
        self.length -= 1
        return oldHead.value

    def unshift(self, value):
        newNode = Node(value)
        if self.length == 0:
            self.head = newNode
            self.tail = self.head
        else:
            self.head.prev = newNode
            newNode.next = self.head
            self.head = newNode
        self.length += 1
        return self

    def get(self, pos):
        if (pos < 0 or pos >= self.length):
            return None
        current = self.head
        for _ in range(pos):
            current = current.next
        return current

    def set(self, pos, value):
        if (pos < 0 or pos >= self.length):
            return None
        current = self.get(pos)
        current.value = value
        return current

    def insert(self, pos, value):
        newNode = Node(value)
        if (pos < 0 or pos > self.length):
            return None
        elif pos == 0:
            return self.unshift(value)
        elif pos == self.length:
            return self.push(value)
        prev = self.head
        temp = self.head
        for i in range(pos):
            prev = temp
            temp = temp.next
        temp.prev = newNode
        newNode.next = temp
        prev.next = newNode
        newNode.prev = prev
        self.length += 1
        return self

    def remove(self, pos):
        if (pos < 0 or pos >= self.length):
            return None
        elif pos == 0:
            return self.shift()
        elif pos == self.length - 1:
            return self.pop()
        prev = self.head
        temp = self.head
        for i in range(pos):
            prev = temp
            temp = temp.next
        removed = temp
        temp = temp.next
        temp.prev = prev
        prev.next = temp
        value = removed.value
        self.length -= 1
        return value

    def reverse(self):
        node = self.head
        self.head = self.tail
        self.tail = node
        prev = None
        after = None
        for _ in range(self.length):
            after = node.next
            node.next = prev
            prev = node
            node = after
        return self

    def log(self):
        data = []
        current = self.head
        for i in range(self.length):
            data.append(current.value)
            current = current.next
        print(data)


list = DoublyLinkedList()
list.unshift(12)
list.unshift(10)
list.unshift(100)
list.log()
# print(list.remove(1))
list.reverse()
list.log()
# print(list.shift())
# print(list.pop())
# list.log()
