export function filterItems(categories, selectedCategory, search) {
  let filteredItems = [];
  const categoryIsSelected = !!selectedCategory;
  const searchExists = !!search;
  if (categoryIsSelected) {
    const selectedCategoryExists = !!categories[selectedCategory];
    if (selectedCategoryExists) {
      filteredItems.push(...categories[selectedCategory]);
    }
  } else {
    Object.keys(categories).forEach((key) => {
      if (categories.hasOwnProperty(key)) {
        const categoryItems = [...categories[key]];
        filteredItems.push(...categoryItems);
      }
    });
  }
  if (searchExists) {
    filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }
  return filteredItems;
}
