import React, { useState, useEffect, useRef } from 'react';

// Tailwind is no longer imported as an external CSS file to avoid missing file errors
// Ensure Tailwind is properly included in your project via PostCSS or CDN in index.html

export default function CampusNavigator() {
  const BLOCKS = {
    entrance: {name:'Entrance', x:50, y:50},
    humanities: {name:'Humanities & Sciences', x:150, y:50},
    library: {name:'Library', x:300, y:50},
    firstyear: {name:'1st Year', x:300, y:200},
    principal: {name:'Principal Office', x:400, y:50},
    admin: {name:'Admin Office', x:400, y:200},
    rnd: {name:'R&D Cell', x:50, y:300},
    mechanical: {name:'Mechanical', x:150, y:300},
    emerging: {name:'Emerging', x:300, y:300},
    cse: {name:'CSE', x:400, y:300},
    it: {name:'IT', x:500, y:300},
    sports: {name:'Sports Complex', x:500, y:100},
    playground: {name:'Playground', x:350, y:400},
    canteen: {name:'Canteen', x:250, y:400},
    cricket: {name:'Cricket Ground', x:500, y:400}
  };

  const PATHS = {
    entrance:['humanities'],
    humanities:['entrance','library'],
    library:['humanities','principal','firstyear'],
    firstyear:['library','emerging'],
    principal:['library','admin','sports'],
    admin:['principal','emerging'],
    rnd:['mechanical'],
    mechanical:['rnd','emerging'],
    emerging:['mechanical','firstyear','admin','cse','playground','canteen'],
    cse:['emerging','it'],
    it:['cse','sports'],
    sports:['it','principal'],
    playground:['emerging','canteen'],
    canteen:['playground','emerging'],
    cricket:['sports']
  };

  const [startBlock, setStartBlock] = useState('entrance');
  const [endBlock, setEndBlock] = useState('canteen');
  const [directions, setDirections] = useState([]);
  const routeContainerRef = useRef(null);

  const findPath = (start,end) => {
    let queue=[[start]];
    let visited=new Set();
    while(queue.length>0){
      let path=queue.shift();
      let node=path[path.length-1];
      if(node===end) return path;
      visited.add(node);
      PATHS[node].forEach(n=>{
        if(!visited.has(n)) queue.push([...path,n]);
      });
    }
    return [];
  };

  const animateRoute = (path) => {
    const container = routeContainerRef.current;
    container.innerHTML = '';
    setDirections([]);
    if(path.length<2) return;
    let idx = 0;
    const moveDot = () => {
      if(idx >= path.length-1) return;
      const from = BLOCKS[path[idx]];
      const to = BLOCKS[path[idx+1]];
      const dot = document.createElement('div');
      dot.style.position = 'absolute';
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = 'rgba(59,130,246,0.9)';
      container.appendChild(dot);
      let steps=50,step=0;
      const interval=setInterval(()=>{
        const x=from.x + (to.x-from.x)*(step/steps);
        const y=from.y + (to.y-from.y)*(step/steps);
        dot.style.left=x+'px';
        dot.style.top=y+'px';
        step++;
        if(step>steps){
          clearInterval(interval);
          setDirections(prev=>[...prev, `Walk from ${from.name} to ${to.name}`]);
          idx++;
          moveDot();
        }
      },30);
    };
    moveDot();
  };

  const handleShowRoute = () => {
    const path = findPath(startBlock,endBlock);
    animateRoute(path);
  };

  return (
    <div className="p-6 min-h-screen" style={{background:'linear-gradient(to bottom, #f8fafc, #ffffff)'}}>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Campus Navigator — React</h1>
        <div className="flex gap-2">
          <select value={startBlock} onChange={e=>setStartBlock(e.target.value)} className="border rounded px-3 py-2 text-sm">
            {Object.keys(BLOCKS).map(id=><option key={id} value={id}>{BLOCKS[id].name}</option>)}
          </select>
          <select value={endBlock} onChange={e=>setEndBlock(e.target.value)} className="border rounded px-3 py-2 text-sm">
            {Object.keys(BLOCKS).map(id=><option key={id} value={id}>{BLOCKS[id].name}</option>)}
          </select>
          <button onClick={handleShowRoute} className="px-3 py-2 bg-sky-600 text-white rounded-md text-sm">Show Route</button>
        </div>
      </header>

      <main className="grid grid-cols-12 gap-4">
        <section className="col-span-8 relative" style={{height:'640px'}}>
          <div ref={routeContainerRef} className="absolute inset-0"></div>
          {Object.entries(BLOCKS).map(([id,b])=>(
            <div key={id} className="absolute rounded-lg border border-slate-400 shadow-sm p-2 text-xs" style={{left:b.x, top:b.y}}>{b.name}</div>
          ))}
        </section>

        <aside className="col-span-4">
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold">Turn-by-Turn Directions</h2>
            <div className="text-sm mt-2">
              {directions.map((d,i)=><div key={i}>{d}</div>)}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
