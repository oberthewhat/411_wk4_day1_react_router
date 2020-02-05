import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    const id = props.match.params.id
    const car = cars.find(c => c.id == id)

    return (
        <Container className="car-container">
            <Paper maxWidth='sm' className="car-paper">
                <h2>{car.Name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`} className="car-chip"></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car