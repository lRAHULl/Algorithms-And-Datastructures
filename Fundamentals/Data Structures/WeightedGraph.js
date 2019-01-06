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
g.addEdge("A", "B", 10);
console.log(g.adjacencyList);