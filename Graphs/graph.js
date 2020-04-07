function createGraph(V, E) {
    //V - Number of Vertices
    //E- Set of Edges in the graph
  
    let adjancnecyList = [];
  
    for (let i = 0; i < V; i++) {
      adjancencyList.push([]);
    }
  
    for (let i = 0; i < E.length; i++) {
      adjancencyList[E[i][0] - 1].push([E[i][1] - 1, E[i][2]]);
      adjancencyList[E[i][1] - 1].push([E[i][0] - 1, E[i][2]]);
    }
    return adjancencyList;
  }
  
  const V = 5;
  const Edges = [
    [1, 2, 3],
    [1, 4, 2],
    [3, 5, 1],
    [3, 4, 3]
  ];
  
  let graph = createGraph(V, Edges);
  
  // randomly creating and displaying graphs on the screen
  
  onload = function() {
    //create a network
  
    const container = document.getElementById("container");
    const genNew = document.getElementById("generate-graph");
  
    //initialize graph options
  
    const options = {
      edges: {
        labelHighlightBold: true,
        font: {
          size:20
        }
      },
      nodes: {
        font: '12px arial red',
        scaling: {
          label: true,
        },
        shape: 'icon',
        icon: {
          face: 'FontAwesome',
          code: '/uf015',
          size: 40,
          color: '#991133',
        }
      }
    };
    //initialize your network 
    const network = new vis.Network(container);
    network.setOptions(options);
  
    function createData() {
      const cities: ['Delhi', 'Mumbai','Jaipur', 'Ajmer', 'Goa', 'Chandigarh', 'Bangalore', 'Mussoorie', 'Nainital', 'Pune'];
  
      const V = Math.floor(Math.random() * cities.length) + 3;
      let vertices = [];
      for(let i=0; i<V; i++) {
        vertices.push({id:i, label: cities[i-1]});
      }
  
      let edges = [];
      for(let i = 0; i<V; i++) {
        let neigh = Math.floor(Math.random() * i);
        edges.push({from:i, to: neigh, color: 'orange', label: String(Math.floor(Math.random() * 70) + 30)});
  
      } 
      
      const data = {
        nodes: vertices,
        edges: edges
      };
      return data;
  
    }
  
    genNew.onClick = function() {
      let data = createData();
      network.setData(data);
    };
  
    genNew.click();
  };
  
  //Implementation of Djikstra's algorithm
  
  function Djikstra(graph, V, src)  {
  
  }
  
  let V = 9;
  let src = 0;
  
  
  let graph = createGraph(V, E);