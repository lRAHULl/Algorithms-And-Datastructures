class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (vertex in this.adjacencyList) {
            return console.error('vertex already exists');
        }
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (vertex1 && vertex2 in this.adjacencyList) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        } else {
            return false;
        }
    }
    removeEdge(vertex1, vertex2) {
        if (vertex1 && vertex2 in this.adjacencyList) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        } else {
            return false;
        }
    }
    removeVertex(vertex) {
        if (vertex in this.adjacencyList) {
            for (let v in this.adjacencyList) {
                this.adjacencyList[v] = this.adjacencyList[v].filter(v => v !== vertex);
            }
            delete(this.adjacencyList[vertex]);
        } else {
            return false;
        }
    }
}

let g = new Graph();
g.addVertex('Rahul');
g.addVertex('Becky');
g.addVertex('BadBunny');
g.addEdge('Rahul', 'Becky');
// g.addEdge('Rahul', 'Bad Bunny');
g.addEdge('Becky', 'BadBunny');
console.log(g);
// g.removeEdge('Becky', 'BadBunny');
g.removeVertex('BadBunny');
console.log(g);