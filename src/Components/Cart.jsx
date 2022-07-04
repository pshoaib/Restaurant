import React from 'react'

export const Cart = ({data, page}) => {
  
  //  console.log(props.data)
  
    return (
    <div style={{border:'1px solid black', display:'grid', gridTemplateColumns:'repeat(3,1fr)', width:'80%', margin:'auto', gap:'20px'}}> 
          
        
        {
          data.map((elem)=>
            (
              <div key={elem.id}  style={{border:'1px solid black', display:'grid' , gridTemplateColumns:'repeat(3,2fr)', height:'250px'}}>

              <div  style={{border:'1px solid red' ,width:"170px"}}>
                   <img style={{width:"100%", height:"100%"}} src={elem.strMealThumb}/>
              </div>

              <div  style={{border:"1px solid blue", width:"210px"}}>
                          <h3>Name :{elem.strMeal}   </h3>
                          <h3>Price ₹ {elem.price}   </h3>
                          <h3>Rating : {elem.rating} </h3>
                   </div>
              </div>
            ))
        }


    </div>
  )
}
