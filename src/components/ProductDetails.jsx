import React, { useEffect, useState } from 'react'
import { BsStarFill } from "react-icons/bs";
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const {id}=useParams()
  const [products , setProducts]=useState([]);
  const fetchData= async ()=>{
    const response=await fetch("https://dummyjson.com/products");
    const data=await response.json()
    setProducts(data.products)
    
    
  }
    useEffect(()=>{
      fetchData();
    },[])
const myproduct= products.find((a)=>a.id==id)
if(!myproduct){
  return <div>data loading...</div>
}
  
  return (
    
    <div className="displaybig pt-5">
      <div className="pdetails mt-5 text-light col-sm-12 col-md-12 col-lg-8" >
      <h1 style={{fontSize:'50px'}} className='fs-sm-1'>{myproduct.title}</h1>

      <div className="pimg"><img src={myproduct.images[0]} style={{width:'100%',backgroundSize:'cover',height:'100%'}} /></div>  
      <div className='d-flex flex-row justify-content-between mb-5'>
        <h3>Price: ${myproduct.price} </h3>
        <h5>Rating: {myproduct.rating} <BsStarFill color="gold" /></h5>
      </div>
      <div>
        <h2>Product Description..</h2>
        <h6>{myproduct.description}</h6>
      </div>
      <div>
        <h3>Reviews :-</h3>
      {myproduct.reviews.map((a)=>(
        <div className="myreview">
          <div className='d-flex flex-row justify-content-between'>
            <h4>{a.reviewerName}</h4>
        <p>Rating: {a.rating} <BsStarFill color="gold"/></p>

          </div>
          <div>
            <p>Comment: {a.comment}</p>
            <p>Date: {a.date.slice(0,10)}</p>
            <p>Mail: {a.reviewerEmail}</p>
          </div>
        </div>
      ))}

      </div>


      </div>
      
    </div>
  )
}

export default ProductDetails
