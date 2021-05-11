import TheMovieDbSource from '../../data/themoviedb-source'

const nowPlaying = {
  async render () {
    return `<h2>Now Playing</h2>`
  },

  async afterRender () {
    const movies = await TheMovieDbSource.nowPlayingMovies()
    console.log(movies)
  }
}

export default nowPlaying
