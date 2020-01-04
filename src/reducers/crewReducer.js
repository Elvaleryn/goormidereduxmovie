import actorsService from '../services/actors'

const crewReducer = (state = [], action) => {
	console.log(action)
	switch(action.type) {
		case 'GET_CREW':
      return action.data.crew
	default: return state
	}
}

export const fetchCrew = (id) => {
  return async dispatch => {
    const crew = await actorsService.getActors(id)
    dispatch({
      type: 'GET_CREW',
      data: crew.data
    })
  }
}


export default crewReducer