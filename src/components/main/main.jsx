import React from 'react';

import './main.scss';
import hotel1 from '../../images/hotel-1.jpg';
import hotel2 from '../../images/hotel-2.jpg';
import hotel3 from '../../images/hotel-3.jpg';

import Collection from '../../pages/collection/collection';

import { ReactComponent as Star} from '../../images/SVG/star.svg';
import { ReactComponent as Location} from '../../images/SVG/location-pin.svg';

const Main = () =>{
  return (
    <main className='hotel-view'>
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotel1} alt="hotel1" className="gallery__photo"/>
        </figure>
        <figure className="gallery__item">
          <img src={hotel2} alt="hotel2" className="gallery__photo"/>
        </figure>
        <figure className="gallery__item">
          <img src={hotel3} alt="hotel3" className="gallery__photo"/>
        </figure>
      </div>
      <div className="overview">
        <h1 className="overview__heading">
          Sarova Panafric
        </h1>
        <div className="overview__stars">
          <svg className="overview__icon-star">
             <Star />
          </svg>
          <svg className="overview__icon-star">
             <Star />
          </svg>
          <svg className="overview__icon-star">
             <Star />
          </svg>
          <svg className="overview__icon-star">
             <Star />
          </svg>
          <svg className="overview__icon-star">
             <Star />
          </svg>
        </div>
        <div className="overview__location">
           <svg className="overview__icon-location">
             <Location />
           </svg>
           <button className="btn-inline">
              Nairobi, Kenya
           </button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">8.8</div>
          <div className="overview__rating-count">521 votes</div>
        </div>
      </div>
      <Collection />
    </main >
  )
};

export default Main;
