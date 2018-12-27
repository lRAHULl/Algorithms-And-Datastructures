class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def push(self, value):
        newNode = Node(value)
        if (self.head == None):
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return self

    def pop(self):
        if self.length == 0:
            return None
        removed = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            prev = self.head
            temp = self.head
            while(temp.next != None):
                prev = temp
                temp = temp.next
            self.tail = prev
            self.tail.next = None
        self.length -= 1
        return removed.value

    def shift(self):
        if self.length == 0:
            return None
        removed = self.head
        newHead = self.head.next
        self.head = newHead
        self.length -= 1
        return removed.value

    def unshift(self, value):
        newNode = Node(value)
        if (self.head == None):
            self.head = newNode
            self.tail = self.head
        else:
            temp = self.head
            self.head = newNode
            newNode.next = temp
        self.length += 1
        return self

    def get(self, pos):
        if (pos < 0 or pos >= self.length):
            return None
        if self.length == 0:
            return None
        temp = self.head
        for _ in range(pos):
            temp = temp.next
        return temp

    def set(self, pos, value):
        if (pos < 0 or pos >= self.length):
            return None
        if self.length == 0:
            return None
        foundNote = self.get(pos)
        if foundNote:
            foundNote.value = value
            return foundNote.value
        return False

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
        newNode.next = temp
        prev.next = newNode
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
        prev.next = temp.next
        self.length -= 1
        return temp.value

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
        arr = []
        current = self.head
        while (current):
            arr.append(current.value)
            current = current.next
        print(arr)


list = LinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
print(list.tail.value)
list.log()
# print(list.shift())
# print(list.shift())
# print(list.shift())
list.insert(4, 2000)
list.log()
print(list.remove(4))
list.log()
list.reverse()
list.log()
