(function(){
    var cy  = cytoscape({
      container: document.getElementById('cy'),
      ready: function(){window.cy=this;},
      style: [
        { selector: 'node[label = "Finished"]', 
          css: {'shape':'square','background-color': '#6FB1FC', 'content': 'data(name)'}
        },
        { selector: 'node[label = "InProgress"]', 
          css: {'background-color': '#F5A45D', 'content': 'data(name)'}
        },
        { selector: 'node[label = "Course"]', 
          css: {'background-color': '#F5A45D', 'content': 'data(name)'}
        },
        { selector: 'edge', 
          css: { 'target-arrow-shape': 'triangle'}
        }        
      ],
      elements: {
        nodes: [
          {data: {id: '1300', name: 'Data Structure', label: 'Finished'}},
          {data: {id: '2270', name: 'Computer System', label: 'InProgress'}},
          {data: {id: '3000', name: 'Algorithm', label: 'Course'}}
        ],
        edges: [
        	{data: {source: '1300', target: '2270', relationship: 'prereq'}},
        	{data: {source: '1300', target: '3000', relationship: 'prereq'}}
        	]
      },
      layout: { name: 'grid'} 
    });

    cy.nodes().qtip({
      content: function(ele){ return 'Example qTip on ele ' + this.id() },
      position: {
        my: 'top center',
        at: 'bottom center'
      },
      style: {
        classes: 'qtip-bootstrap',
        tip: {
          width: 16,
          height: 8
        }
      }
    });
});
