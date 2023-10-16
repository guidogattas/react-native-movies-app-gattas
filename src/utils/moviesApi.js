import { useEffect, useState } from "react";
import { apiKeyAuth, accessTokenAuth } from "./apiKey";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessTokenAuth}`
    }
};

export const fetchTrendingMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=es-ES', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js Status: ${response.status}`);
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
    return fetch('https://api.themoviedb.org/3/trending/tv/day?language=es-ES', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js Status: ${response.status}`);
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
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=${randomNumber}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js Status: ${response.status}`);
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
    return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en moviesApi.js Status: ${response.status}`);
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


// OBTENEMOS LOS DATOS DE LOS GÉNEROS:
export const GenreList = () => {
    const [movieGenres, setMovieGenres] = useState([]);
    const [tvGenres, setTvGenres] = useState([]);

    useEffect(() => {


        fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options)
            .then(response => response.json())
            .then(response => setMovieGenres(response.genres))
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }, []);
    return { movieGenres, tvGenres }
}



// PARA TRAER POR GÉNERO, CAMBIAR LOS NÚMEROS FINALES.
// https://api.themoviedb.org/3/discover/movie?api_key={apiKeyAuth}&language=en-US&sort_by=release_date.desc&page=1&with_genres=35,53,27