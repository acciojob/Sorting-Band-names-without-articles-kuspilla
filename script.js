// Array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Pink Floyd'];

// Function to remove articles from a band name
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the UL element with id 'band'
const bandList = document.getElementById('band');

// Create list items and add them to the UL
bandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});
