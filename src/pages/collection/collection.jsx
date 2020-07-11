import React from 'react'

import './collection.scss';

import photo1 from '../../images/user-1.jpg';
import photo2 from '../../images/user-2.jpg';
import photo3 from '../../images/user-3.jpg';
import photo4 from '../../images/user-4.jpg';
import photo5 from '../../images/user-5.jpg';
import photo6 from '../../images/user-6.jpg';


const Collection = () => {
  return (
    <div className='details'>
      <div className="description">
        <p className="paragraph">
            The staff were very approachable and helpful. The breakfast was good. They arranged for a taxi to pick us up from the airport and then back again at the end of our stay. The suite was very good with comfortable furniture and the bed was comfortable too. We would definitely stay here again.
        </p>
        <p className="paragraph">
            I enjoyed my stay at your hotel. The breakfast was excellent. I must comment on your director of rooms -Romana. I had a small problem and she handled it with grace, charm and professionalism.. She is a credit to your organization.
        </p>
        <ul className="list">
          <li className="list__item">Close to the beach</li>
          <li className="list__item">Breakfast included</li>
          <li className="list__item">Free airport shuttle</li>
          <li className="list__item">Free wifi in all rooms</li>
          <li className="list__item">Air conditioning and heating</li>
          <li className="list__item">Pets allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for families</li>
        </ul>
        <div className="recommend">
          <div className="recommend__count">
            Lucy and 3 others friends recommended this hotel.
          </div>
          <div className="recommend__friends">
            <img src={photo3} alt="user3" className="recommend__photo"/>
            <img src={photo4} alt="user4" className="recommend__photo"/>
            <img src={photo5} alt="user5" className="recommend__photo"/>
            <img src={photo6} alt="user6" className="recommend__photo"/>
          </div>
        </div>
      </div>
      <div className="user-reviews">
         <figure className="review">
           <blockquote className='review__text'>
             The front desk staff all were professional and pleasant. Dining room for breakfast were nice and pleasant. The piano was nice but too loud. We do not know when will be our next visit to Prague but sure we shall return to this lovely place. Already recommended your hotel to a few of our friends.
           </blockquote>
           <figcaption className="review__user">
              <img src={photo1} alt="user1" className="review__photo"/>
              <div className="review__user-box">
                <p className="review__user-name">Arnold Amani</p>
                <p className="review__user-date">April 4th, 2020</p>
              </div>
              <div className="review__rating">8.3</div>
           </figcaption>
         </figure>

         <figure className="review">
           <blockquote className='review__text'>
             Lovely hotel. Very comfortable. 10 minute walk to the old town. Breakfast was really good. Would definitely stay again
           </blockquote>
           <figcaption className="review__user">
              <img src={photo2} alt="user2" className="review__photo"/>
              <div className="review__user-box">
                <p className="review__user-name">Tessy Wanjiku</p>
                <p className="review__user-date">June 23rd, 2020</p>
              </div>
              <div className="review__rating">9.1</div>
           </figcaption>
         </figure>
         <button className="btn-inline">
           Show all
           <span>&rarr;</span>
         </button>
      </div>
    </div>
  )
}
 export default Collection;
