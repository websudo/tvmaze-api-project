import React from 'react';
import './Trending.css';

function Trending({props}){
    

    let count = 0 ;
    const listitem = props.map((e)=>{
        count = count + 1; 
        if(e.show.image != null && count <=9){
        return(

            
            <div className="displaytrend" key={e.show.id}>
                <img src={e.show.image.medium}></img>
            </div>
            
        )
        
        }
    })


    return (
        <div >
            {listitem}  
        </div>
    )
    
}

export default Trending
