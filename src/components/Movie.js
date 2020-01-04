import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { initializeSingleMovie } from '../reducers/singleMovieReducer'
import { getGenres } from '../reducers/genresReducer'
import { fetchActors } from '../reducers/actorsReducer'
import { fetchCrew } from '../reducers/crewReducer'
const Movie = (props) => {
	
	useEffect(() => {
    props.initializeSingleMovie(props.match.params.id)
  }, [props])
	
	useEffect(() => {
    props.getGenres(props.match.params.id)
  }, [props])
	
	useEffect(() => {
    props.fetchActors(props.match.params.id)
  }, [props])
	
	useEffect(() => {
    props.fetchCrew(props.match.params.id)
  }, [props])
	
	console.log(props.genres)
	console.log(props.actors)
	console.log(props.crew)
	
	return (
		<div>
			<h2>{props.singleMovie.title}</h2>
			<p>{props.singleMovie.overview}</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		singleMovie: state.singleMovie,
		genres: state.genres,
		actors: state.actors,
		crew: state.crew
	}
}

export default connect(
	mapStateToProps,
	{initializeSingleMovie, getGenres, fetchActors, fetchCrew}
)(Movie)