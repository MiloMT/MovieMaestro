import React from "react"
// Bootstrap Components
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Button from "react-bootstrap/Button"


const OtherMovies = ({ setMovieIndex, selectedMovies }) => {
    return (
        <>
            <Row>
                <CardGroup>
                    {selectedMovies.map((movie, index) => (
                        <Card 
                            key={index}
                            onClick={() => setMovieIndex(index)}
                            style={{ padding: 0 }}
                            as={Button}
                        >
                            <Card.Img
                                variant="top"
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            />
                            <Card.Body>{movie.title}</Card.Body>
                        </Card>
                    ))}
                </CardGroup>
            </Row>
        </>
    )
}


export default OtherMovies