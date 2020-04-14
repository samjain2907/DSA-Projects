// Creating random data

function createData() {
  const size = Math.floor(Math.random() * 8) + 2;

  // Adding people that represents nodes in a graph
  let nodes = [];
  for (let i = 0; i <= size; i++) {
    nodes.push({ id: i, label: "Person " + i });
  }

  nodes = new vis.DataSet(nodes);

  // Dynamically generating edges with random numbers as weights

  const edges = [];
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      //Modifies the amount of edges in the graph
      if (Math.random() > 0.5) {
        // Controls cash flow on edge
        if (Math.random() > 0.5)
          edges.push({
            from: i,
            to: j,
            label: String(Math.floor(Math.random() * 100) + 1)
          });
        else
          edges.push({
            from: j,
            to: i,
            label: String(Math.floor(Math.random() * 100) + 1)
          });
      }
    }
  }
  const data = {
    nodes: nodes,
    edges: edges
  };

  return data;
}
