import movieService from '../services/movies'

const popularReducer = (state = [], action) => {
	switch(action.type) {
		case 'INIT_POPULAR':
      return action.data
				.sort((a, b) => (a.votes > b.votes) ? -1 : 1)
	default: return state
	}
}

export const initializePopular = () => {
  return async dispatch => {
    const popular = await movieService.getPopular()
    dispatch({
      type: 'INIT_POPULAR',
      data: popular.data.results
    })
  }
}

export default popularReducer