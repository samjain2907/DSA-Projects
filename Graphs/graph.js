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
    let vis = Array(V).fill(0);
    let dist = [];
    for(let i=0; i<V; i++) {
      dist.push([1000, -1]);
    }

    dist[src] = 0;
    for(let i=0; i<V-1; i++) {
      let mn = -1;
      for(let j=0; j<V; j++) {
        if(vis[j]===0) {
          if(mn== -1 || dist[j][0] < dist[mn][0]) {
            mn = j;
          }
        }
      }

      vis[mn] = 1;
      for(let j=0;j<graph[mn].length; i++) {
        let edge = graph[mn][j];
        if(vis[edge[0] === 0 && dist[0][0] > dist[mn][0] + edge[1]]) {
          dist[0][0] = dist[mn][0] + edge[1];
          dist[edge[0][1]] = mn;
        }
      }
    }

    return dist;
  
  }
  
  let V = 9;
  let src = 0;
  let E = [[0,1,4], [0,7,8], [1,7,11],[1,2,8], [7,8,7], [6,7,1], [2,8,2], [6,8,6],
[5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];
  
  let graph = createGraph(V, E);

  //Handling Flight edges
 let plane = 0;
 let p1 = -1, p2 = -1;

 for(let pos in data['edges']) {
   let edge = data['edges'][pos];

   if(edge['type'] === 1) {
     let to = edge['to'];
     let from = edge['from'];
     let wght = parseInt(edge['label']);

     if(dist1[to][0] + wght+ dist2[from][0] < mn_dist) {
       plane = wght;
       p1 = to;
       p2 = from;mn_dist = dist1[to][0] + dist2[from][0];
     }

     if(dist[to][0] + wght + dist[from][0]) {
       plane = wght;
       p2 = to;
       p1 = from;
       mn_dist = dist2[to][0] + wght + dost[from][0];
     }
   }
 }

