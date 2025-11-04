import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



function ProductDisplay({res}) {
  
  return (
    <div >
<Link style={{textDecoration:'none'}} to={`/view/${res.id}`} >
        <Card className='mycard'>
            
            <Card.Img     src={res.images[0]}/>
            <div className='d-flex flex-row justify-content-between' style={{padding:'12px'}}>
                <p>{res.price} $</p>
                <p>{res.rating} <BsStarFill color="gold" /></p>
            </div>
            <Card.Title><h4 className='ps-4'>{res.title}</h4></Card.Title>

            
            <Card.Body>
             <Card.Text>{res.description.slice(0,50)}</Card.Text>   
             <Card.Text style={{color:'blue'}}>Read More ...</Card.Text>
            </Card.Body>
        </Card>
</Link>
      
    </div>
  )
}

export default ProductDisplay
