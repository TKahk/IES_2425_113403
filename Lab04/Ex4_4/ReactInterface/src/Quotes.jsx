import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function Quotes() {
    const [quote, setQuote] = useState([]); // Inicializa como um array vazio
    const [post, setPost] = useState([]);   // Armazena os filmes
    const [moviesMap, setMoviesMap] = useState({}); // Mapeia os movieIds para os títulos dos filmes

    const client = axios.create({
        baseURL: 'http://localhost:8080/api', // Certifique-se de que a URL está correta
    });

    // Função para obter as citações
    const getQuotes = async () => {
        try {
            const response = await client.get('/quotes');
            if (Array.isArray(response.data)) {
                setQuote(response.data); // Se for um array, define o estado como a resposta
            } else {
                console.error("Esperava um array, mas a resposta foi:", response.data);
                setQuote([]); // Se não for um array, set o estado para um array vazio
            }
        } catch (error) {
            console.error(error);
            setQuote([]); // Em caso de erro, também set um array vazio
        }
    };

    // Função para obter os filmes
    const getMovies = async () => {
        try {
            const response = await client.get('/movies');
            setPost(response.data); // Define os filmes no estado
            // Criar um mapa de movieId -> título do filme
            const movieMap = response.data.reduce((acc, movie) => {
                acc[movie.id] = movie.title;
                return acc;
            }, {});
            setMoviesMap(movieMap); // Atualiza o mapa com os filmes
        } catch (error) {
            console.error(error);
        }
    };

    // Função para postar uma nova citação
    function postQuote(quoteText, movieId) {
        const quoteData = {
            quote: quoteText,
            movieId: movieId, // Passa apenas o ID do filme
        };
    
        client
            .post('/quote', quoteData) // Chama o endpoint correto para adicionar a citação
            .then((response) => {
                console.log(response);
                setQuote((prevQuotes) => [...prevQuotes, response.data]); // Atualiza o estado com a nova citação
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Função para deletar uma citação
    function deleteQuote(id) {
        client
            .delete(`/quote/${id}`) // Endpoint para deletar uma citação
            .then((response) => {
                console.log(response);
                // Atualiza as citações após deletar
                setQuote((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Carregar filmes e citações quando o componente for montado
    useEffect(() => {
        getMovies(); // Carrega os filmes
        getQuotes(); // Carrega as citações
    }, []); // Vai ser chamado uma vez ao montar o componente

    return (
        <div className="App">
            <a href="http://localhost:5173/">Movies</a>
            <header className="App-header">
                <h1>Quotes</h1>
                <button onClick={getQuotes}>Get Quotes</button>
                <form>
                    <input
                        type="text"
                        placeholder="Quote"
                        id="quote"
                        style={{ padding: '5px' }}
                    />
                    <select id="movie" style={{ padding: '5px' }}>
                        <option value="">Select Movie</option>
                        {post.map((movie) => (
                            <option key={movie.id} value={movie.id}>
                                {movie.title} ({movie.year})
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            const selectedMovieId = document.getElementById('movie').value;
                            const quoteText = document.getElementById('quote').value;
                            if (selectedMovieId && quoteText) {
                                postQuote(quoteText, selectedMovieId); // Chama a função para postar
                            } else {
                                alert('Please fill in both quote and movie.');
                            }
                        }}
                    >
                        Post Quote
                    </button>
                </form>
                <ul>
                    {quote.length > 0 ? (
                        quote.map((quoteItem) => (
                            <li key={quoteItem.id}>
                                "{quoteItem.quote}" - {moviesMap[quoteItem.movieId] || 'Unknown Movie'}
                                <button onClick={() => deleteQuote(quoteItem.id)}>Delete</button>
                            </li>
                        ))
                    ) : (
                        <li>No quotes available</li>
                    )}
                </ul>
            </header>
        </div>
    );
}

export default Quotes;
