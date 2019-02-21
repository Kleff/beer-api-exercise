

let url = "https://api.punkapi.com/v2/beers?page=1&per_page=10";
document.getElementById('moreBeers').addEventListener('click', moreBeers);

function showErrorMessage(error) {
    let message = `
        <p>Sorry, there was a problem. We are working to resolve the issue as quickly as possible. Error: ${error}</p>
        <a href="index.html">Back to Home</a>
        `;
    document.getElementById('error-message').innerHTML = message;
};

function getBeers() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output = '<h2>Take a look at our Beers!</h2>'
            data.forEach(function (beer) {
                output += `
                    <div class="beer-item">
                        <img src="${beer.image_url}" alt="${beer.name}"/>
                        <div class="beer-name">
                            <h3>${beer.name}</h3>
                            <p>${beer.tagline}</p>
                        </div>
                        <div class="ibu-ph">
                            <h3>${beer.ibu}</h3>
                            <p>IBU</p>
                        </div>
                        <div class="ibu-ph">
                            <h3>${beer.ph}</h3>
                            <p>pH</p>
                        </div>
                    </div>
                    <hr>
                `
            });
            document.getElementById('beersList').innerHTML = output;
        })
        .catch(function(error) {
            // Cleaning beerList
            document.getElementById('beersList').innerHTML = " ";
            showErrorMessage(error);
            // Hide button moreBeers
            document.getElementById('moreBeers').style.display = "none";
          });
        
};

function moreBeers() {
    // Change url variable to any unknown url on purpose because I want it to throw an error.
    url = "https://api.punkapi.com/v2/thisUrlDoesntExist/";
    getBeers()
};

getBeers()