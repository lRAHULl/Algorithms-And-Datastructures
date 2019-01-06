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
}
let g = new Graph();
g.addVertex("Rahul");
g.addVertex("Becky");
g.addVertex("BadBunny");
g.addEdge("Rahul", "Becky");
g.addEdge("Rahul", "BadBunny");
g.addEdge("Becky", "BadBunny");
console.log(g);
g.removeEdge("Becky", "BadBunny");
g.removeVertex("BadBunny");
console.log(g);