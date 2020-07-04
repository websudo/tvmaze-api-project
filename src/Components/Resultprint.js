import React from 'react'

import './Resultprint.css'

export default function Resultprint({query}) {

    

    const listitem = query.item.map((e)=>{

        if(e.show.image != null){
            return(
                <div className="displaytrend" key={e.show.id}>
                <img src={e.show.image.medium}></img>
                </div>
            )
        }
      })

    return (
        
        <div className="result">
            {listitem}
        </div>
    )
}
