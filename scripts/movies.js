const API_KEY = 'api_key=b4ccabfdfef893a61af093cc73e42525';

const BASE_URL = 'https://api.themoviedb.org/3'

const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/original';
    
const requests = {
    fetchPopular: `${BASE_URL}/discover/movie?certiffication_country=pt-BR&certification.lte=G&sort_by=popularity.desc&${API_KEY}&language=pt-BR`,
    fetchTrending: `${BASE_URL}/trending/all/week?${API_KEY}&language=pt-BR`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?${API_KEY}&with_networks=213&language=pt-BR`,
    fetchActionMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=28&language=pt-BR`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=36&language=pt-BR`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=27&language=pt-BR`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=35&language=pt-BR`,
    fetchDocumentaries: `${BASE_URL}/discover/movie${API_KEY}&with_genres=29&language=pt-BR`
}

fetch(requests.fetchPopular).then((res) => res.json()).then((data) => {
    var Randommovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    var Dmovie = document.querySelector('.D-movie');
    var Dmovie_Title = document.querySelector('.name');
    var Dmovie_desc = document.querySelector('.description');
    var Dmovie_average = document.querySelector('.average');
    var Dmovie_data = document.querySelector('.date');
    var Dmovie_m = document.querySelector('.bg');


    Dmovie.style.backgroundImage = "url(" + IMG_URL + Randommovie.poster_path + ")";
    Dmovie_Title.innerText = Randommovie.title;
    Dmovie_average.innerText = Randommovie.vote_average;
    Dmovie_desc.innerText = Randommovie.overview;
    Dmovie_data.innerText = Randommovie.release_date;
    Dmovie_m.style.backgroundImage = "url(" + IMG_URL + Randommovie.backdrop_path + ")";
})

fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {

    const headrow = document.getElementById("headrow");

    const row = document.createElement("div");

    row.className = 'L-movie';

    row.classList.add('Altarow');

    headrow.appendChild(row);

    const title = document.createElement("h2")

    title.className = 'title';

    title.innerText = "Em Alta";

    row.appendChild(title);


    const row_posters = document.createElement("div");

    row_posters.className = "C-slider";

    row.appendChild(row_posters);

    data.results.forEach(movie => {

// img movie
        const poster = document.createElement("img");

        poster.className = "slider";

        var s2 = movie.id;

        poster.id = s2;

        poster.src = IMG_URL + movie.poster_path;


// title movie
        const title_movie_E = document.createElement("h3")

        title_movie_E.className = "title"
    
        title_movie_E.classList.add('titleMovieE')

        title_movie_E.innerText = movie.title;

        const infos = document.createElement("div");

 // div Cslider       

        const Cslider = document.createElement("div");

        Cslider.className = "Cslider"

        Cslider.classList.add('Cslider')


// C-slider dentro de L-movie
        row_posters.appendChild(Cslider);


// Cslider dentro do C-slider

        Cslider.appendChild(poster);

        Cslider.appendChild(infos);

// info dentro do Cslider


        infos.className = "infos"
    
        infos.classList.add('infosTitle');

        infos.appendChild(title_movie_E);
    })
})


fetch(requests.fetchPopular)
.then((res) => res.json())
.then((data) => {

    const headrow = document.getElementById("headrow");

    const row = document.createElement("div")

    row.className = 'L-movie';

    row.classList.add('PopularRow')

    headrow.appendChild(row);

    const title = document.createElement("h2")

    title.className = 'title';

    title.innerText = "Populares";

    row.appendChild(title);

    const row_posters = document.createElement("div");

    row_posters.className = "C-slider";

    row.appendChild(row_posters);


    data.results.forEach(movie => {

// img movie
        const poster = document.createElement("img");

        poster.className = "slider";

        var s2 = movie.id;

        poster.id = s2;

        poster.src = IMG_URL + movie.poster_path;


// title movie
        const title_movie = document.createElement("h3")

        title_movie.className = "title_movie_P"
    
        title_movie.classList.add('titleMovie_P')

        title_movie.innerText = movie.title;

        const infos = document.createElement("div");

 // div Cslider       

        const Cslider = document.createElement("div");

        Cslider.className = "Cslider"

        Cslider.classList.add('Cslider')


// C-slider dentro de L-movie
        row_posters.appendChild(Cslider);


// Cslider dentro do C-slider

        Cslider.appendChild(poster);

        Cslider.appendChild(infos);

// info dentro do Cslider


        infos.className = "infos"
    
        infos.classList.add('infosTitle');

        infos.appendChild(title_movie);
    })
})



fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {

    const headrow = document.getElementById("headrow");

    const row = document.createElement("div")

    row.className = 'L-movie';

    row.classList.add('ActionRow')

    headrow.appendChild(row);

    const title = document.createElement("h2")

    title.className = 'title';

    title.innerText = "Action ";

    row.appendChild(title);

    const row_posters = document.createElement("div");

    row_posters.className = "C-slider";

    row.appendChild(row_posters);


    data.results.forEach(movie => {
// img movie
        const poster = document.createElement("img");

        poster.className = "slider";

        var s2 = movie.id;

        poster.id = s2;

        poster.src = IMG_URL + movie.poster_path;


// title movie
        const title_movie = document.createElement("h2")

        title_movie.className = "title_movie"
    
        title_movie.classList.add('titleMovie')

        title_movie.innerText = movie.title;


        const infos = document.createElement("div");

 // div Cslider       

        const Cslider = document.createElement("div");

        Cslider.className = "Cslider"

        Cslider.classList.add('Cslider')


// C-slider dentro de L-movie
        row_posters.appendChild(Cslider);


// Cslider dentro do C-slider

        Cslider.appendChild(poster);

        Cslider.appendChild(infos);

// info dentro do Cslider


        infos.className = "infos"
    
        infos.classList.add('infosTitle');

        infos.appendChild(title_movie);
    })
})


fetch(requests.fetchNetflixOriginals)
.then((res) => res.json())
.then((data) => {

    const headrow = document.getElementById("headrow");

    const row = document.createElement("div")

    row.className = 'L-movie';

    row.classList.add('OriginaisRow')

    headrow.appendChild(row);

    const title = document.createElement("h2")

    title.className = 'title';

    title.innerText = "Originais da netflix";

    row.appendChild(title);

    const row_posters = document.createElement("div");

    row_posters.className = "C-slider";

    row.appendChild(row_posters);


    data.results.forEach(movie => {

// img movie
        const poster = document.createElement("img");

        poster.className = "slider";

        var s2 = movie.id;

        poster.id = s2;

        poster.src = IMG_URL + movie.poster_path;


// title movie
        const title_movie = document.createElement("h3")

        title_movie.className = "title_movie"
    
        title_movie.classList.add('titleMovie')

        title_movie.innerText = movie.name;


        const infos = document.createElement("div");

 // div Cslider       

        const Cslider = document.createElement("div");

        Cslider.className = "Cslider"

        Cslider.classList.add('Cslider')


// C-slider dentro de L-movie
        row_posters.appendChild(Cslider);


// Cslider dentro do C-slider

        Cslider.appendChild(poster);

        Cslider.appendChild(infos);

// info dentro do Cslider


        infos.className = "infos"
    
        infos.classList.add('infosTitle');

        infos.appendChild(title_movie);
    })
})


