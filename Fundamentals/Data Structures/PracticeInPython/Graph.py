class Graph:
    def __init__(self):
        self.adjacencyList = dict()

    def addVertex(self, vertex):
        if vertex not in self.adjacencyList:
            self.adjacencyList[vertex] = []
        else:
            return ValueError("Value Already Exists")

    def addEdge(self, vertex1, vertex2):
        if vertex1 and vertex2 in self.adjacencyList:
            self.adjacencyList[vertex1].append(vertex2)
            self.adjacencyList[vertex2].append(vertex1)

    # For some Reason skips the last item.
    def DFSRecursive(self, start):
        list = self.adjacencyList
        result = []
        visited = dict()

        def DFS(vertex):
            if not vertex:
                return None
            visited[vertex] = True
            result.append(vertex)
            print(list[vertex])
            for i in list[vertex]:
                print(visited)
                if i not in visited:
                    return DFS(i)
        DFS(start)
        return result

    def DFSIterative(self, start):
        stack = []
        visited = dict()
        result = []

        stack.append(start)

        while len(stack):
            vertex = stack.pop()
            if vertex not in visited:
                visited[vertex] = True
                result.append(vertex)
                for neighbor in self.adjacencyList[vertex]:
                    if neighbor not in visited:
                        stack.append(neighbor)
        return result

    def BFS(self, start):
        queue = []
        visited = dict()
        result = []

        queue.append(start)

        while len(queue):
            vertex = queue.pop(0)
            if vertex not in visited:
                visited[vertex] = True
                result.append(vertex)
                for neighbor in self.adjacencyList:
                    if neighbor not in visited:
                        queue.append(neighbor)
        return result


g = Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
print(g.adjacencyList)
print(g.DFSIterative("A"))
print(g.BFS("A"))
