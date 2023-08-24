import React from 'react'
const Post =()=>{
    return(
        <div className='panel panel-primary'>
            <div className='panel-heading'>
                Post
            </div>
            <div className='panel-body'>
               <h3>Post page</h3>
               <p>
In Post, the bind keyword is used to bind a method to the current component instance. This is necessary because by default, the this keyword inside a method refers to the object that created the method, not the component instance that is calling the method.</p>
            </div>
        </div>
    )
    
}
export default Post