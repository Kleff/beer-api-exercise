
function getBeers() {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=10')
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
            // Clean beerList div
            document.getElementById('beersList').innerHTML = " ";
            let message = `
                <p>Sorry, there was a problem. We are working to resolve the issue as quickly as possible. Error: ${error}</p>
                <a href="/">Back to Home</a>
                `;
            document.getElementById('error-message').innerHTML = message;
            // Hide button moreBeers
            document.getElementById('moreBeers').style.display = "none";
          });
        
}

getBeers()


document.getElementById('moreBeers').addEventListener('click', moreBeers);
function moreBeers() {
    fetch('https://api.punkapi.com./thiswebdoesntexist')
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
            // Clean beerList div
            document.getElementById('beersList').innerHTML = " ";
            let message = `
                <p>Sorry, there was a problem. We are working to resolve the issue as quickly as possible. Error: ${error}</p>
                <a href="/">Back to Home</a>
                `;
            document.getElementById('error-message').innerHTML = message;
            // Hide button moreBeers
            document.getElementById('moreBeers').style.display = "none";
          });
}

/* Aclaración: Puede mejorarse el codigo mediante ciertos cambios. Por ejemplo, puede reutilizarse la misma función solo cambiando la dirección de FETCH utilizando alguna variable que contenga un string con la direccion correcta y que al apretar el boton la direccion cambie (sobreescribiendo la variable) por una erronea para que el catch capture el error y muestre el error-message.
*/