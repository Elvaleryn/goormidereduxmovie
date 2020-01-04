import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movieReducer from './reducers/movieReducer'
import popularReducer from './reducers/popularReducer'
import filterReducer from './reducers/filterReducer'
import singleMovieReducer from './reducers/singleMovieReducer'
import genresReducer from './reducers/genresReducer'
import actorsReducer from './reducers/actorsReducer'
import crewReducer from './reducers/crewReducer'

const reducer = combineReducers({
	movies: movieReducer,
	popular: popularReducer,
	filter: filterReducer,
	singleMovie: singleMovieReducer,
	genres: genresReducer,
	actors: actorsReducer,
	crew: crewReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store