class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) {
      this.adjacencyList[vertex] = [];
    } else {
      return console.error("vertex already in the Graph");
    }
  }
  addEdge(vertex1, vertex2) {
    if (vertex1 && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      return console.error(
        "Check if both the vertices are present in the graph."
      );
    }
  }
  removeEdge(vertex1, vertex2) {
    if (vertex1 && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    } else {
      return console.error(
        "Check if both the vertices are present in the graph."
      );
    }
  }
  removeVertex(vertex) {
    if (vertex in this.adjacencyList) {
      for (let v in this.adjacencyList) {
        this.removeEdge(v, vertex);
      }
      delete this.adjacencyList[vertex];
    } else {
      return console.error("vertex not found!");
    }
  }
  DFSIterative(start) {
    const list = this.adjacencyList;
    const stack = [];
    const visited = {};
    const result = [];
    let vertex;

    stack.push(start);
    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        list[vertex].forEach(neighbor => {
          stack.push(neighbor);
        });
      }
    }
    return result;
  }
}

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSIterative("A"));
