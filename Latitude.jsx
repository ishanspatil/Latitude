import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

const BANDS = [
  { id:0, range:"90°–80°N", name:"Ice Cap", subtitle:"Permanent Ice, Polar Desert", latStart:90, latEnd:80, temp:-35, rainfall:50, population:0, biodiversity:5, elevation:0, icon:"❄️",
    vegetation:"None — permanent ice sheet", climate:"Polar. 24hr dark/light cycles. Rarely above 0°C.", cultures:"No permanent settlement. Research stations only.", resources:"Freshwater locked in ice, emerging Arctic routes", industries:"Research, military monitoring", water:"Arctic Ocean — increasingly ice-free summers", keyFact:"The Arctic Ocean beneath the ice is surprisingly productive — algae grow on the underside of sea ice, feeding an entire food web.", places:["Arctic Ocean","North Pole"] },
  { id:1, range:"80°–70°N", name:"High Arctic", subtitle:"Tundra & Permafrost", latStart:80, latEnd:70, temp:-20, rainfall:150, population:1, biodiversity:10, elevation:200, icon:"🧊",
    vegetation:"Mosses, lichens, dwarf shrubs. No trees.", climate:"Polar tundra. Permafrost. Brief summer thaw.", cultures:"Inuit, Sámi fringe. Deep cold-adaptation spanning millennia.", resources:"Oil, gas, rare earths — accessible as permafrost thaws", industries:"Resource extraction, indigenous subsistence, research", water:"Seasonal meltwater, permafrost lakes", keyFact:"Climate change is rewriting geography here faster than anywhere — permafrost collapse releases ancient methane and reshapes coastlines.", places:["Svalbard","N. Greenland","Siberian coast"] },
  { id:2, range:"70°–60°N", name:"Subarctic", subtitle:"Taiga — Earth's Largest Biome", latStart:70, latEnd:60, temp:-10, rainfall:400, population:5, biodiversity:25, elevation:300, icon:"🌲",
    vegetation:"Boreal coniferous forest — spruce, pine, larch.", climate:"Subarctic. 8-month winters, explosive short summers.", cultures:"Viking origins. Russian frontier. Finnish sisu. Winter survival = collective problem.", resources:"Timber, hydropower, minerals, massive carbon sink", industries:"Forestry, hydroelectric, mining, fishing", water:"Vast rivers — Ob, Yenisei, Lena drain into Arctic", keyFact:"The boreal forest stores more carbon than all tropical rainforests combined. It's Earth's thermostat.", places:["Finland","Siberia","Alaska","N. Canada"] },
  { id:3, range:"60°–50°N", name:"Power Belt", subtitle:"Temperate-Boreal Transition", latStart:60, latEnd:50, temp:5, rainfall:700, population:40, biodiversity:45, elevation:250, icon:"⚡",
    vegetation:"Mixed deciduous-coniferous forest. Meadows.", climate:"Cool temperate. Four seasons. Oceanic west, continental inland.", cultures:"Drove the Industrial Revolution. Collective structures.", resources:"Coal seams, fertile glacial soils, navigable rivers", industries:"Heavy industry, manufacturing, tech, agriculture", water:"Dense rivers — Thames, Rhine, Volga", keyFact:"Punches absurdly above its weight — the sweet spot between 'harsh enough to demand technology' and 'mild enough to accumulate surplus.'", places:["S. Scandinavia","Scotland","Moscow","S. Canada"] },
  { id:4, range:"50°–40°N", name:"Temperate Heartland", subtitle:"Civilization's Engine Room", latStart:50, latEnd:40, temp:12, rainfall:800, population:85, biodiversity:55, elevation:400, icon:"🏛️",
    vegetation:"Deciduous forest, grasslands, steppe. Wheat, wine, olives.", climate:"Temperate. Mediterranean coasts, continental inland.", cultures:"Most great empires. Dense cities. Grain surplus → states → empires.", resources:"Rich soils, diverse minerals, trade routes", industries:"Finance, tech, agriculture, automotive, aerospace", water:"Great rivers — Danube, Yangtze, Mississippi", keyFact:"The densest concentration of historical civilizational power on Earth.", places:["France","Germany","US East","N. China","Japan"] },
  { id:5, range:"40°–30°N", name:"Cradle Belt", subtitle:"Where Civilization Began", latStart:40, latEnd:30, temp:20, rainfall:500, population:90, biodiversity:50, elevation:500, icon:"🏺",
    vegetation:"Mediterranean scrub, grasslands, desert margins.", climate:"Subtropical. Mediterranean coasts, arid interiors.", cultures:"Fertile Crescent, Nile, Indus, Yellow River — birthplaces of civilization.", resources:"Ancient soils, oil, strategic waterways", industries:"Agriculture, tech hubs, tourism", water:"Nile, Tigris-Euphrates, Indus, Yellow River", keyFact:"River valleys birthed first cities; deserts between them let distinct civilizations evolve independently.", places:["California","Turkey","Fertile Crescent","N. India"] },
  { id:6, range:"30°–20°N", name:"Desert–Monsoon", subtitle:"Hadley Cell Divide", latStart:30, latEnd:20, temp:28, rainfall:300, population:75, biodiversity:35, elevation:350, icon:"🏜️",
    vegetation:"Desert scrub west, monsoon agriculture east.", climate:"Subtropical high-pressure → deserts west. Monsoons east.", cultures:"Oasis routes. Gulf oil states. India's heartland.", resources:"Oil (massive), solar potential, monsoon agriculture", industries:"Oil & gas, agriculture, solar energy", water:"Monsoon rains east; wadis and oases west", keyFact:"The energy powering the industrial belt largely comes from here — fossil fuels and future solar.", places:["Sahara","Arabia","Rajasthan","Florida"] },
  { id:7, range:"20°–10°N", name:"Tropical Monsoon", subtitle:"Spice Belt", latStart:20, latEnd:10, temp:30, rainfall:1500, population:70, biodiversity:75, elevation:200, icon:"🌿",
    vegetation:"Savannas, tropical dry forests. Rice, sugarcane, spices.", climate:"Tropical wet-dry. Monsoon-driven seasons.", cultures:"Societies built around seasonal water. Spice trade funded Age of Exploration.", resources:"Spices, tropical agriculture, timber", industries:"Agriculture, textiles, emerging tech", water:"Monsoon rivers, seasonal flooding, rich deltas", keyFact:"Most biodiverse transition zone — spice trade from here changed world history.", places:["Central America","W. Africa","S. India","SE Asia"] },
  { id:8, range:"10°N–0°", name:"Equatorial North", subtitle:"Rainforest Canopy", latStart:10, latEnd:0, temp:27, rainfall:2500, population:45, biodiversity:95, elevation:100, icon:"🌳",
    vegetation:"Dense rainforest. Most species per hectare. Poor soils.", climate:"Equatorial. Peak solar, minimal seasons. Daily storms.", cultures:"Distributed, forest-adapted, trade-network societies.", resources:"Biodiversity, timber, minerals beneath", industries:"Plantation agriculture, mining, research", water:"Amazon tributaries, Congo River", keyFact:"Tropical disease loads historically limited state formation — controversial but real factor.", places:["Amazon","Congo","Indonesia","Malaysia"] },
  { id:9, range:"0°–10°S", name:"Equatorial South", subtitle:"Humanity's Launchpad", latStart:0, latEnd:-10, temp:26, rainfall:2200, population:50, biodiversity:90, elevation:800, icon:"🧬",
    vegetation:"Rainforest + East African highland exception.", climate:"Equatorial lowlands + highland exception. Fastest-growing cities.", cultures:"East African Rift: where Homo sapiens evolved.", resources:"Coffee, minerals, geothermal energy", industries:"Coffee, tea, mining, emerging tech", water:"Rift Valley lakes — Victoria, Tanganyika", keyFact:"East African highlands break the tropical pattern — our species was born here.", places:["Amazon core","Congo","Kenya","Ethiopia"] },
  { id:10, range:"10°–20°S", name:"Southern Tropical", subtitle:"Resource Extraction Zone", latStart:-10, latEnd:-20, temp:25, rainfall:1200, population:25, biodiversity:70, elevation:600, icon:"⛏️",
    vegetation:"Savanna, dry tropical forest. Cerrado → soy/cattle.", climate:"Tropical wet-dry. Less land than northern mirror.", cultures:"Indigenous communities. Colonial extraction legacy.", resources:"Copper, iron, soy, cattle", industries:"Mining, ranching, soy agriculture", water:"Zambezi, Pantanal wetlands", keyFact:"The cerrado feeds the 40°–50°N belt. Global economy's resource extraction zone.", places:["N. Australia","Zambia","Bolivia","Cerrado"] },
  { id:11, range:"20°–30°S", name:"Southern Subtropical", subtitle:"Desert Mirrors", latStart:-20, latEnd:-30, temp:22, rainfall:400, population:35, biodiversity:40, elevation:500, icon:"🍷",
    vegetation:"Deserts (Atacama, Kalahari, Outback) + productive pockets.", climate:"Same Hadley dynamics as north. Desert interiors.", cultures:"Southern economic engines. Wine cultures.", resources:"Minerals, wine regions, lithium", industries:"Mining, viticulture, finance", water:"Orange River, coastal aquifers", keyFact:"Same physics as 20–30°N but far less land = smaller populations.", places:["São Paulo","Johannesburg","Atacama"] },
  { id:12, range:"30°–40°S", name:"Southern Temperate", subtitle:"Pleasant but Sparse", latStart:-30, latEnd:-40, temp:15, rainfall:700, population:20, biodiversity:45, elevation:200, icon:"🐑",
    vegetation:"Grasslands, Mediterranean scrub, temperate forest.", climate:"Mediterranean/oceanic. Mild, pleasant.", cultures:"Shaped by European colonization.", resources:"Agricultural land, fisheries, wind energy", industries:"Agriculture, wine, wool, tourism", water:"Coastal waters, Murray-Darling", keyFact:"Mirrors 30°–40°N but barely any land exists here.", places:["Buenos Aires","Cape Town","Sydney","NZ"] },
  { id:13, range:"40°–50°S", name:"Roaring Forties", subtitle:"Windiest Latitudes", latStart:-40, latEnd:-50, temp:8, rainfall:1000, population:2, biodiversity:30, elevation:100, icon:"💨",
    vegetation:"Windswept grasslands, cold rainforest.", climate:"Cool maritime. Constant westerlies. Frequent storms.", cultures:"Patagonian gauchos, Māori. Very sparse.", resources:"Fisheries, wind energy, sheep", industries:"Sheep, fishing, wind energy", water:"Southern Ocean — global circulation driver", keyFact:"Unbroken ocean lets winds circle the planet. Enormous planetary importance.", places:["Patagonia","S. New Zealand"] },
  { id:14, range:"50°–60°S", name:"Subantarctic", subtitle:"Ocean Realm", latStart:-50, latEnd:-60, temp:2, rainfall:600, population:0, biodiversity:20, elevation:50, icon:"🐋",
    vegetation:"Tussock grass on islands. Marine ecosystems.", climate:"Subpolar maritime. Cold, wet, windy.", cultures:"Scientific outposts. Contested sovereignty.", resources:"Krill — underpins Southern Ocean food web", industries:"Research, fishing", water:"Antarctic Convergence Zone", keyFact:"Krill here underpins the entire Southern Ocean food web.", places:["Tierra del Fuego","Falklands","S. Georgia"] },
  { id:15, range:"60°–90°S", name:"Antarctica", subtitle:"Frozen Continent", latStart:-60, latEnd:-90, temp:-50, rainfall:50, population:0, biodiversity:8, elevation:2300, icon:"🏔️",
    vegetation:"Almost none. Ice up to 4.8km thick.", climate:"Polar. Coldest: -89.2°C. Technically a desert.", cultures:"No permanent pop. Antarctic Treaty expires 2048.", resources:"70% of Earth's freshwater. Minerals beneath.", industries:"Scientific research only (by treaty)", water:"26.5M km³ frozen freshwater", keyFact:"What happens when the Antarctic Treaty expires in 2048 is one of the big quiet geopolitical questions.", places:["Antarctic Peninsula","South Pole"] },
];

const LAYERS = [
  { key:"temp", label:"Temperature", unit:"°C", icon:"🌡️",
    stops:[{v:-50,c:[26,35,126]},{v:-20,c:[2,136,209]},{v:0,c:[77,208,225]},{v:10,c:[255,241,118]},{v:20,c:[255,167,38]},{v:30,c:[244,67,54]},{v:35,c:[183,28,28]}] },
  { key:"rainfall", label:"Rainfall", unit:"mm/yr", icon:"💧",
    stops:[{v:0,c:[210,180,100]},{v:400,c:[180,170,120]},{v:800,c:[100,181,246]},{v:1500,c:[25,118,210]},{v:2500,c:[13,71,161]}] },
  { key:"population", label:"Population", unit:"density", icon:"👥",
    stops:[{v:0,c:[20,20,40]},{v:20,c:[60,40,80]},{v:50,c:[180,120,255]},{v:80,c:[255,215,0]},{v:100,c:[255,248,225]}] },
  { key:"biodiversity", label:"Biodiversity", unit:"index", icon:"🌿",
    stops:[{v:0,c:[80,60,50]},{v:25,c:[141,110,99]},{v:50,c:[129,199,132]},{v:75,c:[46,125,50]},{v:100,c:[27,94,32]}] },
  { key:"elevation", label:"Elevation", unit:"m", icon:"⛰️",
    stops:[{v:0,c:[21,101,192]},{v:200,c:[76,175,80]},{v:600,c:[139,195,74]},{v:1200,c:[255,152,0]},{v:2500,c:[121,85,72]}] },
];

function interpolateLayerColor(layer, value) {
  const s = layer.stops;
  if (value <= s[0].v) return s[0].c;
  if (value >= s[s.length-1].v) return s[s.length-1].c;
  for (let i = 0; i < s.length - 1; i++) {
    if (value >= s[i].v && value <= s[i+1].v) {
      const t = (value - s[i].v) / (s[i+1].v - s[i].v);
      return s[i].c.map((c, j) => Math.round(c + (s[i+1].c[j] - c) * t));
    }
  }
  return s[s.length-1].c;
}

function createEarthTexture() {
  const W = 2048, H = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Ocean gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, H);
  oceanGrad.addColorStop(0, "#0a1b3d");
  oceanGrad.addColorStop(0.15, "#0d2a5c");
  oceanGrad.addColorStop(0.3, "#0f3875");
  oceanGrad.addColorStop(0.5, "#0c4a8e");
  oceanGrad.addColorStop(0.7, "#0f3875");
  oceanGrad.addColorStop(0.85, "#0d2a5c");
  oceanGrad.addColorStop(1, "#0a1b3d");
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, W, H);

  // Subtle ocean noise
  for (let i = 0; i < 40000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const a = Math.random() * 0.04;
    ctx.fillStyle = `rgba(100,180,255,${a})`;
    ctx.fillRect(x, y, 2, 1);
  }

  function lonLatToXY(lon, lat) {
    return [(lon + 180) / 360 * W, (90 - lat) / 180 * H];
  }

  function drawContinent(points, fillColor, edgeColor) {
    ctx.beginPath();
    const [sx, sy] = lonLatToXY(points[0][0], points[0][1]);
    ctx.moveTo(sx, sy);
    for (let i = 1; i < points.length; i++) {
      const [x, y] = lonLatToXY(points[i][0], points[i][1]);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = edgeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  const land = "rgba(45,65,45,0.92)";
  const edge = "rgba(80,110,80,0.6)";
  const ice = "rgba(200,215,230,0.9)";
  const iceEdge = "rgba(170,190,210,0.6)";
  const desert = "rgba(90,80,55,0.88)";
  const desEdge = "rgba(120,105,70,0.5)";

  // Africa
  drawContinent([[-17,35],[-5,36],[10,37],[15,32],[25,32],[33,30],[35,27],[38,20],[42,12],[50,12],[51,8],[45,2],[42,-2],[40,-5],[35,-8],[33,-15],[35,-22],[33,-27],[30,-30],[28,-33],[26,-34],[20,-35],[18,-34],[15,-28],[12,-18],[12,-10],[10,-5],[8,4],[5,5],[2,6],[-2,5],[-8,5],[-12,8],[-16,12],[-17,15],[-17,21],[-13,25],[-15,28],[-17,32]], land, edge);
  // Europe
  drawContinent([[-10,36],[-9,38],[-8,43],[-2,44],[0,46],[2,48],[5,48],[8,48],[6,54],[8,55],[10,54],[12,55],[14,54],[17,55],[20,54],[22,55],[24,54],[26,55],[28,54],[30,55],[32,52],[35,48],[40,48],[42,45],[38,42],[35,40],[30,38],[28,37],[25,36],[20,36],[15,38],[12,38],[8,44],[5,46],[3,47],[0,44],[-3,44],[-5,44],[-8,44],[-9,43],[-10,40]], land, edge);
  // Asia
  drawContinent([[40,48],[45,52],[50,55],[55,58],[60,60],[65,62],[70,65],[80,68],[90,70],[100,68],[110,65],[120,62],[125,60],[130,55],[135,52],[140,50],[142,46],[140,42],[135,38],[130,35],[128,33],[125,30],[120,25],[115,22],[110,20],[108,15],[105,12],[100,14],[98,16],[95,20],[90,22],[85,23],[80,25],[75,24],[70,22],[68,24],[65,25],[62,26],[55,25],[50,27],[45,30],[42,32],[40,35],[38,42],[40,45]], land, edge);
  // India subcontinent
  drawContinent([[68,24],[72,22],[75,20],[78,16],[80,12],[80,8],[77,8],[75,10],[72,14],[70,18],[68,22]], land, edge);
  // North America
  drawContinent([[-168,65],[-162,64],[-150,62],[-140,60],[-135,58],[-130,55],[-125,50],[-124,46],[-122,42],[-118,35],[-115,32],[-110,30],[-105,28],[-100,26],[-97,26],[-95,28],[-92,30],[-88,30],[-85,30],[-82,28],[-81,26],[-80,25],[-82,30],[-78,35],[-75,38],[-73,41],[-70,42],[-68,44],[-66,45],[-65,47],[-60,47],[-58,50],[-55,52],[-60,55],[-65,58],[-70,60],[-80,62],[-90,65],[-100,68],[-110,70],[-120,72],[-130,71],[-140,68],[-150,65],[-160,66]], land, edge);
  // South America
  drawContinent([[-80,10],[-78,8],[-75,5],[-72,2],[-70,-2],[-72,-5],[-75,-10],[-76,-15],[-72,-18],[-68,-22],[-66,-25],[-65,-30],[-67,-35],[-68,-40],[-70,-45],[-72,-50],[-74,-52],[-72,-48],[-70,-42],[-68,-38],[-65,-35],[-62,-30],[-58,-28],[-55,-25],[-50,-22],[-48,-18],[-45,-15],[-42,-12],[-40,-8],[-38,-5],[-36,-2],[-35,0],[-38,2],[-42,5],[-48,6],[-52,5],[-55,6],[-60,8],[-65,10],[-70,11],[-75,11],[-78,10]], land, edge);
  // Australia
  drawContinent([[115,-12],[120,-14],[125,-14],[130,-12],[135,-12],[138,-15],[140,-18],[142,-20],[145,-22],[148,-24],[150,-26],[152,-28],[153,-30],[150,-33],[148,-35],[145,-38],[140,-38],[138,-36],[135,-34],[132,-32],[130,-32],[128,-30],[125,-28],[122,-26],[118,-24],[116,-22],[114,-22],[113,-24],[115,-26],[116,-30],[115,-32],[114,-33],[113,-32],[114,-28],[114,-24],[113,-20],[114,-18],[115,-15]], land, edge);
  // Greenland
  drawContinent([[-55,60],[-50,62],[-45,65],[-40,68],[-35,72],[-30,75],[-25,78],[-20,80],[-25,82],[-30,83],[-40,82],[-50,80],[-55,78],[-58,75],[-60,72],[-58,68],[-55,64]], ice, iceEdge);
  // Antarctica
  drawContinent([[-180,-65],[-150,-68],[-120,-70],[-90,-72],[-60,-70],[-30,-68],[0,-68],[30,-70],[60,-68],[90,-70],[120,-68],[150,-70],[180,-65],[180,-90],[-180,-90]], ice, iceEdge);

  // Sahara / Arabian desert overlay
  drawContinent([[-15,20],[-5,22],[5,25],[15,28],[25,30],[35,28],[40,25],[45,22],[50,20],[55,18],[50,15],[40,15],[30,18],[20,20],[10,18],[0,16],[-10,18]], desert, desEdge);
  // Thar
  drawContinent([[68,28],[72,26],[76,24],[72,22],[68,24]], desert, desEdge);
  // Australian interior
  drawContinent([[125,-20],[130,-22],[135,-24],[138,-26],[140,-28],[138,-30],[135,-30],[130,-28],[126,-26],[124,-24],[125,-22]], desert, desEdge);
  // Atacama
  drawContinent([[-72,-18],[-70,-22],[-70,-28],[-68,-30],[-66,-28],[-68,-24],[-70,-20]], desert, desEdge);

  // Texture for vegetation/green variation
  for (let i = 0; i < 15000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const lat = 90 - (y / H) * 180;
    if (Math.abs(lat) < 25) {
      ctx.fillStyle = `rgba(20,80,20,${Math.random()*0.06})`;
      ctx.fillRect(x, y, 3, 2);
    }
  }

  return canvas;
}

function createOverlayTexture(layerKey) {
  const W = 2048, H = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  if (!layerKey) {
    ctx.clearRect(0, 0, W, H);
    return canvas;
  }

  const layer = LAYERS.find(l => l.key === layerKey);

  // Create smooth gradient by interpolating between band values
  const points = [];
  BANDS.forEach(band => {
    const midLat = (band.latStart + band.latEnd) / 2;
    const y = (90 - midLat) / 180;
    points.push({ y, value: band[layerKey] });
  });
  points.sort((a, b) => a.y - b.y);

  // Draw smooth gradient
  for (let py = 0; py < H; py++) {
    const t = py / H;
    // Interpolate value at this latitude
    let value;
    if (t <= points[0].y) {
      value = points[0].value;
    } else if (t >= points[points.length-1].y) {
      value = points[points.length-1].value;
    } else {
      for (let i = 0; i < points.length - 1; i++) {
        if (t >= points[i].y && t <= points[i+1].y) {
          const lt = (t - points[i].y) / (points[i+1].y - points[i].y);
          const smooth = lt * lt * (3 - 2 * lt); // smoothstep
          value = points[i].value + (points[i+1].value - points[i].value) * smooth;
          break;
        }
      }
    }
    const col = interpolateLayerColor(layer, value);
    ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.62)`;
    ctx.fillRect(0, py, W, 1);
  }

  return canvas;
}

function MiniBar({ value, max, min, color }) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  return (
    <div style={{ width: "100%", height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 2, transition: "width 0.6s ease-out" }} />
    </div>
  );
}

export default function EarthGlobe() {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const [selected, setSelected] = useState(null);
  const [activeLayer, setActiveLayer] = useState(null);
  const [hovered, setHovered] = useState(null);

  const band = selected !== null ? BANDS[selected] : null;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0.5, 4.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050810, 1);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const sun = new THREE.DirectionalLight(0xfff8e8, 1.3);
    sun.position.set(5, 3, 5);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x6688cc, 0.3);
    fill.position.set(-4, -2, 3);
    scene.add(fill);

    // Stars
    const starsGeo = new THREE.BufferGeometry();
    const sp = new Float32Array(4500);
    for (let i = 0; i < 4500; i++) sp[i] = (Math.random() - 0.5) * 100;
    starsGeo.setAttribute("position", new THREE.BufferAttribute(sp, 3));
    scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, sizeAttenuation: true })));

    const globe = new THREE.Group();
    scene.add(globe);

    // Earth texture
    const earthCanvas = createEarthTexture();
    const earthTex = new THREE.CanvasTexture(earthCanvas);
    earthTex.wrapS = THREE.RepeatWrapping;
    const earthGeo = new THREE.SphereGeometry(2, 128, 64);
    const earthMat = new THREE.MeshPhongMaterial({ map: earthTex, shininess: 12 });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globe.add(earthMesh);

    // Overlay sphere
    const overlayCanvas = createOverlayTexture(null);
    const overlayTex = new THREE.CanvasTexture(overlayCanvas);
    overlayTex.wrapS = THREE.RepeatWrapping;
    const overlayGeo = new THREE.SphereGeometry(2.005, 128, 64);
    const overlayMat = new THREE.MeshBasicMaterial({ map: overlayTex, transparent: true, opacity: 0, depthWrite: false });
    const overlayMesh = new THREE.Mesh(overlayGeo, overlayMat);
    globe.add(overlayMesh);

    // Selection highlight band
    const hlGroup = new THREE.Group();
    globe.add(hlGroup);

    function makeHighlightBand(latStart, latEnd) {
      while (hlGroup.children.length) hlGroup.remove(hlGroup.children[0]);
      const thetaS = ((90 - latStart) * Math.PI) / 180;
      const thetaL = ((latStart - latEnd) * Math.PI) / 180;
      const hlGeo = new THREE.SphereGeometry(2.012, 128, 16, 0, Math.PI * 2, thetaS, thetaL);
      const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide });
      hlGroup.add(new THREE.Mesh(hlGeo, hlMat));
      // Edge rings
      [thetaS, thetaS + thetaL].forEach(theta => {
        const r = 2.015 * Math.sin(theta);
        const y = 2.015 * Math.cos(theta);
        const ringGeo = new THREE.TorusGeometry(r, 0.006, 8, 128);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.y = y;
        ring.rotation.x = Math.PI / 2;
        hlGroup.add(ring);
      });
    }

    // Latitude lines
    for (let lat = -80; lat <= 80; lat += 10) {
      const theta = ((90 - lat) * Math.PI) / 180;
      const r = 2.008 * Math.sin(theta);
      const y = 2.008 * Math.cos(theta);
      const ringGeo = new THREE.TorusGeometry(r, lat === 0 ? 0.004 : 0.0015, 8, 200);
      const ringMat = new THREE.MeshBasicMaterial({
        color: lat === 0 ? 0xffcc00 : 0xffffff,
        transparent: true,
        opacity: lat === 0 ? 0.35 : 0.1,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = y;
      ring.rotation.x = Math.PI / 2;
      globe.add(ring);
    }

    // Atmosphere
    const atmosGeo = new THREE.SphereGeometry(2.2, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec3 vNorm; varying vec3 vPos;
        void main(){ vNorm=normalize(normalMatrix*normal); vPos=(modelViewMatrix*vec4(position,1.0)).xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `varying vec3 vNorm; varying vec3 vPos;
        void main(){ float rim=1.0-max(0.0,dot(normalize(-vPos),vNorm)); gl_FragColor=vec4(0.3,0.55,1.0,pow(rim,3.5)*0.55); }`,
      transparent: true, side: THREE.BackSide, depthWrite: false,
    });
    globe.add(new THREE.Mesh(atmosGeo, atmosMat));

    // Invisible band hit meshes
    const hitMeshes = [];
    BANDS.forEach(b => {
      const ts = ((90 - b.latStart) * Math.PI) / 180;
      const tl = ((b.latStart - b.latEnd) * Math.PI) / 180;
      const g = new THREE.SphereGeometry(2.02, 64, 8, 0, Math.PI * 2, ts, tl);
      const m = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(g, m);
      mesh.userData.bandId = b.id;
      globe.add(mesh);
      hitMeshes.push(mesh);
    });

    // Interaction
    const state = { dragging: false, lx: 0, ly: 0, sx: 0, sy: 0, ry: 0.4, rx: 0.15, vy: 0.0015, vx: 0, auto: true, lastT: 0, selId: null, targetOverlayOpacity: 0 };
    sceneRef.current = { renderer, camera, scene, globe, overlayMesh, overlayTex, overlayCanvas, state, hitMeshes, makeHighlightBand, hlGroup };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const el = renderer.domElement;

    function gp(e) {
      const r = el.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: cx - r.left, y: cy - r.top, w: r.width, h: r.height };
    }

    function onDown(e) {
      const p = gp(e);
      Object.assign(state, { dragging: true, lx: p.x, ly: p.y, sx: p.x, sy: p.y, vy: 0, vx: 0, auto: false, lastT: Date.now() });
    }
    function onMove(e) {
      const p = gp(e);
      if (state.dragging) {
        const dx = p.x - state.lx, dy = p.y - state.ly;
        state.ry += dx * 0.005;
        state.rx = Math.max(-1.2, Math.min(1.2, state.rx + dy * 0.004));
        state.vy = dx * 0.0025;
        state.vx = dy * 0.002;
        state.lx = p.x; state.ly = p.y;
      } else {
        mouse.x = (p.x / p.w) * 2 - 1;
        mouse.y = -(p.y / p.h) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(hitMeshes);
        el.style.cursor = hits.length ? "pointer" : "grab";
      }
    }
    function onUp(e) {
      if (!state.dragging) return;
      state.dragging = false;
      const r = el.getBoundingClientRect();
      const cx = e.changedTouches ? e.changedTouches[0].clientX - r.left : e.clientX - r.left;
      const cy = e.changedTouches ? e.changedTouches[0].clientY - r.top : e.clientY - r.top;
      if (Math.sqrt((cx-state.sx)**2 + (cy-state.sy)**2) < 8) {
        mouse.x = (cx / r.width) * 2 - 1;
        mouse.y = -(cy / r.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(hitMeshes);
        if (hits.length) {
          const bid = hits[0].object.userData.bandId;
          state.selId = bid;
          setSelected(bid);
          makeHighlightBand(BANDS[bid].latStart, BANDS[bid].latEnd);
        } else {
          state.selId = null;
          setSelected(null);
          while (hlGroup.children.length) hlGroup.remove(hlGroup.children[0]);
        }
      }
      state.lastT = Date.now();
    }

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove", (e) => {
      if (!state.dragging) return;
      const cx = e.touches[0].clientX - el.getBoundingClientRect().left;
      const cy = e.touches[0].clientY - el.getBoundingClientRect().top;
      const dx = cx - state.lx, dy = cy - state.ly;
      state.ry += dx * 0.005;
      state.rx = Math.max(-1.2, Math.min(1.2, state.rx + dy * 0.004));
      state.vy = dx * 0.0025; state.vx = dy * 0.002;
      state.lx = cx; state.ly = cy;
    }, { passive: true });
    el.addEventListener("touchend", onUp);
    el.addEventListener("wheel", (e) => {
      e.preventDefault();
      camera.position.z = Math.max(3.2, Math.min(8, camera.position.z + e.deltaY * 0.003));
    }, { passive: false });

    let anim;
    function loop() {
      anim = requestAnimationFrame(loop);
      if (!state.dragging && Date.now() - state.lastT > 4000) state.auto = true;
      if (state.auto) { state.ry += 0.0012; state.vy *= 0.95; state.vx *= 0.95; }
      else if (!state.dragging) {
        state.ry += state.vy; state.rx += state.vx;
        state.rx = Math.max(-1.2, Math.min(1.2, state.rx));
        state.vy *= 0.97; state.vx *= 0.97;
      }
      globe.rotation.y = state.ry;
      globe.rotation.x = state.rx;

      // Smooth overlay opacity
      const tgt = state.targetOverlayOpacity;
      overlayMat.opacity += (tgt - overlayMat.opacity) * 0.08;

      // Pulse highlight
      hlGroup.children.forEach((c, i) => {
        if (c.material && i === 0) c.material.opacity = 0.15 + Math.sin(Date.now() * 0.003) * 0.06;
      });

      renderer.render(scene, camera);
    }
    loop();

    function onResize() {
      const nw = container.clientWidth, nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener("resize", onResize);
      container.removeChild(el);
      renderer.dispose();
    };
  }, []);

  // Update overlay when layer changes
  useEffect(() => {
    const s = sceneRef.current;
    if (!s.overlayMesh) return;
    const canvas = createOverlayTexture(activeLayer);
    s.overlayMesh.material.map = new THREE.CanvasTexture(canvas);
    s.overlayMesh.material.map.wrapS = THREE.RepeatWrapping;
    s.overlayMesh.material.needsUpdate = true;
    s.state.targetOverlayOpacity = activeLayer ? 1 : 0;
  }, [activeLayer]);

  // Update highlight when selected externally (from sidebar list)
  const selectBand = useCallback((id) => {
    setSelected(id);
    const s = sceneRef.current;
    if (s.state) s.state.selId = id;
    if (id !== null && s.makeHighlightBand) {
      s.makeHighlightBand(BANDS[id].latStart, BANDS[id].latEnd);
    } else if (s.hlGroup) {
      while (s.hlGroup.children.length) s.hlGroup.remove(s.hlGroup.children[0]);
    }
  }, []);

  const layerMeta = activeLayer ? LAYERS.find(l => l.key === activeLayer) : null;

  return (
    <div style={{ width: "100%", height: "100vh", background: "#050810", position: "relative", overflow: "hidden", fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", display: "flex" }}>
      {/* Globe area */}
      <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
        <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} />

        {/* Header */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "20px 24px", zIndex: 10, pointerEvents: "none" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Interactive Atlas</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "white", letterSpacing: "-0.02em" }}>Earth's Latitude Bands</h1>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Drag to rotate · Tap a band · Scroll to zoom</div>
        </div>

        {/* Layer toggles */}
        <div style={{ position: "absolute", top: 96, left: 24, zIndex: 10, display: "flex", flexDirection: "column", gap: 6, pointerEvents: "auto" }}>
          {LAYERS.map(l => {
            const on = activeLayer === l.key;
            return (
              <button key={l.key} onClick={() => setActiveLayer(on ? null : l.key)} style={{
                padding: "7px 14px", borderRadius: 22, cursor: "pointer", fontSize: 11, fontWeight: 500,
                border: on ? "1.5px solid rgba(255,255,255,0.45)" : "1.5px solid rgba(255,255,255,0.1)",
                background: on ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.45)",
                color: on ? "#fff" : "rgba(255,255,255,0.55)",
                backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", transition: "all 0.3s", textAlign: "left",
              }}>
                {l.icon} {l.label}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        {activeLayer && (
          <div style={{
            position: "absolute", bottom: 24, left: 24, zIndex: 10, pointerEvents: "none",
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(16px)", borderRadius: 14, padding: "12px 16px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 8, fontWeight: 500 }}>{layerMeta.icon} {layerMeta.label}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 120, height: 10, borderRadius: 5,
                background: `linear-gradient(to right, ${layerMeta.stops.map(s => `rgb(${s.c.join(",")})`).join(", ")})`,
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 9, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
              <span>{layerMeta.stops[0].v}{layerMeta.unit === "°C" ? "°" : ""}</span>
              <span>{layerMeta.stops[layerMeta.stops.length-1].v}{layerMeta.unit === "°C" ? "°" : ""}</span>
            </div>
          </div>
        )}

        {/* Hover tooltip */}
        {hovered !== null && selected === null && (
          <div style={{
            position: "absolute", bottom: 60, left: "50%", transform: "translateX(-50%)", zIndex: 10,
            background: "rgba(0,0,0,0.65)", backdropFilter: "blur(16px)", borderRadius: 14, padding: "10px 18px",
            border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", pointerEvents: "none",
          }}>
            <span style={{ fontSize: 16, marginRight: 8 }}>{BANDS[hovered].icon}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>{BANDS[hovered].name}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>{BANDS[hovered].range}</span>
          </div>
        )}

        {/* Band quick-nav */}
        <div style={{
          position: "absolute", right: band ? 356 : 16, top: "50%", transform: "translateY(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", gap: 2, pointerEvents: "auto", transition: "right 0.4s ease",
        }}>
          {BANDS.map((b) => {
            const isSel = selected === b.id;
            return (
              <div key={b.id} onClick={() => selectBand(isSel ? null : b.id)} title={`${b.range} ${b.name}`}
                style={{
                  width: isSel ? 28 : 18, height: b.latStart - b.latEnd > 10 ? 18 : 10, borderRadius: 3,
                  cursor: "pointer", transition: "all 0.3s",
                  background: activeLayer ? `rgb(${interpolateLayerColor(LAYERS.find(l=>l.key===activeLayer), b[activeLayer]).join(",")})` : "rgba(255,255,255,0.2)",
                  border: isSel ? "2px solid rgba(255,255,255,0.8)" : "1px solid rgba(255,255,255,0.08)",
                  opacity: isSel ? 1 : 0.65,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Right sidebar */}
      <div style={{
        width: band ? 340 : 0, overflow: "hidden", transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        background: "rgba(12,16,24,0.85)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)",
        borderLeft: band ? "1px solid rgba(255,255,255,0.06)" : "none",
        display: "flex", flexDirection: "column",
      }}>
        {band && (
          <div style={{ padding: 20, overflowY: "auto", flex: 1, scrollbarWidth: "thin", opacity: 1, transition: "opacity 0.3s 0.15s", minWidth: 340 }}>
            {/* Close */}
            <button onClick={() => selectBand(null)} style={{
              float: "right", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 20,
              padding: "4px 12px", color: "rgba(255,255,255,0.5)", fontSize: 11, cursor: "pointer",
            }}>✕</button>

            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 40 }}>{band.icon}</span>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", marginTop: 6 }}>{band.range}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "white", letterSpacing: "-0.01em", marginTop: 2 }}>{band.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{band.subtitle}</div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 18 }}>
              {LAYERS.map(l => {
                const col = interpolateLayerColor(l, band[l.key]);
                const colStr = `rgb(${col.join(",")})`;
                return (
                  <div key={l.key} onClick={() => setActiveLayer(activeLayer === l.key ? null : l.key)} style={{
                    background: activeLayer === l.key ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                    borderRadius: 10, padding: "8px 8px 6px", textAlign: "center", cursor: "pointer",
                    border: activeLayer === l.key ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.04)",
                    transition: "all 0.3s",
                  }}>
                    <div style={{ fontSize: 12 }}>{l.icon}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: colStr, fontFamily: "monospace", marginTop: 2 }}>
                      {band[l.key]}{l.key === "temp" ? "°" : ""}
                    </div>
                    <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {l.key === "temp" ? "°C" : l.unit}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info cards */}
            {[
              { label: "Climate", text: band.climate, ic: "☁️" },
              { label: "Vegetation", text: band.vegetation, ic: "🌱" },
              { label: "Cultures & History", text: band.cultures, ic: "🏘️" },
              { label: "Resources", text: band.resources, ic: "💎" },
              { label: "Industries", text: band.industries, ic: "🏭" },
              { label: "Water Systems", text: band.water, ic: "🌊" },
            ].map(item => (
              <div key={item.label} style={{
                background: "rgba(255,255,255,0.025)", borderRadius: 10, padding: "10px 12px", marginBottom: 8,
                border: "1px solid rgba(255,255,255,0.04)",
              }}>
                <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
                  {item.ic} {item.label}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.78)", lineHeight: 1.55 }}>{item.text}</div>
              </div>
            ))}

            {/* Key insight */}
            <div style={{
              background: "linear-gradient(135deg, rgba(255,170,40,0.08), rgba(255,90,40,0.05))",
              borderRadius: 12, padding: "12px 14px", marginBottom: 12,
              border: "1px solid rgba(255,170,40,0.12)",
            }}>
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,190,80,0.6)", marginBottom: 4 }}>💡 Key Insight</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, fontStyle: "italic" }}>{band.keyFact}</div>
            </div>

            {/* Places */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {band.places.map(p => (
                <span key={p} style={{
                  fontSize: 10, padding: "3px 9px", background: "rgba(255,255,255,0.05)", borderRadius: 16,
                  color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.06)",
                }}>📍 {p}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
