import TheMovieDbSource from '../../data/themoviedb-source'

const Detail = {
  async render () {
    return `<h1>Detail Page</h1>`
  },

  async afterRender () {
    const movies = await TheMovieDbSource.detailMovies()
    console.log(movies)
  }
}

export default Detail
