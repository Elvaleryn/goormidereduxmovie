import movieService from '../services/movies'

const singleMovieReducer = (state = [], action) => {
	console.log(action)
	switch(action.type) {
		case 'INIT_SINGLE_MOVIE':
      return action.data
	default: return state
	}
}
console.log(singleMovieReducer.state)
export const initializeSingleMovie = (id) => {
  return async dispatch => {
    const movie = await movieService.getSingleMovie(id)
    dispatch({
      type: 'INIT_SINGLE_MOVIE',
      data: movie.data
    })
  }
}


export default singleMovieReducer