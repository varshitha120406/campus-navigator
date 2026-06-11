<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Campus Navigator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #060606;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #4CAF50;
            color: rgb(3, 1, 1);
            text-align: center;
            padding: 1em;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px;
        }
        .block-btn {
            background-color: #008CBA;
            color: rgb(10, 9, 9);
            padding: 15px 20px;
            margin: 10px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
        }
        .block-btn:hover {
            background-color: #d0d3d3;
        }
        #details {
            max-width: 800px;
            margin: 20px auto;
            padding: 15px;
            background-color: #e0f7fa;
            border-radius: 10px;
        }
        h2 {
            color: #00796b;
        }
        ul {
            line-height: 1.6;
        }
    </style>
</head>
<body>

<header>
    <h1>College Campus Navigator</h1>
</header>

<div class="container">

    <button class="block-btn" onclick="showBlock('humanities')">New Admin Block</button>
    <button class="block-btn" onclick="showBlock('library')">Library Block</button>
    <button class="block-btn" onclick="showBlock('firstYear')">1st Year Block</button>
    <button class="block-btn" onclick="showBlock('principal')">Principal Office</button>
    <button class="block-btn" onclick="showBlock('admin')">Admin Office</button>
    <button class="block-btn" onclick="showBlock('rnd')">R&D Cell Block</button>
    <button class="block-btn" onclick="showBlock('mechanical')">Mechanical Block</button>
    <button class="block-btn" onclick="showBlock('emerging')">Emerging Block</button>
    <button class="block-btn" onclick="showBlock('cse')">CSE Block</button>
    <button class="block-btn" onclick="showBlock('it')">IT Block</button>
    <button class="block-btn" onclick="showBlock('sports')">Sports Complex</button>
    <button class="block-btn" onclick="showBlock('canteen')">Canteen</button>
</div>
<div class="notification">
  🔔Upcomming events are ...... IGNITE 2k26!
</div>

<div id="details">
    <h2>Welcome!</h2>
    <p>Click on any block to see its details and floors.</p>
</div>

<script>
    const blockDetails = {
        humanities: `
        <h2>New Admin Block</h2>
        <ul>
            <li>3 Floors:</li>
            <li>Ground Floor: Transport Office, Scholarship Office, Chairman Room, NCC Room, Admission Office</li>
            <li>1st Floor: IT Students</li>
            <li>2nd Floor: CSE Students</li>
            <li>3rd Floor: 4th Year Students</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
            <li>HOD Rooms opposite to stairs; stairs at center</li>
        </ul>
        `,
        library: `
        <h2>Library Block</h2>
        <ul>
            <li>1 Floor + First Floor:</li>
            <li>Left: Computer system for student entry/exit scan</li>
            <li>Right: Racks for books by branch</li>
            <li>Opposite: Tables and chairs for studying</li>
        </ul>
        `,
        firstYear: `
        <h2>1st Year Block</h2>
        <ul>
            <li>3 Floors for all 1st year branches</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
        </ul>
        `,
        principal: `
        <h2>Principal Office</h2>
        <ul>
            <li>Ground Floor: Principal Office</li>
            <li>Floors 1-3: ECE Students (2nd, 3rd, 4th Year)</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
        </ul>
        `,
        admin: `
        <h2>Admin Office</h2>
        <ul>
            <li>3 Floors</li>
            <li>Ground Floor Right Side: Examination Branch Office</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
            <li>Other Floors: Connected with Principal Office</li>
        </ul>
        `,
        rnd: `
        <h2>R&D Cell Block</h2>
        <ul>
            <li>Ground Floor: Head of Department Office with separate cabins</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
        </ul>
        `,
        mechanical: `
        <h2>Mechanical Block</h2>
        <ul>
            <li>2 Floors</li>
            <li>Ground Floor: Professors Cabins</li>
            <li>1st & 2nd Floor: Mechanical 2nd, 3rd, 4th Year Classes</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
        </ul>
        `,
        emerging: `
        <h2>Emerging Block</h2>
        <ul>
            <li>4 Floors</li>
            <li>Ground Floor: Labs</li>
            <li>1st-4th Floor: CSE-DS, CSE-AIML, CSE-IoT Students</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
        </ul>
        `,
        cse: `
        <h2>CSE Block</h2>
        <ul>
            <li>3 Floors</li>
            <li>All floors: Classrooms & Staff Rooms for students and lecturers</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
        </ul>
        `,
        it: `
        <h2>IT Block</h2>
        <ul>
            <li>3 Floors</li>
            <li>Ground Floor: 2 Classes</li>
            <li>1st Floor: Civil Students Classes</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
            <li>2nd Floor: Computer Labs</li>
            <li>3rd Floor: IT Students Classrooms</li>
        </ul>
        `,
        sports: `
        <h2>Sports Complex</h2>
        <ul>
            <li>4 Floors</li>
            <li>1st-3rd Floors: Classes & Labs</li>
            <li>Every floor: Male & Female Washrooms (Female: left corner, Male: right side)</li>
            <li>4th Floor: Auditorium</li>
        </ul>
        `,
        canteen: `
        <h2>Canteen</h2>
        <ul>
            <li>Food Menu available in app</li>
            
            <li>Seating area for students</li>
        </ul>
        `
    };

    function showBlock(block) {
        document.getElementById('details').innerHTML = blockDetails[block];
    }
</script>

</body>
</html>

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Campus Navigator — Sketch-aligned Map + Realistic Route</title>
<style>
  .route-line {
  position:absolute;
  height:4px;
  background:#0577c6;
  transform-origin:0 0;
  border-radius:4px;
  z-index:500;
}
  :root{
    --bg:#f5f7f8; --panel:#fff; --accent:#0577c6; --muted:#6b7280;
  }
  *{box-sizing:border-box}
  body{margin:0;font-family:Inter,Arial,Helvetica,sans-serif;background:var(--bg);color:#0f172a}
  header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(90deg,#0369a1,#0ea5e9);color:white}
  header h1{margin:0;font-size:18px}
  .toolbar {display:flex;gap:8px;align-items:center;}
  select, button {padding:8px;border-radius:8px;border:none;font-size:14px}
  button {cursor:pointer;background:var(--accent);color:white}
  main{max-width:1100px;margin:18px auto;padding:12px;display:grid;grid-template-columns:300px 1fr;gap:16px}
  .panel{background:var(--panel);padding:12px;border-radius:10px;box-shadow:0 6px 18px rgba(2,6,23,0.06)}
  .block-list{display:grid;gap:8px;max-height:420px;overflow:auto;padding-right:6px}
  .block-btn{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-radius:8px;border:1px solid #e6eef5;background:white;cursor:pointer}
  .map-wrap{display:flex;flex-direction:column;gap:12px}
  /* Map area size best for your sketch: width 760px height 1200px (portrait) */
  .map {
    width: 760px; max-width:100%;
    height: 1200px; max-height:80vh;
    border-radius:10px; overflow:hidden; position:relative;
    background: none;
    background-size: cover;
    background-position: center top;
    border:1px solid #ddeaf0;
    box-shadow:0 10px 30px rgba(2,6,23,0.06);
  }
  /* building markers (centered on a point using transform) */
  .notification {
              background-color: #008CBA;
;
  color: rgb(248, 247, 247);
  text-align: center;
  padding: 10px;
  font-size: 16px;
}
  .building {
    position:absolute;
    transform: translate(-50%,-50%);
    background: rgba(255,255,255,0.95);
    border-radius:8px;
    padding:6px 9px;
    font-weight:700;
    font-size:13px;
    border:1px solid rgba(15,23,42,0.06);
    box-shadow:0 6px 12px rgba(2,6,23,0.06);
    cursor:pointer;
    text-align:center;
    white-space:nowrap;
  }
  .building.small { padding:4px 8px; font-size:12px }
  .building.circle { border-radius:50%; width:56px; height:56px; padding:0; display:flex;align-items:center;justify-content:center; font-size:12px; font-weight:700; }
  /* route dot (footstep) */
  .route-dot {
    position:absolute;
    width:14px; height:14px;
    border-radius:50%;
    background: rgba(5,119,198,0.95);
    transform: translate(-50%,-50%);
    pointer-events:none;
    z-index:999;
    box-shadow:0 6px 14px rgba(5,119,198,0.18);
  }
  .directions { margin-top:8px; font-size:14px; color:var(--muted) }
  .directions .item { margin-bottom:6px; padding:8px; background:#fbfdff; border-radius:8px; border:1px solid #eef6fb; }
  footer{margin:18px auto;text-align:center;color:var(--muted)}
  @media (max-width:980px){
    main{grid-template-columns:1fr; padding:8px}
    .map{height:720px}
  }
</style>
</head>
<body>

<header>
  <h1>Campus Navigator</h1>
  <div class="toolbar">
    <label style="color:#fff;font-weight:600;margin-right:6px">Start</label>
    <select id="startSelect"></select>
    <label style="color:#fff;font-weight:600;margin-left:8px;margin-right:6px">End</label>
    <select id="endSelect"></select>
    <button id="showRouteBtn">Show Route</button>
  </div>
</header>

<main>
  <!-- left panel -->
  <div class="panel">
    <h3 style="margin:0 0 8px">Blocks (click to view)</h3>
    <div class="block-list" id="blockList"></div>

    <div style="margin-top:12px">
      <h4 style="margin:6px 0">Canteen Menu</h4>
      <div id="canteenMenu" style="font-size:13px;color:var(--muted)"></div>
    </div>

    <div style="margin-top:12px">
      <h4 style="margin:6px 0">Route Controls</h4>
      <div style="font-size:13px;color:var(--muted)">Use the dropdowns above or click map blocks, then click <strong>Show Route</strong>.</div>
    </div>
  </div>

  <!-- right: map and details -->
  <div class="map-wrap">
    <div class="map" id="map" aria-label="Campus map — sketch background">
      <!-- building markers will be injected here -->
      <!-- route dot -->
      <div id="routeDot" class="route-dot" style="display:none"></div>
    </div>

    <div class="panel">
      <h3 id="detailTitle">Welcome</h3>
      <div id="detailShort" style="color:var(--muted);margin-bottom:8px">Click a block on the left or on the map to see floor details and washroom notes.</div>
      <div id="floorsContainer"></div>

      <div style="margin-top:12px">
        <h4 style="margin:6px 0">Turn-by-Turn Directions</h4>
        <div id="directionsList" class="directions"></div>
      </div>
    </div>
  </div>
</main>

<footer>Designed to match your sketch — save the sketch as <code>campus-sketch.jpg</code> in same folder</footer>

<script>
  function drawRouteLine(coords){
  // remove old lines
  document.querySelectorAll('.route-line').forEach(el=>el.remove());

  const mapRect = mapEl.getBoundingClientRect();
  const pts = coords.map(p => pctToPx(p.x, p.y, mapRect));

  for(let i=0;i<pts.length-1;i++){
    const a = pts[i];
    const b = pts[i+1];

    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx,dy);
    const angle = Math.atan2(dy,dx) * (180/Math.PI);

    const line = document.createElement('div');
    line.className = 'route-line';
    line.style.width = length + 'px';
    line.style.left = a.x + 'px';
    line.style.top = a.y + 'px';
    line.style.transform = `rotate(${angle}deg)`;

    mapEl.appendChild(line);
  }
}
/*
  Sketch-aligned Campus Navigator
  - Put your sketch into the same folder as campus-sketch.jpg
  - Coordinates below are in percentages (0..100) relative to map container
  - Pathfinding uses graph of walkway nodes; Dijkstra for shortest path
  - Animation moves a dot smoothly along the resulting polyline
*/

/* ----- BLOCK POSITIONS (percent) mapped to your sketch layout ----- */
const BLOCKS = {
  entrance:   { id:'entrance', name:'Entrance', x:50, y:94, type:'entrance' },
  garden:     { id:'garden', name:'Garden', x:22, y:80, type:'decor' },
  playground: { id:'playground', name:'Playground', x:30, y:34, type:'open' },
  canteen:    { id:'canteen', name:'Canteen', x:14, y:30, type:'food' },
  cricket:    { id:'cricket', name:'Cricket Ground', x:8, y:8, type:'sports' },
  sports:     { id:'sports', name:'Sports Complex', x:46, y:6, type:'sports' },
  rnd:        { id:'rnd', name:'R & D Cell', x:70, y:44, type:'admin' },
  it:         { id:'it', name:'IT Block', x:50, y:20, type:'academic' },
  cse:        { id:'cse', name:'CSE Block', x:70, y:6, type:'academic', /* will have neighbors on right */ },
  emerging1:  { id:'emerging1', name:'Emerging Block (top)', x:70, y:20, type:'academic' },
  mechanical: { id:'mechanical', name:'Mechanical Block', x:70, y:32, type:'academic' },
  saras:      { id:'saras', name:'Saraswathi Statue', x:60, y:52, type:'decor', circle:true },
  principal:  { id:'principal', name:'Principal Office', x:62, y:66, type:'admin' },
  library:    { id:'library', name:'Library', x:62, y:78, type:'library' },
  hes:        { id:'hes', name:'New Admin Block', x:62, y:86, type:'academic' },
  firstyear:  { id:'firstyear', name:'1st Year Block', x:28, y:72, type:'academic', accent:true }
};

/* ----- walkway graph nodes (percent coords). These are the actual path nodes.
   Structure: nodes[nodeId] = {x:percent, y:percent, neighbors:[{id,weight}] } 
   We will compute weights as euclidean distance (percent units).
*/
const NODES = {
  n_entrance: {x:50,y:90, neighbors:['n_center']},
  n_center:   {x:50,y:60, neighbors:['n_entrance','n_play','n_admin']},
  n_play:     {x:30,y:35, neighbors:['n_center','n_canteen']},
  n_canteen:  {x:14,y:30, neighbors:['n_play','n_cricket']},
  n_cricket:  {x:8,y:8, neighbors:[]},
  n_admin:    {x:62,y:52, neighbors:['n_center','n_rightcol']},
  n_rightcol: {x:70,y:20, neighbors:['n_admin','n_topright','n_midright']},
  n_rnd: {x:70, y:44, neighbors:['n_midright']},
  n_topright: {x:70,y:6, neighbors:['n_rightcol']},
  n_midright: {x:70,y:36, neighbors:['n_rightcol','n_rnd']},
n_bottomright: {x:70,y:68, neighbors:['n_library']},
  n_library: {x:62,y:78, neighbors:['n_bottomright','n_principal']},
  n_principal: {x:62,y:66, neighbors:['n_library','n_admin']}
};

// create neighbor weights (euclidean percent distance)
function buildGraph(nodes){
  const g = {};
  for(const id in nodes){
    g[id] = { x: nodes[id].x, y: nodes[id].y, neighbors: [] };
  }
  for(const id in nodes){
    (nodes[id].neighbors || []).forEach(nid=>{
      if(nodes[nid]){
        const dx = nodes[id].x - nodes[nid].x;
        const dy = nodes[id].y - nodes[nid].y;
        const dist = Math.hypot(dx,dy);
        g[id].neighbors.push({ id: nid, w: dist });
      }
    });
  }
  return g;
}

const GRAPH = buildGraph(NODES);

/* helpers: percent -> pixels based on map bounding box */
function pctToPx(percentX, percentY, mapRect){
  return {
    x: Math.round(mapRect.width * (percentX/100)),
    y: Math.round(mapRect.height * (percentY/100))
  };
}

/* Find nearest node id to a block by percent coords */
function nearestNodeToBlock(block){
  let best=null, bestDist=1e9;
  for(const nid in NODES){
    const dx = NODES[nid].x - block.x;
    const dy = NODES[nid].y - block.y;
    const d = Math.hypot(dx,dy);
    if(d < bestDist){ bestDist = d; best = nid; }
  }
  return best;
}

/* Dijkstra's algorithm on GRAPH */
function dijkstra(startId, targetId){
  const pq = new Map(); // not efficient but small graph
  const dist = {}; const prev = {};
  for(const nid in GRAPH){ dist[nid] = Infinity; prev[nid] = null; }
  dist[startId] = 0; pq.set(startId, 0);
  while(pq.size){
    // find min
    let u=null, uDist=Infinity;
    for(const [k,v] of pq) if(v < uDist){ u=k; uDist=v; }
    pq.delete(u);
    if(u === targetId) break;
    for(const neighbor of GRAPH[u].neighbors){
      const alt = dist[u] + neighbor.w;
      if(alt < dist[neighbor.id]){
        dist[neighbor.id] = alt;
        prev[neighbor.id] = u;
        pq.set(neighbor.id, alt);
      }
    }
  }
  // reconstruct path
  const path = [];
  let cur = targetId;
  if(!prev[cur] && cur !== startId) return []; // unreachable
  while(cur){
    path.unshift(cur);
    cur = prev[cur];
  }
  return path;
}

/* UI: render blocks markers & selects */
const mapEl = document.getElementById('map');
const startSelect = document.getElementById('startSelect');
const endSelect = document.getElementById('endSelect');
const blockList = document.getElementById('blockList');
const routeDot = document.getElementById('routeDot');
const detailTitle = document.getElementById('detailTitle');
const detailShort = document.getElementById('detailShort');
const floorsContainer = document.getElementById('floorsContainer');
const directionsList = document.getElementById('directionsList');
const canteenMenuEl = document.getElementById('canteenMenu');

function createBuildingMarker(b){
  const div = document.createElement('div');
  div.className = 'building' + (b.small? ' small' : '') + (b.circle? ' circle' : '');
  div.dataset.id = b.id;
  div.textContent = b.name;
  // center by percent coords
  div.style.left = b.x + '%';
  div.style.top  = b.y + '%';
  mapEl.appendChild(div);

  div.addEventListener('click', ()=> {
    showDetails(b.id);
    // also prefill selects
    startSelect.value = b.id;
  });
}

function populateUI(){
  // pops for selects and left list
  for(const id in BLOCKS){
    const b = BLOCKS[id];
    // left list button
    const btn = document.createElement('div');
    btn.className = 'block-btn';
    btn.innerHTML = `<div style="font-weight:700">${b.name}</div><div class="small">${b.id}</div>`;
    btn.onclick = ()=> {
      showDetails(b.id);
      // highlight on map
      const node = document.querySelector(`[data-id="${b.id}"]`);
      if(node){ node.style.transform='translate(-50%,-50%) scale(1.08)'; setTimeout(()=>node.style.transform='translate(-50%,-50%)',300); }
    };
    blockList.appendChild(btn);

    // selects
    const opt1 = document.createElement('option'); opt1.value = id; opt1.text = b.name;
    const opt2 = document.createElement('option'); opt2.value = id; opt2.text = b.name;
    startSelect.add(opt1); endSelect.add(opt2);

    // map markers
    createBuildingMarker(b);
  }

  // canteen menu if exists
  if(BLOCKS.canteen && BLOCKS.canteen.menu){
    canteenMenuEl.innerHTML = BLOCKS.canteen.menu.map(it => `${it.item} — ₹${it.price}`).join('<br>');
  } else {
    canteenMenuEl.textContent = 'Canteen menu not set';
  }
}

/* Details panel using the long description you gave earlier (floors, washrooms) */
const DETAILS = {
  hes: {
    floors:[
      {name:'Ground Floor', details:['Transport Office','Scholarship Office','Chairman Room','NCC Room','Admission Office (New Students)']},
      {name:'First Floor', details:['IT students (classes)']},
      {name:'Second Floor', details:['CSE students (classes)']},
      {name:'Third Floor', details:['4th year students (classes)']}
    ],
    wash: 'Each floor: female washroom at left corner, male washroom at right beside the stairs. Stairs at center; HOD opposite stairs.'
  },
  library: {
    floors:[
      {name:'Ground Floor', details:['Left: barcode scanner for entry/exit','Right: branch-wise racks','Tables & chairs for study']},
      {name:'First Floor', details:['More books & study tables.']}
    ]
  },
  firstyear: { floors:[
    {name:'Ground Floor', details:['1st year classes (branch A)']},
    {name:'First Floor', details:['1st year classes (branch B)']},
    {name:'Second Floor', details:['1st year classes (branch C)']},
  ]},
  principal: { floors:[
    {name:'Ground Floor', details:['Principal Office']},
    {name:'First Floor', details:['ECE — 2nd year classes']},
    {name:'Second Floor', details:['ECE — 3rd year classes']},
    {name:'Third Floor', details:['ECE — 4th year classes']},
  ]},
  admin: { floors:[
    {name:'Ground Floor', details:['Examination Branch Office (right side)']},
    {name:'First Floor', details:['Connected to Principal Office']},
    {name:'Second Floor', details:['Connected to Principal Office']}
  ], extra:'Saraswathi statue sits in front of Admin (curved)'},
  mechanical: { floors:[
    {name:'Ground Floor', details:['Professors cabins']},
    {name:'First Floor', details:['Mechanical classes — 2nd/3rd year']},
    {name:'Second Floor', details:['Mechanical classes — 4th year']}
  ], wash:'Washrooms at corners of each floor.'},
  emerging1: { floors:[
    {name:'Ground Floor', details:['Labs']},
    {name:'First Floor', details:['CSE-DS students']},
    {name:'Second Floor', details:['CSE-AIML students']},
    {name:'Third Floor', details:['CSE-IoT students']}
  ], wash:'Female left-corner, male right-corner on each floor.'},
  cse: { floors:[
    {name:'Ground Floor', details:['Classrooms & staff rooms']},
    {name:'First Floor', details:['Classrooms & staff rooms']},
    {name:'Second Floor', details:['Classrooms & staff rooms']}
  ], wash:'Washrooms at corners.'},
  it: { floors:[
    {name:'Ground Floor', details:['2 Classes']},
    {name:'First Floor', details:['Civil classes']},
    {name:'Second Floor', details:['Computer labs']},
    {name:'Third Floor', details:['IT classrooms']}
  ], wash:'Washrooms at 1st and 3rd floors beside the steps.'},
  sports: { floors:[
    {name:'1st Floor', details:['Classes & labs']},
    {name:'2nd Floor', details:['Classes & labs']},
    {name:'3rd Floor', details:['Classes & labs']},
    {name:'4th Floor', details:['Auditorium']}
  ]},
  canteen: { menu:[
    {item:'Veg Meal', price:60},{item:'Fried Rice', price:80},{item:'Tea', price:10}
  ]}
};

function showDetails(blockId){
  const b = BLOCKS[blockId];
  if(!b) return;
  detailTitle.textContent = b.name;
  detailShort.textContent = b.type ? `${b.type}` : '';
  floorsContainer.innerHTML = '';
  const info = DETAILS[blockId];
  if(info && info.floors){
    info.floors.forEach(f=>{
      const el = document.createElement('div');
      el.style.padding='8px'; el.style.margin='8px 0'; el.style.border='1px solid #eef6fb'; el.style.borderRadius='8px'; el.style.background='#fbfdff';
      el.innerHTML = `<div style="font-weight:700">${f.name}</div><ul style="margin:8px 0 0 16px">${f.details.map(xx=>`<li>${xx}</li>`).join('')}</ul>`;
      floorsContainer.appendChild(el);
    });
  } else if(info && info.menu){
    floorsContainer.innerHTML = `<strong>Menu</strong><div style="margin-top:8px">${info.menu.map(i=>`${i.item} — ₹${i.price}`).join('<br>')}</div>`;
  } else {
    floorsContainer.innerHTML = `<div style="color:var(--muted)">No detailed floors data for this block (you can add more to DETAILS object)</div>`;
  }
  if(info && info.wash) {
    const p = document.createElement('div'); p.style.marginTop='8px'; p.innerHTML = `<strong>Washrooms:</strong> ${info.wash}`; floorsContainer.appendChild(p);
  }
  if(info && info.extra) {
    const p = document.createElement('div'); p.style.marginTop='8px'; p.innerHTML = info.extra; floorsContainer.appendChild(p);
  }
}

/* Build markers and UI */
populateUI();
showDetails('entrance'); // default

/* ----- PATHFINDING + ANIMATION ----- */
function findRouteBetweenBlocks(startBlockId, endBlockId){
  // map blocks to nearest nodes
  const sBlock = BLOCKS[startBlockId];
  const eBlock = BLOCKS[endBlockId];
  if(!sBlock || !eBlock) return { nodes:[], blocks:[] };

  const sNode = nearestNodeToBlock(sBlock);
  const eNode = nearestNodeToBlock(eBlock);
  const nodePath = dijkstra(sNode, eNode);
  if(nodePath.length===0){
    return { nodes:[], blocks:[] };
  }
  // produce list of percent coords including start block and end block
  const coords = [];
  coords.push({x:sBlock.x, y:sBlock.y, kind:'block', id:startBlockId});
  nodePath.forEach(nid => coords.push({x:NODES[nid].x, y:NODES[nid].y, kind:'node', id:nid}));
  coords.push({x:eBlock.x, y:eBlock.y, kind:'block', id:endBlockId});
  // compress near-duplicates (if a node equals a block pos)
  const compressed = [];
  for(const c of coords){
    const prev = compressed[compressed.length-1];
    if(prev){
      const dx = prev.x - c.x; const dy = prev.y - c.y;
      if(Math.hypot(dx,dy) < 0.25) continue; // skip very close
    }
    compressed.push(c);
  }
  return {coords:compressed};
}

/* Animate dot along the coords (percent -> px) with requestAnimationFrame */
let anim = { running:false, requestId:null };
function animateDotAlong(coordsPercent){
  // prepare pixel points
  const mapRect = mapEl.getBoundingClientRect();
  const pts = coordsPercent.map(p => pctToPx(p.x, p.y, mapRect));
  if(pts.length < 2) return;
  // create polyline segments lengths
  const segs = [];
  let total = 0;
  for(let i=0;i<pts.length-1;i++){
    const a=pts[i], b=pts[i+1];
    const dx=b.x-a.x, dy=b.y-a.y; const len=Math.hypot(dx,dy);
    segs.push({a,b,len,dx,dy});
    total += len;
  }
  // speed px per second
  const speed = 120; // px/s (adjust to taste)
  const duration = total / speed; // seconds
  // ensure routeDot visible
  routeDot.style.display='block';
  // center dot initially at first point
  routeDot.style.left = pts[0].x + 'px';
  routeDot.style.top  = pts[0].y + 'px';
  // remove previous directions and populate with block names encountered
  directionsList.innerHTML = '';
  // compute list of unique blocks encountered in coordsPercent (in order)
  const encounteredBlocks = coordsPercent.filter(c => c.kind==='block').map(c=>c.id);
  // show initial direction items (will fill as we progress)
  encounteredBlocks.forEach(id => {
    const el = document.createElement('div'); el.className='item'; el.textContent = '→ ' + BLOCKS[id].name; directionsList.appendChild(el);
  });

  // animation state
  let t0 = null; let traveled = 0;
  function step(ts){
    if(!t0) t0 = ts;
    const elapsed = (ts - t0)/1000; // seconds
    const dist = Math.min(elapsed * speed, total);
    // find which segment and offset
    let acc=0, segIndex=0;
    for(let i=0;i<segs.length;i++){
      if(acc + segs[i].len >= dist){ segIndex=i; break; }
      acc += segs[i].len;
    }
    const seg = segs[segIndex];
    const segOffset = dist - acc;
    const frac = seg.len === 0 ? 0 : segOffset / seg.len;
    const cx = seg.a.x + seg.dx * frac;
    const cy = seg.a.y + seg.dy * frac;
    routeDot.style.left = cx + 'px';
    routeDot.style.top  = cy + 'px';
    // if finished
    if(dist >= total - 0.5){
      cancelAnimationFrame(anim.requestId);
      anim.running = false;
      // ensure final pos is last
      const last = pts[pts.length-1];
      routeDot.style.left = last.x + 'px';
      routeDot.style.top  = last.y + 'px';
      return;
    }
    anim.requestId = requestAnimationFrame(step);
  }
  // start
  if(anim.running && anim.requestId) cancelAnimationFrame(anim.requestId);
  anim.running = true;
  anim.requestId = requestAnimationFrame(step);
}

/* Bind show route button */
document.getElementById('showRouteBtn').addEventListener('click', ()=>{
  const s = startSelect.value, e = endSelect.value;
  if(!s || !e){ alert('Choose start and end'); return; }
  if(s === e){ alert('Start and end are same'); return; }
  const route = findRouteBetweenBlocks(s,e);
  if(!route || !route.coords || route.coords.length < 2){
    alert('No route found between selected blocks (try different pair).');
    return;
  }
  // show detailed textual directions (list of block names encountered)
  const routeBlocks = route.coords.filter(c => c.kind === 'block').map(c => c.id);
  // quick directions summary
  const summary = routeBlocks.map(id => BLOCKS[id].name).join(' → ');
  document.getElementById('directionsList').innerHTML = `<div class="item">Route: ${summary}</div>`;
  // run animation with full coords
  drawRouteLine(route.coords);
animateDotAlong(route.coords);
});

/* allow clicking any building marker to set start or show details */
mapEl.addEventListener('click', (evt)=>{
  const el = evt.target.closest('.building');
  if(!el) return;
  const id = el.dataset.id;
  // if Shift key held -> set as End; else set as Start
  if(evt.shiftKey){
    endSelect.value = id;
    alert('Set ' + BLOCKS[id].name + ' as END (Shift-click toggled). Now click Show Route.');
  } else {
    startSelect.value = id;
    showDetails(id);
  }
});

/* Provide canteen menu data */
BLOCKS.canteen.menu = [
  {item:'Veg Meal', price:60},
  {item:'Fried Rice', price:80},
  {item:'Tea', price:10},
  {item:'Coffee', price:15},
  {item:'Samosa', price:15}
];
document.getElementById('canteenMenu').innerHTML = BLOCKS.canteen.menu.map(m=>`${m.item} — ₹${m.price}`).join('<br>');

/* quick helpers */
function pxForPercentPt(p){ const r = mapEl.getBoundingClientRect(); return pctToPx(p.x, p.y, r); }

/* Optional: draw hidden node markers for debugging (commented out) */
/*
for(const nid in NODES){
  const p = NODES[nid];
  const dot = document.createElement('div');
  dot.style.position='absolute';
  dot.style.left = p.x + '%'; dot.style.top = p.y + '%';
  dot.style.width='6px'; dot.style.height='6px'; dot.style.background='red'; dot.style.borderRadius='50%';
  dot.style.transform='translate(-50%,-50%)';
  mapEl.appendChild(dot);
}
*/

</script>
</body>
</html>



