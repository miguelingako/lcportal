// DATA section











const data = [
    { id: 1, title: '2019-14411-1', content: 'Morden, Miguel Von M. BSOA 3', url:'2019-14411-1-G.html' },
    
    
    
    
    { id: 2, title: '2019-14411-2', content: 'Cabrera, Aljun C. BSCRIM 4', url: '2019-14411-2-G.html' },
    
    
    
    
    { id: 3, title: '2019-14411-3', content: 'Gregorio, Renelyn G. BSED 4', url: '#post3' }
    
    
];










function search() {
    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('search-results');


    if (query.length < 12) {
        resultsContainer.innerHTML = 'Please enter a correct student ID number!';
        return;
    }

    // Filter results based on the query
    const results = data.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );

    // Display results or a message if no results are found
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `<a href="${item.url}"><h3>${item.title}</h3><p>${item.content}</p></a>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = 'No Student Data.';
    }
}

// Clear results when clicking outside the search bar or input field
document.addEventListener('click', function(event) {
    const searchContainer = document.getElementById('search-container');
    if (!searchContainer.contains(event.target)) {
        document.getElementById('search-results').innerHTML = '';
    }
});
