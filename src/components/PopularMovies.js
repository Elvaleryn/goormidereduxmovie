import React from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'
import { useEffect } from 'react'
import { Card, Button, Row, Col, CardDeck, Container, CardGroup } from 'react-bootstrap'
import Filter from '../components/Filter'
import { initializePopular } from '../reducers/popularReducer'

const PopularMovies = (props) => {

	const popular = props.popular
		const fetchPopular = props.initializePopular
	useEffect(() => { fetchPopular() }, [fetchPopular]) 
	const imgURL = 'https://image.tmdb.org/t/p/w185';

	const show = popular.map(movie =>
		<Col xs={12} md={3}>
			<CardGroup style={{ marginBottom: '3rem' }}>
				<Card border="dark" style={{ width: '18rem' }, { height: '32rem' }}>
					<Link to={`/${movie.id}`}>
						<Card.Img variant="top" src={imgURL + movie.poster_path} alt='movie poster' style={{ height: '24rem' }} />
					</Link>
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<Card.Text>
							IMDB:  {movie.vote_average}
						</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</Col>
	)
	return (
		<div>
			<h3>Popular</h3>
			<Row>
				{show}
			</Row>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		popular: state.popular
	}
}

export default connect(
	mapStateToProps,
	{initializePopular}
)(PopularMovies)