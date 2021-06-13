import React from 'react'
import Row from 'react-bootstrap/Row';
import FoodImage from './FoodImage'

export default function FoodImages() {
    
        let images = []
        for (let i = 0; i < 30; i++) images.push(i)
        images = images.map(i => <FoodImage key={i} />)
        return (
            <Row>
                {images}
            </Row>
        )
    }

