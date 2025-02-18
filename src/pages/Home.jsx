import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '../services/api'

function Home() {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (err) {
                console.log(err)
                setError('failed to load movies......')
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()

    }, [])


    const searchHandler = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            alert("No such movies found");
            return;
        }

        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch (err) {
            setError('No such movie found')
            console.log(err);
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <>
            <Container className='px-4 py-3'>
                <Row>
                    <Col md={12}>
                        <form onSubmit={searchHandler} className='mb-4'>
                            <input type="text" className='search-text p-1' value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
                            <button type='submit' className='btn search-button ms-3 bg-warning'>Search</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    {error && <div className='error-msg'>{error}</div>}
                    {movies.map((movie) => (
                        <Col className='mb-5' md={4} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Home