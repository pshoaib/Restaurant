import React from 'react'

export const Button = ({handlePage,handlePage2 ,page }) => {
  return (
    <div>
         <button disabled={page ===1 } onClick={handlePage} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem", fontSize:"22px",borderRadius:"12px"}}>Prev</button>
         
         <button onClick={handlePage2} style={{width:"100px", height:"35px",backgroundColor:"white",margin:"1rem",fontSize:"22px",borderRadius:"12px"}}>Next</button>
   
    </div>
  )
}
