import movieService from '../services/movies'

const genresReducer = (state = [], action) => {
	
	switch(action.type) {
		case 'GET_GENRES':
			return action.data.genres
	default: return state
	}
}

export const getGenres = (id) => {
  return async dispatch => {
    const genres = await movieService.getSingleMovie(id)
    dispatch({
      type: 'GET_GENRES',
      data: genres.data
    })
  }
}

export default genresReducer