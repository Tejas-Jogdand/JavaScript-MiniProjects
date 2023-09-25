let movies = [

    {
        name: "RRR",
        ratting: 8.7,
        poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        description: "Action movie"
    },
    {
        name: "Infinity war",
        ratting: 9.5,
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
        description: "marvel"
    },
    {
        name: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
        ratting: 8.7,
        poster: "",
        description: "dramer"
    },
    {
        name: "Ant man",
        ratting: 8.9,
        poster: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg",
        description: "entertanment"
    },
    {
        name: "Endgame",
        ratting: 8.6,
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        description: "marvel movie"
    },
    {
        name: "Iron man",
        ratting: 8.7,
        poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
        description: "action movie"
    },
    {
        name: "Gardian of gallexy",
        ratting: 9.7,
        poster: "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg",
        description: "duplicate"
    },
    {
        name: "Gardian of gallexy 2",
        ratting: 9.5,
        poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202203/GOG-2-poster_1648409965.jpg",
        description: "Drama, Action"
    },
    {
        name: "Fast and Furious",
        ratting: 9.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Fast_and_Furious_Poster.jpg/220px-Fast_and_Furious_Poster.jpg",
        description: "Racing"
    },
    {
        name: "Death note",
        ratting: 9.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/7/72/Death_Note_Characters.jpg",
        description: "Anime"
    }

]


function searchMovie() {
    let movieName = document.getElementById('search').value;
    console.log(movieName);
}

function displayMovies() {

    let htmlString = ` `;

    for (let i = 0; i < movies.length; i++) {

        movies[i];

        htmlString=htmlString+`<div class="movie">
        <div class="overlay">
            <div class="video">

            </div>
            <div class="details">

                <h1>${movies[i].name}</h1>
                <h2>IMDB : 9.8</h2>
                <p>Nat Wolff . Willem Dafoe</p>

            </div>
        </div>
        <img src="${movies[i].poster}" alt="Death note poster" class="movie-poster">

    </div>`;
    }

    document.getElementById("movie-card").innerHTML = htmlString;

}

// prefered way for faster execution
// let movieDIV = document.createElement("div");
// movieDIV.classList.add("movie");

// let overlayDIV = document.createElement("div");
// overlayDIV.classList.add("overlay");

// movieDIV.appendChild(overlayDIV);

// console.log(movieDIV);

displayMovies();