[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

Sources: Used ai to help with assignment as well as google for main.yml logic, jest for testing, scripts in package.json file, runtime analysis

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

For each vertex dequeued from priority queue, algorithm looks at adjacent vertices:

-Vertex: The algorithm goes through all vertices $(V)$ once in priority queue.

-Edge: For each vertex, it goes through adjacency list, which involves iterating over all edges $(E)$.

Total Complexity

- Priority Queue: Each enqueue operation is $O(E \log V)$ since each edge may potentially lead to a decrease key operation in priority queue.

- Dequeuing: Each dequeue operation happens $(V)$ times and since each operation potentially has sorting, it is $O(V \log V)$.

As both the enqueuing of vertices (once per edge) and the dequeuing (once per vertex) involve logarithmic operations, we have a time complexity of $\Theta((E + V) \log V)$. This assumes that the graph is connected and $E \geq V$.
