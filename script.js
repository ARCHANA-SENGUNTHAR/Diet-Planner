const CO2 = {
  beef:60, lamb:24, pork:7, chicken:6, cheese:21, paneer:13, eggs:4.5,
  milk:1.3, yogurt:2.2, curd:2.2, butter:12, ghee:9,
  rice:4, wheat:1.4, oats:1.1, potatoes:0.3, tomato:2.1, onion:0.5, spinach:2,
  lentils:0.9, chickpeas:0.9, tofu:3, peas:0.6, cabbage:0.3, cauliflower:0.6,
  apple:0.5, banana:0.7, mango:1.1, oil:3, sugar:0.8, peanuts:2.5, tea:1.9, coffee:17,
};
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const INDIA_SEASONS = {
  1:["cauliflower","carrot","peas","spinach","orange","cabbage"],
  2:["cauliflower","carrot","peas","spinach","orange","cabbage"],
  3:["cauliflower","carrot","peas","spinach","banana"],
  4:["mango","cucumber","watermelon","banana","tomato"],
  5:["mango","cucumber","watermelon","banana","tomato"],
  6:["mango","cucumber","banana","okra","tomato"],
  7:["okra","gourd","banana","spinach","tomato"],
  8:["okra","gourd","banana","spinach","tomato"],
  9:["okra","gourd","banana","spinach","tomato"],
 10:["apple","cabbage","cauliflower","spinach","peas"],
 11:["apple","cabbage","cauliflower","spinach","peas","tomato"],
 12:["apple","cabbage","cauliflower","spinach","peas"]
};
const SEASON_KEYS = {
  cauliflower:"cauliflower", cabbage:"cabbage", peas:"peas", spinach:"spinach",
  tomato:"tomato", apple:"apple", banana:"banana", mango:"mango",
  carrot:"carrot", okra:"okra", cucumber:"cucumber", watermelon:"watermelon", gourd:"gourd"
};
const ING = {
  beef:{co2:CO2.beef, vegan:false, veg:false},
  lamb:{co2:CO2.lamb, vegan:false, veg:false},
  pork:{co2:CO2.pork, vegan:false, veg:false},
  chicken:{co2:CO2.chicken, vegan:false, veg:false},
  cheese:{co2:CO2.cheese, vegan:false, veg:true},
  paneer:{co2:CO2.paneer, vegan:false, veg:true},
  eggs:{co2:CO2.eggs, vegan:false, veg:true},
  milk:{co2:CO2.milk, vegan:false, veg:true},
  yogurt:{co2:CO2.yogurt, vegan:false, veg:true},
  curd:{co2:CO2.curd, vegan:false, veg:true},
  butter:{co2:CO2.butter, vegan:false, veg:true},
  ghee:{co2:CO2.ghee, vegan:false, veg:true},
  rice:{co2:CO2.rice, vegan:true, veg:true},
  wheat:{co2:CO2.wheat, vegan:true, veg:true},
  oats:{co2:CO2.oats, vegan:true, veg:true},
  potatoes:{co2:CO2.potatoes, vegan:true, veg:true},
  tomato:{co2:CO2.tomato, vegan:true, veg:true, seasonal:true},
  onion:{co2:CO2.onion, vegan:true, veg:true},
  spinach:{co2:CO2.spinach, vegan:true, veg:true, seasonal:true},
  lentils:{co2:CO2.lentils, vegan:true, veg:true},
  chickpeas:{co2:CO2.chickpeas, vegan:true, veg:true},
  tofu:{co2:CO2.tofu, vegan:true, veg:true},
  peas:{co2:CO2.peas, vegan:true, veg:true, seasonal:true},
  cabbage:{co2:CO2.cabbage, vegan:true, veg:true, seasonal:true},
  cauliflower:{co2:CO2.cauliflower, vegan:true, veg:true, seasonal:true},
  apple:{co2:CO2.apple, vegan:true, veg:true, seasonal:true},
  banana:{co2:CO2.banana, vegan:true, veg:true, seasonal:true},
  mango:{co2:CO2.mango, vegan:true, veg:true, seasonal:true},
  oil:{co2:CO2.oil, vegan:true, veg:true},
  sugar:{co2:CO2.sugar, vegan:true, veg:true},
  peanuts:{co2:CO2.peanuts, vegan:true, veg:true},
  tea:{co2:CO2.tea, vegan:true, veg:true},
  coffee:{co2:CO2.coffee, vegan:true, veg:true}
};

// Recipe database
const RECIPES = [
  {id:"oats-veg", name:"Masala Oats with Veggies", meal:"breakfast", vegan:true, veg:true, calories:380, protein:13, ingredients:[{item:"oats", g:50}, {item:"peas", g:30}, {item:"onion", g:20}, {item:"tomato", g:40}, {item:"oil", g:6}]},
  {id:"poha", name:"Poha with Peas & Peanuts", meal:"breakfast", vegan:true, veg:true, calories:420, protein:12, ingredients:[{item:"rice", g:60}, {item:"peas", g:40}, {item:"onion", g:30}, {item:"peanuts", g:20}, {item:"oil", g:8}]},
  {id:"banana-lassi", name:"Banana Lassi", meal:"breakfast", vegan:false, veg:true, calories:310, protein:9, ingredients:[{item:"banana", g:120}, {item:"curd", g:200}, {item:"sugar", g:10}]},
  {id:"chana-rice", name:"Chana Masala + Rice", meal:"lunch", vegan:true, veg:true, calories:620, protein:24, ingredients:[{item:"chickpeas", g:180}, {item:"tomato", g:80}, {item:"onion", g:40}, {item:"oil", g:10}, {item:"rice", g:150}]},
  {id:"pulao-raita", name:"Veg Pulao + Raita", meal:"lunch", vegan:false, veg:true, calories:650, protein:18, ingredients:[{item:"rice", g:150}, {item:"peas", g:50}, {item:"tomato", g:40}, {item:"onion", g:40}, {item:"oil", g:10}, {item:"curd", g:100}]},
  {id:"dal-roti", name:"Dal + Roti + Salad", meal:"lunch", vegan:true, veg:true, calories:600, protein:22, ingredients:[{item:"lentils", g:180}, {item:"wheat", g:100}, {item:"tomato", g:80}, {item:"onion", g:40}, {item:"oil", g:6}]},
  {id:"tofu-rice", name:"Tofu Stir Fry + Rice", meal:"lunch", vegan:true, veg:true, calories:610, protein:29, ingredients:[{item:"tofu", g:150}, {item:"spinach", g:50}, {item:"peas", g:40}, {item:"oil", g:10}, {item:"rice", g:150}]},
  {id:"paneer-wrap", name:"Paneer Tikka Wrap", meal:"dinner", vegan:false, veg:true, calories:640, protein:31, ingredients:[{item:"paneer", g:120}, {item:"wheat", g:80}, {item:"onion", g:40}, {item:"tomato", g:60}, {item:"oil", g:10}, {item:"curd", g:40}]},
  {id:"khichdi", name:"Veg Khichdi", meal:"dinner", vegan:true, veg:true, calories:570, protein:20, ingredients:[{item:"rice", g:100}, {item:"lentils", g:100}, {item:"carrot", g:50}, {item:"peas", g:40}, {item:"oil", g:6}]},
  {id:"palak-tofu", name:"Palak Tofu + Roti", meal:"dinner", vegan:true, veg:true, calories:680, protein:33, ingredients:[{item:"spinach", g:120}, {item:"tofu", g:150}, {item:"onion", g:40}, {item:"tomato", g:60}, {item:"oil", g:8}, {item:"wheat", g:70}]}
];

// Alternative meals
const ALT = {
  chickenCurryRice: {name:"Chicken Curry + Rice", ingredients:[{item:"chicken", g:150},{item:"oil", g:15},{item:"tomato", g:80},{item:"onion", g:60},{item:"rice", g:150}]},
  beefBurgerFries: {name:"Beef Burger + Fries", ingredients:[{item:"beef", g:180},{item:"wheat", g:100},{item:"potatoes", g:150},{item:"cheese", g:30},{item:"oil", g:20}]}
};

/** ============== Helpers ============== **/
const $ = s => document.querySelector(s);
const el = (tag, opts={}, children=[])=>{
  const e = document.createElement(tag);
  if(opts.class) e.className = opts.class;
  if(opts.html) e.innerHTML = opts.html;
  if(opts.text) e.textContent = opts.text;
  if(opts.id) e.id = opts.id;
  children.forEach(c=>e.appendChild(c));
  return e;
};
const cap = s => s[0].toUpperCase()+s.slice(1);
const inSeason = (item, monthIdx) => (INDIA_SEASONS[monthIdx+1] || []).includes(item);

/** ============== Pick Plan ============== **/
function pickPlan(diet, monthIdx, preferLocal){
  const plan = [];
  ["breakfast","lunch","dinner"].forEach(meal=>{
    const candidates = RECIPES.filter(r=>{
      if(r.meal!==meal) return false;
      if(diet==="vegan" && !r.vegan) return false;
      if(diet==="veg" && !r.veg) return false;
      return true;
    });
    const choice = candidates[Math.floor(Math.random()*candidates.length)];
    plan.push(choice);
  });
  return plan;
}

/** ============== Render Multi-Day Plan ============== **/
function renderMultiDayPlan(allPlans, monthIdx, preferLocal){ 
  const grid = $("#plan");
  grid.innerHTML = "";
  let totalCo2 = 0, totalCal = 0, totalProt = 0;

  if(allPlans.every(p => p.length === 0)){
    grid.appendChild(el("div", { class: "card", html: "No compatible recipes found for your allergies/restrictions." }));
    $("#summary").style.display = "none";
    return;
  }

  allPlans.forEach((plan, idx) => {
    const dayDiv = el("div", { class: "card" }, [
      el("div", { class: "title" }, [el("h3", { html: `Day ${idx + 1}` })])
    ]);

    plan.forEach(rec => {
      const ul = el("ul", { class: "ingredients" });

      rec.ingredients.forEach(({ item, g }) => {
        const seasonTxt = ING[item]?.seasonal ? (inSeason(item, monthIdx) ? "in season" : "out of season") : "";
        const liHtml = `<b>${cap(item)}</b> — ${g}g`;
        const tagHtml = seasonTxt ? ` <span class="tag ${inSeason(item, monthIdx) ? 'good' : 'warn'}">${seasonTxt}</span>` : "";
        ul.appendChild(el("li", { html: liHtml + tagHtml }));
      });

      dayDiv.appendChild(el("div", { html: `<b>${rec.name}</b>` }));
      dayDiv.appendChild(ul);

      totalCo2 += rec.ingredients.reduce((sum, i) => {
        const ing = ING[i.item];
        if (!ing) return sum; // skip if ingredient not found
        return sum + (i.g / 1000) * ing.co2;
      }, 0);

      // If you want, you can also calculate calories and protein here
      totalCal += rec.calories || 0;
      totalProt += rec.protein || 0;
    });

    grid.appendChild(dayDiv);
  });

  // Update summary section
  $("#totalCo2").textContent = totalCo2.toFixed(2);
  $("#totalCal").textContent = totalCal;
  $("#totalProt").textContent = totalProt.toFixed(1) + " g";

  const altChickenCo2 = ALT.chickenCurryRice.ingredients.reduce(
    (sum, i) => sum + (i.g / 1000) * (ING[i.item]?.co2 || 0),
    0
  );
  const frac = totalCo2 / altChickenCo2;
  const tag = $("#sustainTag");
  tag.textContent = frac < 0.6 ? "Excellent (very low)" : (frac < 0.9 ? "Good (low)" : "OK");
  tag.className = "tag " + (frac < 0.6 ? "good" : frac < 0.9 ? "warn" : "bad");

  $("#summary").style.display = "block";
}

/** ============== Event Listeners ============== **/
$("#gen").addEventListener("click",()=>{
  const diet = $("#diet").value;
  const monthIdx = parseInt($("#month").value,10);
  const preferLocal = $("#local").checked;
  const days = parseInt($("#days").value)||1;

  const allergies = $("#allergy").value.toLowerCase().split(",").map(a=>a.trim()).filter(a=>a);
  const restrictions = $("#restrictions").value.toLowerCase().split(",").map(r=>r.trim()).filter(r=>r);

  const dailyPlans = [];
  for(let d=0; d<days; d++){
    const plan = pickPlan(diet, monthIdx, preferLocal).map(rec=>{
      if(!rec) return null;
      const hasAllergy = rec.ingredients.some(i=>allergies.includes(i.item.toLowerCase()));
      const hasRestrict = rec.ingredients.some(i=>restrictions.includes(i.item.toLowerCase()));
      if(hasAllergy || hasRestrict) return null;
      return rec;
    }).filter(Boolean);
    dailyPlans.push(plan);
  }
  renderMultiDayPlan(dailyPlans, monthIdx, preferLocal);
});

$("#days").addEventListener("input",()=>{
  const d = parseInt($("#days").value)||1;
  $("#gen").textContent = `⚡ Generate ${d}-Day Plan`;
});

