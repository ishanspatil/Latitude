import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const BANDS = [
  { id:0, range:"90\u00b0\u201380\u00b0N", name:"Ice Cap", subtitle:"Permanent Ice, Polar Desert", latStart:90, latEnd:80, temp:-35, rainfall:50, population:0, biodiversity:5, elevation:0, icon:"\u2744\ufe0f",
    vegetation:"None \u2014 permanent ice sheet", climate:"Polar. 24hr dark/light cycles. Rarely above 0\u00b0C.", cultures:"No permanent settlement. Research stations only.", resources:"Freshwater locked in ice, emerging Arctic routes", industries:"Research, military monitoring", water:"Arctic Ocean \u2014 increasingly ice-free summers", keyFact:"The Arctic Ocean beneath the ice is surprisingly productive \u2014 algae grow on the underside of sea ice, feeding an entire food web.", places:["Arctic Ocean","North Pole"] },
  { id:1, range:"80\u00b0\u201370\u00b0N", name:"High Arctic", subtitle:"Tundra & Permafrost", latStart:80, latEnd:70, temp:-20, rainfall:150, population:1, biodiversity:10, elevation:200, icon:"\ud83e\uddca",
    vegetation:"Mosses, lichens, dwarf shrubs. No trees.", climate:"Polar tundra. Permafrost. Brief summer thaw.", cultures:"Inuit, S\u00e1mi fringe. Deep cold-adaptation spanning millennia.", resources:"Oil, gas, rare earths \u2014 accessible as permafrost thaws", industries:"Resource extraction, indigenous subsistence, research", water:"Seasonal meltwater, permafrost lakes", keyFact:"Climate change is rewriting geography here faster than anywhere \u2014 permafrost collapse releases ancient methane and reshapes coastlines.", places:["Svalbard","N. Greenland","Siberian coast"] },
  { id:2, range:"70\u00b0\u201360\u00b0N", name:"Subarctic", subtitle:"Taiga \u2014 Earth's Largest Biome", latStart:70, latEnd:60, temp:-10, rainfall:400, population:5, biodiversity:25, elevation:300, icon:"\ud83c\udf32",
    vegetation:"Boreal coniferous forest \u2014 spruce, pine, larch.", climate:"Subarctic. 8-month winters, explosive short summers.", cultures:"Viking origins. Russian frontier. Finnish sisu. Winter survival = collective problem.", resources:"Timber, hydropower, minerals, massive carbon sink", industries:"Forestry, hydroelectric, mining, fishing", water:"Vast rivers \u2014 Ob, Yenisei, Lena drain into Arctic", keyFact:"The boreal forest stores more carbon than all tropical rainforests combined. It's Earth's thermostat.", places:["Finland","Siberia","Alaska","N. Canada"] },
  { id:3, range:"60\u00b0\u201350\u00b0N", name:"Power Belt", subtitle:"Temperate-Boreal Transition", latStart:60, latEnd:50, temp:5, rainfall:700, population:40, biodiversity:45, elevation:250, icon:"\u26a1",
    vegetation:"Mixed deciduous-coniferous forest. Meadows.", climate:"Cool temperate. Four seasons. Oceanic west, continental inland.", cultures:"Drove the Industrial Revolution. Collective structures.", resources:"Coal seams, fertile glacial soils, navigable rivers", industries:"Heavy industry, manufacturing, tech, agriculture", water:"Dense rivers \u2014 Thames, Rhine, Volga", keyFact:"Punches absurdly above its weight \u2014 the sweet spot between 'harsh enough to demand technology' and 'mild enough to accumulate surplus.'", places:["S. Scandinavia","Scotland","Moscow","S. Canada"] },
  { id:4, range:"50\u00b0\u201340\u00b0N", name:"Temperate Heartland", subtitle:"Civilization's Engine Room", latStart:50, latEnd:40, temp:12, rainfall:800, population:85, biodiversity:55, elevation:400, icon:"\ud83c\udfdb\ufe0f",
    vegetation:"Deciduous forest, grasslands, steppe. Wheat, wine, olives.", climate:"Temperate. Mediterranean coasts, continental inland.", cultures:"Most great empires. Dense cities. Grain surplus \u2192 states \u2192 empires.", resources:"Rich soils, diverse minerals, trade routes", industries:"Finance, tech, agriculture, automotive, aerospace", water:"Great rivers \u2014 Danube, Yangtze, Mississippi", keyFact:"The densest concentration of historical civilizational power on Earth.", places:["France","Germany","US East","N. China","Japan"] },
  { id:5, range:"40\u00b0\u201330\u00b0N", name:"Cradle Belt", subtitle:"Where Civilization Began", latStart:40, latEnd:30, temp:20, rainfall:500, population:90, biodiversity:50, elevation:500, icon:"\ud83c\udffe",
    vegetation:"Mediterranean scrub, grasslands, desert margins.", climate:"Subtropical. Mediterranean coasts, arid interiors.", cultures:"Fertile Crescent, Nile, Indus, Yellow River \u2014 birthplaces of civilization.", resources:"Ancient soils, oil, strategic waterways", industries:"Agriculture, tech hubs, tourism", water:"Nile, Tigris-Euphrates, Indus, Yellow River", keyFact:"River valleys birthed first cities; deserts between them let distinct civilizations evolve independently.", places:["California","Turkey","Fertile Crescent","N. India"] },
  { id:6, range:"30\u00b0\u201320\u00b0N", name:"Desert\u2013Monsoon", subtitle:"Hadley Cell Divide", latStart:30, latEnd:20, temp:28, rainfall:300, population:75, biodiversity:35, elevation:350, icon:"\ud83c\udfdc\ufe0f",
    vegetation:"Desert scrub west, monsoon agriculture east.", climate:"Subtropical high-pressure \u2192 deserts west. Monsoons east.", cultures:"Oasis routes. Gulf oil states. India's heartland.", resources:"Oil (massive), solar potential, monsoon agriculture", industries:"Oil & gas, agriculture, solar energy", water:"Monsoon rains east; wadis and oases west", keyFact:"The energy powering the industrial belt largely comes from here \u2014 fossil fuels and future solar.", places:["Sahara","Arabia","Rajasthan","Florida"] },
  { id:7, range:"20\u00b0\u201310\u00b0N", name:"Tropical Monsoon", subtitle:"Spice Belt", latStart:20, latEnd:10, temp:30, rainfall:1500, population:70, biodiversity:75, elevation:200, icon:"\ud83c\udf3f",
    vegetation:"Savannas, tropical dry forests. Rice, sugarcane, spices.", climate:"Tropical wet-dry. Monsoon-driven seasons.", cultures:"Societies built around seasonal water. Spice trade funded Age of Exploration.", resources:"Spices, tropical agriculture, timber", industries:"Agriculture, textiles, emerging tech", water:"Monsoon rivers, seasonal flooding, rich deltas", keyFact:"Most biodiverse transition zone \u2014 spice trade from here changed world history.", places:["Central America","W. Africa","S. India","SE Asia"] },
  { id:8, range:"10\u00b0N\u20130\u00b0", name:"Equatorial North", subtitle:"Rainforest Canopy", latStart:10, latEnd:0, temp:27, rainfall:2500, population:45, biodiversity:95, elevation:100, icon:"\ud83c\udf33",
    vegetation:"Dense rainforest. Most species per hectare. Poor soils.", climate:"Equatorial. Peak solar, minimal seasons. Daily storms.", cultures:"Distributed, forest-adapted, trade-network societies.", resources:"Biodiversity, timber, minerals beneath", industries:"Plantation agriculture, mining, research", water:"Amazon tributaries, Congo River", keyFact:"Tropical disease loads historically limited state formation \u2014 controversial but real factor.", places:["Amazon","Congo","Indonesia","Malaysia"] },
  { id:9, range:"0\u00b0\u201310\u00b0S", name:"Equatorial South", subtitle:"Humanity's Launchpad", latStart:0, latEnd:-10, temp:26, rainfall:2200, population:50, biodiversity:90, elevation:800, icon:"\ud83e\uddec",
    vegetation:"Rainforest + East African highland exception.", climate:"Equatorial lowlands + highland exception. Fastest-growing cities.", cultures:"East African Rift: where Homo sapiens evolved.", resources:"Coffee, minerals, geothermal energy", industries:"Coffee, tea, mining, emerging tech", water:"Rift Valley lakes \u2014 Victoria, Tanganyika", keyFact:"East African highlands break the tropical pattern \u2014 our species was born here.", places:["Amazon core","Congo","Kenya","Ethiopia"] },
  { id:10, range:"10\u00b0\u201320\u00b0S", name:"Southern Tropical", subtitle:"Resource Extraction Zone", latStart:-10, latEnd:-20, temp:25, rainfall:1200, population:25, biodiversity:70, elevation:600, icon:"\u26cf\ufe0f",
    vegetation:"Savanna, dry tropical forest. Cerrado \u2192 soy/cattle.", climate:"Tropical wet-dry. Less land than northern mirror.", cultures:"Indigenous communities. Colonial extraction legacy.", resources:"Copper, iron, soy, cattle", industries:"Mining, ranching, soy agriculture", water:"Zambezi, Pantanal wetlands", keyFact:"The cerrado feeds the 40\u00b0\u201350\u00b0N belt. Global economy's resource extraction zone.", places:["N. Australia","Zambia","Bolivia","Cerrado"] },
  { id:11, range:"20\u00b0\u201330\u00b0S", name:"Southern Subtropical", subtitle:"Desert Mirrors", latStart:-20, latEnd:-30, temp:22, rainfall:400, population:35, biodiversity:40, elevation:500, icon:"\ud83c\udf77",
    vegetation:"Deserts (Atacama, Kalahari, Outback) + productive pockets.", climate:"Same Hadley dynamics as north. Desert interiors.", cultures:"Southern economic engines. Wine cultures.", resources:"Minerals, wine regions, lithium", industries:"Mining, viticulture, finance", water:"Orange River, coastal aquifers", keyFact:"Same physics as 20\u201330\u00b0N but far less land = smaller populations.", places:["S\u00e3o Paulo","Johannesburg","Atacama"] },
  { id:12, range:"30\u00b0\u201340\u00b0S", name:"Southern Temperate", subtitle:"Pleasant but Sparse", latStart:-30, latEnd:-40, temp:15, rainfall:700, population:20, biodiversity:45, elevation:200, icon:"\ud83d\udc11",
    vegetation:"Grasslands, Mediterranean scrub, temperate forest.", climate:"Mediterranean/oceanic. Mild, pleasant.", cultures:"Shaped by European colonization.", resources:"Agricultural land, fisheries, wind energy", industries:"Agriculture, wine, wool, tourism", water:"Coastal waters, Murray-Darling", keyFact:"Mirrors 30\u00b0\u201340\u00b0N but barely any land exists here.", places:["Buenos Aires","Cape Town","Sydney","NZ"] },
  { id:13, range:"40\u00b0\u201350\u00b0S", name:"Roaring Forties", subtitle:"Windiest Latitudes", latStart:-40, latEnd:-50, temp:8, rainfall:1000, population:2, biodiversity:30, elevation:100, icon:"\ud83d\udca8",
    vegetation:"Windswept grasslands, cold rainforest.", climate:"Cool maritime. Constant westerlies. Frequent storms.", cultures:"Patagonian gauchos, M\u0101ori. Very sparse.", resources:"Fisheries, wind energy, sheep", industries:"Sheep, fishing, wind energy", water:"Southern Ocean \u2014 global circulation driver", keyFact:"Unbroken ocean lets winds circle the planet. Enormous planetary importance.", places:["Patagonia","S. New Zealand"] },
  { id:14, range:"50\u00b0\u201360\u00b0S", name:"Subantarctic", subtitle:"Ocean Realm", latStart:-50, latEnd:-60, temp:2, rainfall:600, population:0, biodiversity:20, elevation:50, icon:"\ud83d\udc0b",
    vegetation:"Tussock grass on islands. Marine ecosystems.", climate:"Subpolar maritime. Cold, wet, windy.", cultures:"Scientific outposts. Contested sovereignty.", resources:"Krill \u2014 underpins Southern Ocean food web", industries:"Research, fishing", water:"Antarctic Convergence Zone", keyFact:"Krill here underpins the entire Southern Ocean food web.", places:["Tierra del Fuego","Falklands","S. Georgia"] },
  { id:15, range:"60\u00b0\u201390\u00b0S", name:"Antarctica", subtitle:"Frozen Continent", latStart:-60, latEnd:-90, temp:-50, rainfall:50, population:0, biodiversity:8, elevation:2300, icon:"\ud83c\udfd4\ufe0f",
    vegetation:"Almost none. Ice up to 4.8km thick.", climate:"Polar. Coldest: -89.2\u00b0C. Technically a desert.", cultures:"No permanent pop. Antarctic Treaty expires 2048.", resources:"70% of Earth's freshwater. Minerals beneath.", industries:"Scientific research only (by treaty)", water:"26.5M km\u00b3 frozen freshwater", keyFact:"What happens when the Antarctic Treaty expires in 2048 is one of the big quiet geopolitical questions.", places:["Antarctic Peninsula","South Pole"] },
];

const LAYERS = [
  { key:"temp", label:"Temperature", unit:"\u00b0C", icon:"\ud83c\udf21\ufe0f",
    stops:[{v:-50,c:[26,35,126]},{v:-20,c:[2,136,209]},{v:0,c:[77,208,225]},{v:10,c:[255,241,118]},{v:20,c:[255,167,38]},{v:30,c:[244,67,54]},{v:35,c:[183,28,28]}] },
  { key:"rainfall", label:"Rainfall", unit:"mm/yr", icon:"\ud83d\udca7",
    stops:[{v:0,c:[210,180,100]},{v:400,c:[180,170,120]},{v:800,c:[100,181,246]},{v:1500,c:[25,118,210]},{v:2500,c:[13,71,161]}] },
  { key:"population", label:"Population", unit:"density", icon:"\ud83d\udc65",
    stops:[{v:0,c:[20,20,40]},{v:20,c:[60,40,80]},{v:50,c:[180,120,255]},{v:80,c:[255,215,0]},{v:100,c:[255,248,225]}] },
  { key:"biodiversity", label:"Biodiversity", unit:"index", icon:"\ud83c\udf3f",
    stops:[{v:0,c:[80,60,50]},{v:25,c:[141,110,99]},{v:50,c:[129,199,132]},{v:75,c:[46,125,50]},{v:100,c:[27,94,32]}] },
  { key:"elevation", label:"Elevation", unit:"m", icon:"\u26f0\ufe0f",
    stops:[{v:0,c:[21,101,192]},{v:200,c:[76,175,80]},{v:600,c:[139,195,74]},{v:1200,c:[255,152,0]},{v:2500,c:[121,85,72]}] },
];

const LAYER_RANGES = {
  temp: { min: -50, max: 35 },
  rainfall: { min: 0, max: 2500 },
  population: { min: 0, max: 100 },
  biodiversity: { min: 0, max: 100 },
  elevation: { min: 0, max: 2500 },
};

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════

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

function getBiomeGradient(id) {
  const accents = [
    ["#7ec8e3","#0a1a5c"], ["#80cbc4","#003d40"], ["#2e7d32","#81c784"],
    ["#43a047","#a5d6a7"], ["#558b2f","#c5e1a5"], ["#f9a825","#fff59d"],
    ["#e65100","#ffab40"], ["#2e7d32","#69f0ae"], ["#00695c","#80cbc4"],
    ["#00695c","#80cbc4"], ["#558b2f","#aed581"], ["#e65100","#ffab40"],
    ["#33691e","#81c784"], ["#37474f","#90a4ae"], ["#263238","#78909c"],
    ["#90caf9","#1565c0"],
  ];
  return accents[id] || ["#333","#666"];
}

// ═══════════════════════════════════════════════════════════════
// TEXTURE GENERATION
// ═══════════════════════════════════════════════════════════════

function createEarthTexture() {
  const W = 2048, H = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Deep ocean gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, H);
  oceanGrad.addColorStop(0, "#060e2a");
  oceanGrad.addColorStop(0.12, "#0b1e4a");
  oceanGrad.addColorStop(0.28, "#0d2d65");
  oceanGrad.addColorStop(0.5, "#0a3d80");
  oceanGrad.addColorStop(0.72, "#0d2d65");
  oceanGrad.addColorStop(0.88, "#0b1e4a");
  oceanGrad.addColorStop(1, "#060e2a");
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, W, H);

  // Subtle ocean texture
  for (let i = 0; i < 50000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const a = Math.random() * 0.03;
    ctx.fillStyle = `rgba(80,160,240,${a})`;
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

  const land = "rgba(40,62,40,0.93)";
  const edge = "rgba(70,100,70,0.5)";
  const ice = "rgba(200,218,235,0.92)";
  const iceEdge = "rgba(170,195,220,0.5)";
  const desert = "rgba(95,82,55,0.9)";
  const desEdge = "rgba(120,105,70,0.45)";

  // Africa
  drawContinent([[-17,35],[-5,36],[10,37],[15,32],[25,32],[33,30],[35,27],[38,20],[42,12],[50,12],[51,8],[45,2],[42,-2],[40,-5],[35,-8],[33,-15],[35,-22],[33,-27],[30,-30],[28,-33],[26,-34],[20,-35],[18,-34],[15,-28],[12,-18],[12,-10],[10,-5],[8,4],[5,5],[2,6],[-2,5],[-8,5],[-12,8],[-16,12],[-17,15],[-17,21],[-13,25],[-15,28],[-17,32]], land, edge);
  // Europe
  drawContinent([[-10,36],[-9,38],[-8,43],[-2,44],[0,46],[2,48],[5,48],[8,48],[6,54],[8,55],[10,54],[12,55],[14,54],[17,55],[20,54],[22,55],[24,54],[26,55],[28,54],[30,55],[32,52],[35,48],[40,48],[42,45],[38,42],[35,40],[30,38],[28,37],[25,36],[20,36],[15,38],[12,38],[8,44],[5,46],[3,47],[0,44],[-3,44],[-5,44],[-8,44],[-9,43],[-10,40]], land, edge);
  // Asia
  drawContinent([[40,48],[45,52],[50,55],[55,58],[60,60],[65,62],[70,65],[80,68],[90,70],[100,68],[110,65],[120,62],[125,60],[130,55],[135,52],[140,50],[142,46],[140,42],[135,38],[130,35],[128,33],[125,30],[120,25],[115,22],[110,20],[108,15],[105,12],[100,14],[98,16],[95,20],[90,22],[85,23],[80,25],[75,24],[70,22],[68,24],[65,25],[62,26],[55,25],[50,27],[45,30],[42,32],[40,35],[38,42],[40,45]], land, edge);
  // India
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

  // Desert overlays
  drawContinent([[-15,20],[-5,22],[5,25],[15,28],[25,30],[35,28],[40,25],[45,22],[50,20],[55,18],[50,15],[40,15],[30,18],[20,20],[10,18],[0,16],[-10,18]], desert, desEdge);
  drawContinent([[68,28],[72,26],[76,24],[72,22],[68,24]], desert, desEdge);
  drawContinent([[125,-20],[130,-22],[135,-24],[138,-26],[140,-28],[138,-30],[135,-30],[130,-28],[126,-26],[124,-24],[125,-22]], desert, desEdge);
  drawContinent([[-72,-18],[-70,-22],[-70,-28],[-68,-30],[-66,-28],[-68,-24],[-70,-20]], desert, desEdge);

  // Tropical vegetation glow
  for (let i = 0; i < 20000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const lat = 90 - (y / H) * 180;
    if (Math.abs(lat) < 28) {
      const intensity = 1 - Math.abs(lat) / 28;
      ctx.fillStyle = `rgba(15,70,15,${Math.random() * 0.04 * intensity})`;
      ctx.fillRect(x, y, 3, 2);
    }
  }

  // Boreal tint
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const lat = 90 - (y / H) * 180;
    if (lat > 50 && lat < 70) {
      ctx.fillStyle = `rgba(10,45,30,${Math.random() * 0.04})`;
      ctx.fillRect(x, y, 3, 2);
    }
  }

  return canvas;
}

function createCloudTexture() {
  const W = 1024, H = 512;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < 2200; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const lat = 90 - (y / H) * 180;

    // Realistic cloud distribution: ITCZ (equator), polar front (40-60), sparse in subtropics
    const prob = Math.abs(lat) < 12 ? 0.85 :
                 Math.abs(lat) > 38 && Math.abs(lat) < 62 ? 0.7 :
                 Math.abs(lat) > 18 && Math.abs(lat) < 32 ? 0.15 :
                 0.4;
    if (Math.random() > prob) continue;

    const r = 8 + Math.random() * 28;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, `rgba(255,255,255,${0.04 + Math.random() * 0.06})`);
    gradient.addColorStop(0.6, `rgba(255,255,255,${0.01 + Math.random() * 0.02})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
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
  const points = [];
  BANDS.forEach(band => {
    const midLat = (band.latStart + band.latEnd) / 2;
    const y = (90 - midLat) / 180;
    points.push({ y, value: band[layerKey] });
  });
  points.sort((a, b) => a.y - b.y);

  for (let py = 0; py < H; py++) {
    const t = py / H;
    let value;
    if (t <= points[0].y) {
      value = points[0].value;
    } else if (t >= points[points.length-1].y) {
      value = points[points.length-1].value;
    } else {
      for (let i = 0; i < points.length - 1; i++) {
        if (t >= points[i].y && t <= points[i+1].y) {
          const lt = (t - points[i].y) / (points[i+1].y - points[i].y);
          const smooth = lt * lt * (3 - 2 * lt);
          value = points[i].value + (points[i+1].value - points[i].value) * smooth;
          break;
        }
      }
    }
    const col = interpolateLayerColor(layer, value);
    ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.6)`;
    ctx.fillRect(0, py, W, 1);
  }

  return canvas;
}

// ═══════════════════════════════════════════════════════════════
// INJECTED CSS
// ═══════════════════════════════════════════════════════════════

const INJECTED_CSS = `
@keyframes latFadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes latBarGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes latPulseRing {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 0.9; }
}
.lat-scroll::-webkit-scrollbar { width: 0; display: none; }
.lat-scroll { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function EarthGlobe() {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const [selected, setSelected] = useState(null);
  const [activeLayer, setActiveLayer] = useState(null);
  const band = selected !== null ? BANDS[selected] : null;

  // ─── Three.js Setup ───────────────────────────────────────
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0.3, 4.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x040810, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.4);
    sun.position.set(5, 3, 5);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x4466aa, 0.25);
    fill.position.set(-4, -2, 3);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0x6688cc, 0.2);
    rim.position.set(-3, 1, -4);
    scene.add(rim);

    // Stars
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 6000;
    const sp = new Float32Array(starCount * 3);
    const sc = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      sp[i] = (Math.random() - 0.5) * 120;
      sp[i+1] = (Math.random() - 0.5) * 120;
      sp[i+2] = (Math.random() - 0.5) * 120;
      const brightness = 0.4 + Math.random() * 0.6;
      const tint = Math.random();
      sc[i] = brightness * (tint > 0.8 ? 0.9 : 1.0);
      sc[i+1] = brightness * (tint > 0.9 ? 0.85 : 1.0);
      sc[i+2] = brightness * (tint < 0.3 ? 0.95 : 1.0);
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(sp, 3));
    starsGeo.setAttribute("color", new THREE.BufferAttribute(sc, 3));
    scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({
      size: 0.05, sizeAttenuation: true, vertexColors: true, transparent: true, opacity: 0.85,
    })));

    const globe = new THREE.Group();
    scene.add(globe);

    // Earth sphere
    const earthCanvas = createEarthTexture();
    const earthTex = new THREE.CanvasTexture(earthCanvas);
    earthTex.wrapS = THREE.RepeatWrapping;
    const earthGeo = new THREE.SphereGeometry(2, 128, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTex, shininess: 15, specular: new THREE.Color(0x1a3050),
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globe.add(earthMesh);

    // Cloud layer
    const cloudCanvas = createCloudTexture();
    const cloudTex = new THREE.CanvasTexture(cloudCanvas);
    cloudTex.wrapS = THREE.RepeatWrapping;
    const cloudGeo = new THREE.SphereGeometry(2.025, 64, 32);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: cloudTex, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.FrontSide,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    globe.add(cloudMesh);

    // Data overlay sphere
    const overlayCanvas = createOverlayTexture(null);
    const overlayTex = new THREE.CanvasTexture(overlayCanvas);
    overlayTex.wrapS = THREE.RepeatWrapping;
    const overlayGeo = new THREE.SphereGeometry(2.008, 128, 64);
    const overlayMat = new THREE.MeshBasicMaterial({
      map: overlayTex, transparent: true, opacity: 0, depthWrite: false,
    });
    const overlayMesh = new THREE.Mesh(overlayGeo, overlayMat);
    globe.add(overlayMesh);

    // Selection highlight group
    const hlGroup = new THREE.Group();
    globe.add(hlGroup);

    function clearHighlightBand() {
      while (hlGroup.children.length) {
        const child = hlGroup.children[0];
        hlGroup.remove(child);
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      }
    }

    function makeHighlightBand(latStart, latEnd) {
      clearHighlightBand();
      const thetaS = ((90 - latStart) * Math.PI) / 180;
      const thetaL = ((latStart - latEnd) * Math.PI) / 180;
      // Translucent band
      const hlGeo = new THREE.SphereGeometry(2.014, 128, 16, 0, Math.PI * 2, thetaS, thetaL);
      const hlMat = new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.15, depthWrite: false, side: THREE.DoubleSide,
      });
      hlGroup.add(new THREE.Mesh(hlGeo, hlMat));
      // Glowing edge rings
      [thetaS, thetaS + thetaL].forEach(theta => {
        const r = 2.018 * Math.sin(theta);
        const y = 2.018 * Math.cos(theta);
        if (r < 0.01) return;
        const ringGeo = new THREE.TorusGeometry(r, 0.005, 8, 128);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xffffff, transparent: true, opacity: 0.7,
        });
        const ringObj = new THREE.Mesh(ringGeo, ringMat);
        ringObj.position.y = y;
        ringObj.rotation.x = Math.PI / 2;
        hlGroup.add(ringObj);
      });
    }

    // Latitude grid lines
    for (let lat = -80; lat <= 80; lat += 10) {
      const theta = ((90 - lat) * Math.PI) / 180;
      const r = 2.01 * Math.sin(theta);
      const y = 2.01 * Math.cos(theta);
      const isEquator = lat === 0;
      const isTropic = Math.abs(lat) === 20 || Math.abs(lat) === 30;
      const ringGeo = new THREE.TorusGeometry(r, isEquator ? 0.004 : 0.0012, 8, 200);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isEquator ? 0xffcc00 : isTropic ? 0xff9944 : 0xffffff,
        transparent: true,
        opacity: isEquator ? 0.3 : isTropic ? 0.12 : 0.06,
      });
      const ringObj = new THREE.Mesh(ringGeo, ringMat);
      ringObj.position.y = y;
      ringObj.rotation.x = Math.PI / 2;
      globe.add(ringObj);
    }

    // Atmosphere - inner glow
    const atmosGeo = new THREE.SphereGeometry(2.18, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          vNorm = normalize(normalMatrix * normal);
          vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          float rim = 1.0 - max(0.0, dot(normalize(-vPos), vNorm));
          vec3 col = mix(vec3(0.28, 0.55, 1.0), vec3(0.12, 0.28, 0.85), rim);
          float alpha = pow(rim, 3.0) * 0.55;
          gl_FragColor = vec4(col, alpha);
        }`,
      transparent: true, side: THREE.BackSide, depthWrite: false,
    });
    globe.add(new THREE.Mesh(atmosGeo, atmosMat));

    // Outer glow halo
    const haloGeo = new THREE.SphereGeometry(2.5, 32, 32);
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          vNorm = normalize(normalMatrix * normal);
          vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          float rim = 1.0 - max(0.0, dot(normalize(-vPos), vNorm));
          gl_FragColor = vec4(0.15, 0.3, 0.7, pow(rim, 6.0) * 0.2);
        }`,
      transparent: true, side: THREE.BackSide, depthWrite: false,
    });
    globe.add(new THREE.Mesh(haloGeo, haloMat));

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

    // ─── Interaction State ────────────────────────────────
    const state = {
      dragging: false, lx: 0, ly: 0, sx: 0, sy: 0,
      ry: 0.4, rx: 0.15, vy: 0.0015, vx: 0,
      auto: true, lastT: 0, selId: null,
      targetOverlayOpacity: 0,
      targetRx: null, targetZoom: null,
      cloudRotation: 0,
    };

    sceneRef.current = {
      renderer, camera, scene, globe, overlayMesh, overlayTex,
      overlayCanvas, state, hitMeshes, makeHighlightBand, clearHighlightBand, hlGroup, cloudMesh,
    };

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
      Object.assign(state, {
        dragging: true, lx: p.x, ly: p.y, sx: p.x, sy: p.y,
        vy: 0, vx: 0, auto: false, lastT: Date.now(),
        targetRx: null, targetZoom: null,
      });
    }

    function onMove(e) {
      const p = gp(e);
      if (state.dragging) {
        const dx = p.x - state.lx, dy = p.y - state.ly;
        state.ry += dx * 0.005;
        state.rx = Math.max(-1.55, Math.min(1.55, state.rx + dy * 0.004));
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
      if (Math.sqrt((cx - state.sx) ** 2 + (cy - state.sy) ** 2) < 8) {
        mouse.x = (cx / r.width) * 2 - 1;
        mouse.y = -(cy / r.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(hitMeshes);
        if (hits.length) {
          const bid = hits[0].object.userData.bandId;
          state.selId = bid;
          setSelected(bid);
          makeHighlightBand(BANDS[bid].latStart, BANDS[bid].latEnd);
          // Auto-center on selected band
          const midLat = (BANDS[bid].latStart + BANDS[bid].latEnd) / 2;
          state.targetRx = midLat * Math.PI / 180;
          state.targetZoom = 4.2;
        } else {
          state.selId = null;
          setSelected(null);
          clearHighlightBand();
          state.targetZoom = 4.8;
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
      const rect = el.getBoundingClientRect();
      const cx = e.touches[0].clientX - rect.left;
      const cy = e.touches[0].clientY - rect.top;
      const dx = cx - state.lx, dy = cy - state.ly;
      state.ry += dx * 0.005;
      state.rx = Math.max(-1.55, Math.min(1.55, state.rx + dy * 0.004));
      state.vy = dx * 0.0025; state.vx = dy * 0.002;
      state.lx = cx; state.ly = cy;
    }, { passive: true });
    el.addEventListener("touchend", onUp);
    el.addEventListener("wheel", (e) => {
      e.preventDefault();
      camera.position.z = Math.max(3, Math.min(8, camera.position.z + e.deltaY * 0.003));
    }, { passive: false });

    // ─── Animation Loop ───────────────────────────────────
    let anim;
    function loop() {
      anim = requestAnimationFrame(loop);
      const now = Date.now();

      // Auto-rotate after idle
      if (!state.dragging && now - state.lastT > 3500) state.auto = true;
      if (state.auto) {
        state.ry += 0.001;
        state.vy *= 0.95; state.vx *= 0.95;
      } else if (!state.dragging) {
        state.ry += state.vy; state.rx += state.vx;
        state.rx = Math.max(-1.55, Math.min(1.55, state.rx));
        state.vy *= 0.97; state.vx *= 0.97;
      }

      // Smooth auto-center when band is selected
      if (state.targetRx !== null) {
        state.rx += (state.targetRx - state.rx) * 0.04;
        if (Math.abs(state.targetRx - state.rx) < 0.002) state.targetRx = null;
      }
      // Smooth zoom
      if (state.targetZoom !== null) {
        camera.position.z += (state.targetZoom - camera.position.z) * 0.04;
        if (Math.abs(state.targetZoom - camera.position.z) < 0.01) state.targetZoom = null;
      }

      globe.rotation.y = state.ry;
      globe.rotation.x = state.rx;

      // Cloud layer rotates independently (slow drift)
      state.cloudRotation += 0.0003;
      cloudMesh.rotation.y = state.cloudRotation;

      // Smooth overlay opacity transition
      const tgt = state.targetOverlayOpacity;
      overlayMat.opacity += (tgt - overlayMat.opacity) * 0.08;

      // Pulsing highlight band
      hlGroup.children.forEach((c, i) => {
        if (c.material) {
          if (i === 0) {
            c.material.opacity = 0.12 + Math.sin(now * 0.003) * 0.06;
          } else {
            c.material.opacity = 0.5 + Math.sin(now * 0.004) * 0.25;
          }
        }
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
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      clearHighlightBand();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
      container.removeChild(el);
      renderer.dispose();
    };
  }, []);

  // ─── Overlay layer update ─────────────────────────────────
  useEffect(() => {
    const s = sceneRef.current;
    if (!s.overlayMesh) return;
    const oldMap = s.overlayMesh.material.map;
    const canvas = createOverlayTexture(activeLayer);
    s.overlayMesh.material.map = new THREE.CanvasTexture(canvas);
    s.overlayMesh.material.map.wrapS = THREE.RepeatWrapping;
    s.overlayMesh.material.needsUpdate = true;
    s.state.targetOverlayOpacity = activeLayer ? 1 : 0;
    if (oldMap) oldMap.dispose();
  }, [activeLayer]);

  // ─── Select band (from sidebar or globe) ──────────────────
  const selectBand = useCallback((id) => {
    setSelected(id);
    const s = sceneRef.current;
    if (s.state) s.state.selId = id;
    if (id !== null && s.makeHighlightBand) {
      s.makeHighlightBand(BANDS[id].latStart, BANDS[id].latEnd);
      const midLat = (BANDS[id].latStart + BANDS[id].latEnd) / 2;
      s.state.targetRx = midLat * Math.PI / 180;
      s.state.targetZoom = 4.2;
      s.state.auto = false;
      s.state.lastT = Date.now();
    } else if (s.clearHighlightBand) {
      s.clearHighlightBand();
      s.state.targetZoom = 4.8;
    }
  }, []);

  const layerMeta = activeLayer ? LAYERS.find(l => l.key === activeLayer) : null;
  const biomeGrad = band ? getBiomeGradient(band.id) : null;

  // Info items for the selected band
  const infoItems = band ? [
    { label: "Climate", text: band.climate, icon: "\u2601\ufe0f" },
    { label: "Vegetation", text: band.vegetation, icon: "\ud83c\udf31" },
    { label: "Cultures & History", text: band.cultures, icon: "\ud83c\udfe0" },
    { label: "Resources", text: band.resources, icon: "\ud83d\udc8e" },
    { label: "Industries", text: band.industries, icon: "\ud83c\udfed" },
    { label: "Water Systems", text: band.water, icon: "\ud83c\udf0a" },
  ] : [];

  // ═══════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════

  return (
    <div style={{
      width: "100%", height: "100vh",
      background: "radial-gradient(ellipse at 40% 40%, #0a1228 0%, #040810 60%, #020408 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: "flex", color: "white",
    }}>
      {/* Injected CSS */}
      <style>{INJECTED_CSS}</style>

      {/* Vignette overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none",
        background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%)",
      }} />

      {/* ─── Globe Area ──────────────────────────────────── */}
      <div style={{ flex: 1, position: "relative", minWidth: 0, transition: "flex 0.4s ease" }}>
        <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} />

        {/* Header */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "24px 28px", zIndex: 10, pointerEvents: "none",
        }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)", marginBottom: 6, fontWeight: 500,
          }}>
            Interactive Atlas
          </div>
          <h1 style={{
            fontSize: 24, fontWeight: 700, margin: 0, letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Earth's Latitude Bands
          </h1>
          <div style={{
            fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 6,
            letterSpacing: "0.02em",
          }}>
            Drag to rotate &middot; Tap a band &middot; Scroll to zoom
          </div>
        </div>

        {/* Layer toggles */}
        <div style={{
          position: "absolute", top: 106, left: 28, zIndex: 10,
          display: "flex", flexDirection: "column", gap: 6, pointerEvents: "auto",
        }}>
          {LAYERS.map(l => {
            const on = activeLayer === l.key;
            return (
              <button key={l.key} onClick={() => setActiveLayer(on ? null : l.key)} style={{
                padding: "8px 16px", borderRadius: 24, cursor: "pointer",
                fontSize: 11, fontWeight: 550, letterSpacing: "0.01em",
                border: on ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.08)",
                background: on
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(10,14,24,0.6)",
                color: on ? "#fff" : "rgba(255,255,255,0.5)",
                backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                textAlign: "left",
                boxShadow: on ? "0 0 20px rgba(100,160,255,0.12)" : "none",
              }}>
                <span style={{ marginRight: 6 }}>{l.icon}</span>{l.label}
              </button>
            );
          })}
        </div>

        {/* Active layer legend */}
        {activeLayer && layerMeta && (
          <div style={{
            position: "absolute", bottom: 28, left: 28, zIndex: 10, pointerEvents: "none",
            background: "rgba(10,14,24,0.7)", backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: 16, padding: "14px 18px",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            <div style={{
              fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 10,
              fontWeight: 600, letterSpacing: "0.05em",
            }}>
              {layerMeta.icon} {layerMeta.label}
            </div>
            <div style={{
              width: 140, height: 8, borderRadius: 4,
              background: `linear-gradient(to right, ${layerMeta.stops.map(s => `rgb(${s.c.join(",")})`).join(", ")})`,
            }} />
            <div style={{
              display: "flex", justifyContent: "space-between", marginTop: 6,
              fontSize: 9, color: "rgba(255,255,255,0.35)", fontFamily: "'SF Mono', 'Fira Code', monospace",
            }}>
              <span>{layerMeta.stops[0].v}{layerMeta.unit === "\u00b0C" ? "\u00b0" : ""}</span>
              <span>{layerMeta.stops[layerMeta.stops.length-1].v}{layerMeta.unit === "\u00b0C" ? "\u00b0" : ""}</span>
            </div>
          </div>
        )}

        {/* Band quick-nav (vertical strip on right edge) */}
        <div style={{
          position: "absolute",
          right: band ? 400 : 20,
          top: "50%", transform: "translateY(-50%)",
          zIndex: 10, display: "flex", flexDirection: "column", gap: 2,
          pointerEvents: "auto",
          transition: "right 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        }}>
          {BANDS.map((b) => {
            const isSel = selected === b.id;
            const layerObj = activeLayer ? LAYERS.find(l => l.key === activeLayer) : null;
            const bgColor = layerObj
              ? `rgb(${interpolateLayerColor(layerObj, b[activeLayer]).join(",")})`
              : "rgba(255,255,255,0.18)";
            return (
              <div
                key={b.id}
                onClick={() => selectBand(isSel ? null : b.id)}
                title={`${b.range} \u2014 ${b.name}`}
                style={{
                  width: isSel ? 32 : 20,
                  height: b.latStart - b.latEnd > 15 ? 18 : 10,
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                  background: bgColor,
                  border: isSel
                    ? "2px solid rgba(255,255,255,0.85)"
                    : "1px solid rgba(255,255,255,0.06)",
                  opacity: isSel ? 1 : 0.6,
                  boxShadow: isSel ? "0 0 10px rgba(255,255,255,0.2)" : "none",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* ─── Right Sidebar ───────────────────────────────── */}
      <div style={{
        width: band ? 385 : 0,
        overflow: "hidden",
        transition: "width 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        background: "rgba(8,12,20,0.88)",
        backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)",
        borderLeft: band ? "1px solid rgba(255,255,255,0.05)" : "none",
        display: "flex", flexDirection: "column",
        position: "relative", zIndex: 10,
      }}>
        {band && (
          <div
            key={band.id}
            className="lat-scroll"
            style={{
              padding: 0, overflowY: "auto", flex: 1,
              minWidth: 385,
            }}
          >
            {/* Biome gradient accent at top */}
            <div style={{
              height: 4,
              background: `linear-gradient(90deg, ${biomeGrad[0]}, ${biomeGrad[1]})`,
              borderRadius: "0 0 2px 2px",
            }} />

            <div style={{ padding: "18px 22px 28px" }}>
              {/* Close button */}
              <button onClick={() => selectBand(null)} style={{
                float: "right", background: "rgba(255,255,255,0.06)", border: "none",
                borderRadius: "50%", width: 30, height: 30,
                color: "rgba(255,255,255,0.45)", fontSize: 13, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
                marginTop: 2,
              }}>
                \u2715
              </button>

              {/* Band header */}
              <div style={{
                marginBottom: 22,
                animation: "latFadeUp 0.4s ease-out both",
              }}>
                <span style={{
                  fontSize: 44, display: "block", marginBottom: 4,
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
                }}>
                  {band.icon}
                </span>
                <div style={{
                  fontSize: 11, color: "rgba(255,255,255,0.3)",
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                  marginTop: 8, letterSpacing: "0.04em",
                }}>
                  {band.range}
                </div>
                <div style={{
                  fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
                  marginTop: 4,
                  background: `linear-gradient(135deg, #fff, rgba(255,255,255,0.7))`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {band.name}
                </div>
                <div style={{
                  fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4,
                  fontWeight: 400,
                }}>
                  {band.subtitle}
                </div>
              </div>

              {/* Stat cards grid */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8,
                marginBottom: 20,
              }}>
                {LAYERS.map((l, idx) => {
                  const col = interpolateLayerColor(l, band[l.key]);
                  const colStr = `rgb(${col.join(",")})`;
                  const range = LAYER_RANGES[l.key];
                  const pct = Math.max(0, Math.min(100,
                    ((band[l.key] - range.min) / (range.max - range.min)) * 100
                  ));
                  const isActive = activeLayer === l.key;

                  return (
                    <div
                      key={l.key}
                      onClick={() => setActiveLayer(isActive ? null : l.key)}
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(255,255,255,0.025)",
                        borderRadius: 12, padding: "10px 10px 8px",
                        textAlign: "center", cursor: "pointer",
                        border: isActive
                          ? "1px solid rgba(255,255,255,0.15)"
                          : "1px solid rgba(255,255,255,0.04)",
                        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                        animation: `latFadeUp 0.4s ease-out ${0.1 + idx * 0.06}s both`,
                      }}
                    >
                      <div style={{ fontSize: 13 }}>{l.icon}</div>
                      <div style={{
                        fontSize: 18, fontWeight: 700, color: colStr,
                        fontFamily: "'SF Mono', 'Fira Code', monospace",
                        marginTop: 4,
                      }}>
                        {band[l.key]}{l.key === "temp" ? "\u00b0" : ""}
                      </div>
                      {/* Animated bar */}
                      <div style={{
                        width: "100%", height: 3, borderRadius: 2,
                        background: "rgba(255,255,255,0.06)", marginTop: 6,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          width: `${pct}%`, height: "100%",
                          background: `linear-gradient(90deg, ${colStr}, ${colStr})`,
                          borderRadius: 2,
                          transformOrigin: "left",
                          animation: `latBarGrow 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.3 + idx * 0.08}s both`,
                        }} />
                      </div>
                      <div style={{
                        fontSize: 8, color: "rgba(255,255,255,0.28)",
                        textTransform: "uppercase", letterSpacing: "0.06em",
                        marginTop: 5, fontWeight: 500,
                      }}>
                        {l.key === "temp" ? "\u00b0C" : l.unit}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Separator */}
              <div style={{
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                marginBottom: 16,
              }} />

              {/* Info cards */}
              {infoItems.map((item, i) => (
                <div key={item.label} style={{
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: 12, padding: "12px 14px", marginBottom: 8,
                  border: "1px solid rgba(255,255,255,0.035)",
                  animation: `latFadeUp 0.4s ease-out ${0.35 + i * 0.06}s both`,
                  transition: "background 0.2s",
                }}>
                  <div style={{
                    fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.25)", marginBottom: 6, fontWeight: 600,
                  }}>
                    {item.icon} {item.label}
                  </div>
                  <div style={{
                    fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.6,
                    fontWeight: 400,
                  }}>
                    {item.text}
                  </div>
                </div>
              ))}

              {/* Key Insight */}
              <div style={{
                background: "linear-gradient(135deg, rgba(255,170,40,0.06), rgba(255,90,40,0.03))",
                borderRadius: 14, padding: "14px 16px", marginTop: 4, marginBottom: 14,
                border: "1px solid rgba(255,170,40,0.1)",
                animation: `latFadeUp 0.4s ease-out ${0.35 + infoItems.length * 0.06}s both`,
              }}>
                <div style={{
                  fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em",
                  color: "rgba(255,190,80,0.55)", marginBottom: 8, fontWeight: 700,
                }}>
                  \u2728 Key Insight
                </div>
                <div style={{
                  fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.7,
                  fontStyle: "italic", fontWeight: 400,
                }}>
                  {band.keyFact}
                </div>
              </div>

              {/* Notable places */}
              <div style={{
                display: "flex", gap: 6, flexWrap: "wrap",
                animation: `latFadeUp 0.4s ease-out ${0.45 + infoItems.length * 0.06}s both`,
              }}>
                {band.places.map(p => (
                  <span key={p} style={{
                    fontSize: 10, padding: "4px 10px",
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 20,
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    fontWeight: 500, letterSpacing: "0.01em",
                  }}>
                    \ud83d\udccd {p}
                  </span>
                ))}
              </div>

              {/* Adjacent bands navigation */}
              <div style={{
                marginTop: 22,
                animation: `latFadeUp 0.4s ease-out ${0.55 + infoItems.length * 0.06}s both`,
              }}>
                <div style={{
                  fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.2)", marginBottom: 10, fontWeight: 600,
                }}>
                  Adjacent Bands
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {band.id > 0 && (
                    <button
                      onClick={() => selectBand(band.id - 1)}
                      style={{
                        flex: 1, background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: 10, padding: "10px 12px",
                        cursor: "pointer", textAlign: "left",
                        transition: "all 0.2s",
                        color: "inherit",
                      }}
                    >
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 2 }}>
                        \u2191 North
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                        {BANDS[band.id - 1].icon} {BANDS[band.id - 1].name}
                      </div>
                    </button>
                  )}
                  {band.id < BANDS.length - 1 && (
                    <button
                      onClick={() => selectBand(band.id + 1)}
                      style={{
                        flex: 1, background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: 10, padding: "10px 12px",
                        cursor: "pointer", textAlign: "left",
                        transition: "all 0.2s",
                        color: "inherit",
                      }}
                    >
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 2 }}>
                        \u2193 South
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                        {BANDS[band.id + 1].icon} {BANDS[band.id + 1].name}
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom spacer */}
              <div style={{ height: 20 }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
