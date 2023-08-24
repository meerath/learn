import React from 'react'
const PostDetails =()=>{
    return(
        <div className='panel panel-primary'>
            <div className='panel-heading'>
                Post Details
            </div>
            <div className='panel-body'>
               <h3>PostDetails page</h3>
               <p>
In PostDetails, the bind keyword is used to bind a method to the current component instance. This is necessary because by default, the this keyword inside a method refers to the object that created the method, not the component instance that is calling the method.</p>
            </div>
        </div>
    )
    
}
export default PostDetails