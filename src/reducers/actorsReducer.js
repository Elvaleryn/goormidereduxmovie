import actorsService from '../services/actors'

const actorsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_ACTORS':
      return action.data.cast
	default: return state
	}
}

export const fetchActors = (id) => {
  return async dispatch => {
    const actors = await actorsService.getActors(id)
    dispatch({
      type: 'GET_ACTORS',
      data: actors.data
    })
  }
}


export default actorsReducer