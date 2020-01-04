import React from 'react'
import { connect } from 'react-redux'
import Movies from './components/Movies'
import Movie from './components/Movie'
import PopularMovies from './components/PopularMovies'
import Filter from './components/Filter'
import {
	BrowserRouter as Router,
	Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { Container } from 'react-bootstrap'

const App = (props) => {
	
if(props.filter.length === 0) {
	return (
		<Container>
			<h2>Movieapp</h2>
			<Router>
				<Route exact path="/" render={() => <Filter />} />
				<Route exact path="/" render={() =>
					<PopularMovies />
				} />
				<Route exact path="/:id" render={(props) => <Movie {...props} key={props.match.params.id} />} />
			</Router>
		</Container>
	)
}
	return(
<Container>
			<h2>Movieapp</h2>
			<Router>
				<Route exact path="/" render={() => <Filter />} />
				<Route exact path="/" render={() =>
					<Movies />
				} />
				<Route exact path="/:id" render={(props) => <Movie {...props} key={props.match.params.id} />} />
			</Router>
		</Container>
	)
}
	
const mapStateToProps = (state) => {
	return {
		filter: state.filter
	}
}

export default connect(mapStateToProps, null)(App)
