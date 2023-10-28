let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

document.addEventListener("DOMContentLoaded", function () {
    const sortedBands = sortBandNamesWithoutArticles(bandNames);
    const ul = document.getElementById('band');

    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        ul.appendChild(li);
    });
});


function sortBandNamesWithoutArticles(bandNames) {
    // Define an array of common articles to be excluded
    const articles = ['a', 'an', 'the'];

    // Remove articles and convert to lowercase for sorting
    const sortedBandNames = bandNames.map(band => {
        const words = band.split(' ');
        const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
        return filteredWords.join(' ').toLowerCase();
    });

    // Sort the modified band names in lexicographic order
    sortedBandNames.sort();

    // Restore the original case and format
    const result = sortedBandNames.map(sortedName => {
        return bandNames.find(band => sortedName === band.toLowerCase().replace(/(a|an|the)\s/, ''));
    });

