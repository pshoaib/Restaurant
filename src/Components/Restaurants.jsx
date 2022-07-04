import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from './Button'
import { Cart } from './Cart'

export const Restaurants = () => {
  const [ loading , setLoading] = useState(false);
  const [ error , setError] = useState(false);
  const [ data , setData] = useState([]);
  const [page , setPage]= useState(1);
  const [filterRating , setRating] = useState(0)
  
  const getDetails =({ filterRating,page})=>
    {
        setLoading(true)
        setError(false)
       return  fetch(`http://localhost:8080/restDetail?rating=${filterRating}&_page=${page}&_limit=30`)
        .then((res)=> res.json())
        .then((Comingdata)=>(
            console.log(Comingdata),
            setData(Comingdata),
            setLoading(false)
        ))
        .catch((err)=>
        (
            setLoading(false),
            setError(true)
        ))
    }
  
   
    console.log(page)
  //  getDetails()
  useEffect(()=>
  {
    getDetails({ filterRating,page })
  },[ filterRating ,page])
    return (
    <div><h1>Restaurants Details</h1>
    <button onClick={()=> setRating(5)} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Rating 5</button>
    <button onClick={()=> setRating(4.2)} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Rating 4</button>
    <button onClick={()=> setRating(3)} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Rating 3</button>
    <button onClick={()=> setRating(2)} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Rating 2</button>
    <button onClick={()=> setRating(1)} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Rating 1</button>
      
      
{/*       
       <Button handlePage={handlePageInc} handlePage2={handlePageDec} />
      */}
      <button disabled={page ===1 }
              onClick={()=> setPage(page-1)}
             style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem", fontSize:"22px",borderRadius:"12px"}}>Prev</button>
         
         <button onClick={()=> setPage(page+1)} 
                 style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Next</button>
   
      {/* {
        data?.map((elem)=>
         {})
      } */}
      <Cart data={data}  />
    
    </div>
  )
}
