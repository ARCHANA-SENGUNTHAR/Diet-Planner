/** ============== Search Functionality ============== **/
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = "";

  if (!query) return;

  const matches = [];

  // 1️⃣ Search by ingredients
  RECIPES.forEach(recipe => {
    const hasMatch = recipe.ingredients.some(i => i.item.toLowerCase().includes(query));
    if (hasMatch) matches.push(recipe);
  });

  // 2️⃣ Also search by recipe name
  RECIPES.forEach(recipe => {
    if (recipe.name.toLowerCase().includes(query) && !matches.includes(recipe)) {
      matches.push(recipe);
    }
  });

  // 3️⃣ Render results
  if (matches.length) {
    searchResults.innerHTML = matches.map(recipe => {
      const ingList = recipe.ingredients.map(i => `${cap(i.item)} (${i.g}g)`).join(", ");
      return `<div class="search-item">
        <b>${recipe.name}</b> — ${recipe.calories} kcal, ${recipe.protein} g protein<br>
        Ingredients: ${ingList}
        ${recipe.vegan ? '<span class="tag good">Vegan</span>' : ''}
        ${recipe.veg ? '<span class="tag">Vegetarian</span>' : ''}
      </div>`;
    }).join("");
  } else {
    searchResults.innerHTML = "<div class='search-item'>No matching recipes found.</div>";
  }
});
