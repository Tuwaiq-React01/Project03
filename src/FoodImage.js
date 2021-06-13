import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function FoodImage() {
 
    const [image,setImage] = useState("/loading.gif");
    const [title,setTitle] = useState("Meal Title");
    const [desc,setDesc] = useState("Instructions");


    useEffect(()=>{
        if(image==="/loading.gif")
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            setImage(response.data.meals[0].strMealThumb);
            setTitle(response.data.meals[0].strMeal);
            setDesc(response.data.meals[0].strInstructions);
        });
    })

        return (
            <Col sm={6} md={4} lg={3} >
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
         )
}