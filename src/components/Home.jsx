import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import ProductDisplay from './ProductDisplay';

function Home() {
    const [products, setProducts] =useState([]);
    const fetchData= async ()=>{
      const response=await fetch("https://dummyjson.com/products");
      const data=await response.json();
      setProducts(data.products);
      console.log(products);     
    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div style={{backgroundColor:'rgb(45, 40, 40)',padding:'20px'}}>
      <Container>
        <Row>
          { products.map((res)=>(
            <Col key={res.id} sm={12} md={6} lg={4} >
              <ProductDisplay res={res}/>
            
            </Col>
          )) }
        </Row>
      </Container>
      
    </div>
  )
}

export default Home
