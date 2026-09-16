const fs = require("fs");
const path = require("path");

const menus = JSON.parse(fs.readFileSync("./thuc_don_tuan_thu2_den_thu7.json", "utf8"));

// Read ingredients
const ingFile = fs.readFileSync("./src/data/ingredients.ts", "utf8");
const ingMap = {};

// Match all ingredient object blocks
const lines = ingFile.split("\n");
let currentId = null;
let currentObj = {};

for (const line of lines) {
  const idMatch = line.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) {
    if (currentId) ingMap[currentId] = currentObj;
    currentId = idMatch[1];
    currentObj = { id: currentId };
  }
  const nameMatch = line.match(/name:\s*['"]([^'"]+)['"]/);
  if (nameMatch && currentId) currentObj.name = nameMatch[1];

  const catMatch = line.match(/category:\s*['"]([^'"]+)['"]/);
  if (catMatch && currentId) currentObj.category = catMatch[1];

  const unitMatch = line.match(/unit:\s*['"]([^'"]+)['"]/);
  if (unitMatch && currentId) currentObj.unit = unitMatch[1];
}
if (currentId) ingMap[currentId] = currentObj;

console.log("Loaded ingredients count:", Object.keys(ingMap).length);

// Build enriched version
const enriched = menus.map(m => ({
  name: m.name,
  ageGroup: m.ageGroup,
  childrenCount: m.childrenCount,
  budgetPerChild: m.budgetPerChild,
  meals: m.meals.map(meal => ({
    mealName: meal.name,
    dishes: meal.dishes.map(d => ({
      dishName: d.name,
      ingredients: d.ingredients.map(ing => {
        const info = ingMap[ing.ingredientId] || {};
        return {
          ingredientId: ing.ingredientId,
          ingredientName: info.name || ing.ingredientId,
          quantityPerChildGram: ing.quantityPerChild,
          unit: info.unit || "gam"
        };
      })
    }))
  }))
}));

if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
}

fs.writeFileSync("./public/thuc_don_tuan_chuan.json", JSON.stringify(menus, null, 2), "utf8");
fs.writeFileSync("./public/thuc_don_tuan_chi_tiet.json", JSON.stringify(enriched, null, 2), "utf8");
fs.writeFileSync("./thuc_don_tuan_chi_tiet.json", JSON.stringify(enriched, null, 2), "utf8");

console.log("Files created successfully in ./public");
