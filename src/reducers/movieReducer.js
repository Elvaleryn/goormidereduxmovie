import movieService from '../services/movies'

const movieReducer = (state = [], action) => {
	switch(action.type) {
		case 'INIT_MOVIES':
      return action.data
	default: return state
	}
}

export const initializeFiltered = (filter) => {
  return async dispatch => {
    const filtered = await movieService.getFiltered(filter)
    dispatch({
      type: 'INIT_MOVIES',
      data: filtered.data.results
    })
  }
}

export default movieReducer