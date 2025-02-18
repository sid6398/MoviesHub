import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {


    const [favorite, setfavorite] = useState(() => {
        return JSON.parse(localStorage.getItem('favorite')) || [];
    });
    
    useEffect(() => {
        const storedFavs = localStorage.getItem('favorite')

        if (storedFavs) setfavorite(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }, [favorite])

    const addFavorites = (movie) => {
        setfavorite(prev => {
            if (prev.some(fav => fav.id === movie.id)) return prev; 
            return [...prev, movie];
        });
    };
    

    const removeFavorites = (movieId) => {
        setfavorite(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorite.some(movie => movie.id === movieId)
    }

    const value = {
        favorite,
        addFavorites,
        removeFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}