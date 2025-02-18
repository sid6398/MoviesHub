import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {

    const { isFavorite, addFavorites, removeFavorites } = useMovieContext()

    const favorite = isFavorite(movie.id)

    // const addFavorite = () => {
    //     alert('its working');
    // }

    return (
        <>
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.release_date}
                    </Card.Text>
                    <Button variant="primary" onClick={() =>
                        isFavorite(movie.id) ? removeFavorites(movie.id) : addFavorites(movie)
                    }
                    >
                        {isFavorite(movie.id) ? "Remove from Favorite" : "Add to Favorite"}</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default MovieCard