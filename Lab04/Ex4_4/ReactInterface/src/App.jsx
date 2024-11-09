import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [post, setPost] = useState([])

  const client = axios.create({
    baseURL: 'http://localhost:8080/api', // Ensure server URL is correct
  })

  // get movies
  const getMovies = async () => {
    try {
      const response = await client.get('/movies')
      setPost(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  // post movie
  function postMovie(title, year) {
    client
      .post('/movie', { title, year }) // Correct endpoint here
      .then((response) => {
        console.log(response)
        getMovies() // Refresh the list after posting
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // delete movie
  function deleteMovie(id) {
    client
      .delete(`/movie/${id}`) // Correct endpoint here
      .then((response) => {
        console.log(response)
        getMovies() // Refresh the list after deleting
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='App'>
      <a href='http://localhost:5173/quotes'>Quotes</a>
      <header className='App-header'>
        <h1>React Interface</h1>
        <button onClick={getMovies}>Get Movies</button>
        <form>
          <input type='text' placeholder='Title' id='title' style={{padding: "5px"}}/>
          <input type='text' placeholder='Year' id='year'  style={{padding: "5px"}}/>
          <button
            onClick={(e) => {
              e.preventDefault()
              postMovie(
                document.getElementById('title').value,
                document.getElementById('year').value
              )
            }}
          >
            Post Movie
          </button>
        </form>
        <ul>
          {post.map((movie) => (
            <li key={movie.id}>
              {movie.title} - {movie.year}
              <button
                onClick={() => {
                  deleteMovie(movie.id)
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
