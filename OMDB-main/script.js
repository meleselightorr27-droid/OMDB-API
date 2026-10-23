

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        const searchTerm = document.getElementById("search").value;
        console.log(searchTerm)
        const url= "http://www.omdbapi.com/?apikey=fc13dc05&s="+searchTerm;
        
        const response = await fetch(url);

        const json = await response.json();

        console.log(JSON.stringify(json));

        const movieHolder = document.getElementById("movieHolder");
        movieHolder.innerHTML = ""; 

        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD
           let divContainer = document.createElement('div');
           divContainer.classList.add("card");

            // Create an image element
            //      point it to the image from this movie            
            let img = document.createElement('img');
            img.src = movie.Poster;
            img.width = 100;

            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container
            let card = document.createElement('div');
            card.classList.add('container');
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title + ": "+movie.Year;
            card.appendChild(titleHeader);
            // Add the CONTAINER to the CARD
            divContainer.appendChild(img);
            divContainer.appendChild(card)
            // Add all the elements to the movieHolder element
            movieHolder.appendChild(divContainer)
        }


    }
    catch (error) {
        console.log(error)
    }
}