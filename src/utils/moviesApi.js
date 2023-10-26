import { apiKeyAuth, accessTokenAuth } from "./apiKey";

// Opciones para las solicitudes HTTPS

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessTokenAuth}`
    }
};


/**
 * Exportamos las funciones de fetching de datos de la API de TMDB, con los diferentes endpoints. Luego las vamos a tener que importar en cada uno de los componentes donde vamos a necesitar utilizar los datos recibidos de la API.
 */

export const fetchTrendingMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=es-AR', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js fetchTrendingMovies Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.error(err);

        });
}

export const fetchTrendingSeries = () => {
    return fetch('https://api.themoviedb.org/3/trending/tv/day?language=es-AR', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js fetchTrendingSeries Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.error(err);

        });
}



export const fetchTopRatedMovies = () => {
    const randomNumber = Math.floor(Math.random() * 20)
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es-AR&page=${randomNumber}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js fetchTopRatedMovies Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.error(err);
        });
}


export const fetchDiscoverMovies = () => {
    return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-AR&page=1&sort_by=popularity.desc', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js fetchDiscoverMovies Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.error(err);
        });
}

