import React from 'react';

import { render } from '@testing-library/react';
import './Carousel.css'

function Carousel({list}){


    

    
    let count = 0;
    const listitem = list.map((e)=>{
        
        if(e.show.name == "Dark"){
        
        return(
            <div className="carousel-item active" key={e.show.id}>
                <img src={e.show.image.original} className="d-block w-50 mx-auto" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                        <h3>{e.show.name}</h3>
                </div>
            </div>
        )
        }
        else{
            return(
                <div className="carousel-item" key={e.show.id}>
                    <img src={e.show.image.original} className="d-block w-50 mx-auto" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>{e.show.name}</h3>
                    </div>
                </div>
            )
        }

    })


  return (
            <div className="back">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                {listitem}
                {/* <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
            </div> */}
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
            </div>
            </div>
            </div>
        )
    
}

export default Carousel
