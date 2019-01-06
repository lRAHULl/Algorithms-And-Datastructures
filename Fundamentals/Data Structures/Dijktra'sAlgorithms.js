class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (vertex1 && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push({
        node: vertex2,
        weight
      });
      this.adjacencyList[vertex2].push({
        node: vertex1,
        weight
      });
    }
  }
}

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("D", "E", 3);
g.addEdge("E", "F", 1);
console.log(g.adjacencyList);