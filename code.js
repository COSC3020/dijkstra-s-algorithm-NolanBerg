class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(vertex, priority) {
        this.queue.push({ vertex, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, sourceNode) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    for (let vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[sourceNode] = 0;

    for (let vertex in graph) {
        pq.enqueue(vertex, distances[vertex]);
    }

    while (!pq.isEmpty()) {
        let minNode = pq.dequeue();
        let currentVertex = minNode.vertex;

        for (let neighbor in graph[currentVertex]) {
            let weight = graph[currentVertex][neighbor];
            let alt = distances[currentVertex] + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = currentVertex;
                pq.enqueue(neighbor, alt);
            }
        }
    }

    return { distances, previous };
}

module.exports = { dijkstra }; 
