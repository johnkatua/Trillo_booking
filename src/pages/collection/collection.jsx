import React from 'react'

import './collection.scss';

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
         user reviews
      </div>
    </div>
  )
}
 export default Collection;
