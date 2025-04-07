import { Container, Row, Col } from "react-bootstrap";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";



function Favorite() {

    const { favorite } = useMovieContext();

    if (favorite) {
        return (
            <Container>
                <div className="favorites">
                    <h2 className="mt-4">Your Favorite Movies</h2>
                    {favorite && favorite.length > 0 ? (
                        <Row>
                            {favorite.map((movie) => (
                                <Col className='mb-5' md={4} key={movie.id}>
                                    <MovieCard movie={movie} />
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p className="text-danger">No favorite movies found</p>
                    )}
                </div>
            </Container>
        )
    }

    return (
        <>
            <h1>Your favorite Movies will be added here</h1>
        </>
    );
}

export default Favorite