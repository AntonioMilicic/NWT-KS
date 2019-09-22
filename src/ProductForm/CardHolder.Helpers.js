export function filterItems(items, selectedCategory, search) {
  let filteredItems = [];
  const categoryIsSelected = !!selectedCategory;
  const searchExists = !!search;
  if (categoryIsSelected) {
    const selectedCategoryExists = !!items;
    if (selectedCategoryExists) {
      filteredItems.push(...items.filter(item => item.category.includes(selectedCategory)));
    }
  } else {
    filteredItems.push(...items);
  }
  if (searchExists) {
    filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }
  return filteredItems;
}
