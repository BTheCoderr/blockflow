const LEVELS = [
  {
    name: "First Flow", par: 8, time: 28,
    hint: "Swipe blocks toward the matching glowing exit.",
    blocks: [
      { id:"r1", color:"red", x:1, y:4 },
      { id:"b1", color:"blue", x:4, y:1 },
      { id:"g1", color:"green", x:2, y:2 }
    ],
    gates: [
      { color:"red", side:"left", pos:4 },
      { color:"blue", side:"top", pos:4 },
      { color:"green", side:"bottom", pos:2 }
    ], walls: []
  },
  {
    name: "Crossing Paths", par: 6, time: 34,
    hint: "A block can only leave through a gate of the same color.",
    blocks:[
      {id:"r1",color:"red",x:4,y:3},{id:"b1",color:"blue",x:1,y:3},{id:"y1",color:"yellow",x:3,y:1}
    ],
    gates:[
      {color:"red",side:"right",pos:3},{color:"blue",side:"left",pos:3},{color:"yellow",side:"top",pos:3}
    ], walls:[{x:2,y:2},{x:3,y:2}]
  },
  {
    name:"Make Space", par:12, time:36,
    hint:"Sometimes the first move is just making room.",
    blocks:[
      {id:"r1",color:"red",x:2,y:4},{id:"b1",color:"blue",x:3,y:4},{id:"g1",color:"green",x:2,y:1},{id:"y1",color:"yellow",x:3,y:1}
    ],
    gates:[
      {color:"red",side:"left",pos:4},{color:"blue",side:"right",pos:4},{color:"green",side:"left",pos:1},{color:"yellow",side:"right",pos:1}
    ], walls:[{x:0,y:2},{x:5,y:2}]
  },
  {
    name:"The Funnel", par:6, time:40,
    hint:"Use the open lanes. Walls never move.",
    blocks:[
      {id:"r1",color:"red",x:2,y:4},{id:"b1",color:"blue",x:3,y:4},{id:"g1",color:"green",x:2,y:0},{id:"p1",color:"purple",x:3,y:0}
    ],
    gates:[
      {color:"red",side:"bottom",pos:2},{color:"blue",side:"bottom",pos:3},{color:"green",side:"top",pos:2},{color:"purple",side:"top",pos:3}
    ], walls:[{x:1,y:2},{x:4,y:2},{x:1,y:3},{x:4,y:3}]
  },
  {
    name:"Traffic", par:12, time:44,
    hint:"Plan the order before you move.",
    blocks:[
      {id:"r1",color:"red",x:2,y:2},{id:"b1",color:"blue",x:3,y:2},{id:"g1",color:"green",x:2,y:3},{id:"y1",color:"yellow",x:3,y:3}
    ],
    gates:[
      {color:"red",side:"top",pos:2},{color:"blue",side:"right",pos:2},{color:"green",side:"left",pos:3},{color:"yellow",side:"bottom",pos:3}
    ], walls:[{x:0,y:0},{x:5,y:5}]
  },
  {
    name:"Split Decision", par:8, time:48,
    hint:"Every swipe changes the next lane.",
    blocks:[
      {id:"r1",color:"red",x:1,y:1},{id:"r2",color:"red",x:4,y:4},{id:"b1",color:"blue",x:4,y:1},{id:"b2",color:"blue",x:1,y:4}
    ],
    gates:[
      {color:"red",side:"left",pos:1},{color:"red",side:"right",pos:4},{color:"blue",side:"right",pos:1},{color:"blue",side:"left",pos:4}
    ], walls:[{x:2,y:2},{x:3,y:3}]
  },
  {
    name:"Tight Corners", par:12, time:50,
    hint:"You can move any block one open cell per swipe.",
    blocks:[
      {id:"r1",color:"red",x:2,y:1},{id:"b1",color:"blue",x:3,y:1},{id:"g1",color:"green",x:2,y:4},{id:"p1",color:"purple",x:3,y:4}
    ],
    gates:[
      {color:"red",side:"left",pos:1},{color:"blue",side:"right",pos:1},{color:"green",side:"left",pos:4},{color:"purple",side:"right",pos:4}
    ], walls:[{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2}]
  },
  {
    name:"Center Jam", par:14, time:54,
    hint:"Clear a route from the center outward.",
    blocks:[
      {id:"r1",color:"red",x:2,y:2},{id:"b1",color:"blue",x:3,y:2},{id:"g1",color:"green",x:2,y:3},{id:"y1",color:"yellow",x:3,y:3},{id:"p1",color:"purple",x:1,y:3}
    ],
    gates:[
      {color:"red",side:"top",pos:2},{color:"blue",side:"top",pos:3},{color:"green",side:"bottom",pos:2},{color:"yellow",side:"bottom",pos:3},{color:"purple",side:"left",pos:3}
    ], walls:[{x:0,y:1},{x:5,y:1},{x:0,y:4},{x:5,y:4}]
  },
  {
    name:"Five Ways", par:10, time:58,
    hint:"Five colors. One clean board.",
    blocks:[
      {id:"r1",color:"red",x:2,y:1},{id:"b1",color:"blue",x:3,y:1},{id:"g1",color:"green",x:1,y:3},{id:"y1",color:"yellow",x:4,y:3},{id:"p1",color:"purple",x:2,y:4}
    ],
    gates:[
      {color:"red",side:"top",pos:2},{color:"blue",side:"top",pos:3},{color:"green",side:"left",pos:3},{color:"yellow",side:"right",pos:3},{color:"purple",side:"bottom",pos:2}
    ], walls:[{x:2,y:2},{x:3,y:2}]
  },
  {
    name:"Pressure Test", par:11, time:60,
    hint:"Classic and Rush reward clean execution. Chill never rushes you.",
    blocks:[
      {id:"r1",color:"red",x:1,y:1},{id:"b1",color:"blue",x:4,y:1},{id:"g1",color:"green",x:1,y:4},{id:"y1",color:"yellow",x:4,y:4},{id:"p1",color:"purple",x:2,y:3}
    ],
    gates:[
      {color:"red",side:"left",pos:1},{color:"blue",side:"right",pos:1},{color:"green",side:"left",pos:4},{color:"yellow",side:"right",pos:4},{color:"purple",side:"bottom",pos:2}
    ], walls:[{x:2,y:2},{x:3,y:2},{x:3,y:3}]
  },
  {
    name:"Long Route", par:13, time:64,
    hint:"Think first. Swipe second.",
    blocks:[
      {id:"r1",color:"red",x:4,y:0},{id:"b1",color:"blue",x:1,y:0},{id:"g1",color:"green",x:4,y:5},{id:"y1",color:"yellow",x:1,y:5},{id:"p1",color:"purple",x:2,y:2}
    ],
    gates:[
      {color:"red",side:"right",pos:0},{color:"blue",side:"left",pos:0},{color:"green",side:"right",pos:5},{color:"yellow",side:"left",pos:5},{color:"purple",side:"top",pos:2}
    ], walls:[{x:2,y:1},{x:3,y:1},{x:2,y:4},{x:3,y:4}]
  },
  {
    name:"Flow State", par:12, time:70,
    hint:"Final test: clear it with as little wasted motion as possible.",
    blocks:[
      {id:"r1",color:"red",x:1,y:2},{id:"r2",color:"red",x:4,y:3},{id:"b1",color:"blue",x:4,y:2},{id:"b2",color:"blue",x:1,y:3},{id:"g1",color:"green",x:2,y:1},{id:"p1",color:"purple",x:3,y:4}
    ],
    gates:[
      {color:"red",side:"left",pos:2},{color:"red",side:"right",pos:3},{color:"blue",side:"right",pos:2},{color:"blue",side:"left",pos:3},{color:"green",side:"top",pos:2},{color:"purple",side:"bottom",pos:3}
    ], walls:[{x:2,y:2},{x:3,y:3}]
  }
];
