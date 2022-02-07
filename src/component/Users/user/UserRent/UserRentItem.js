import React from 'react';
import { useSelector } from 'react-redux';
import ProfileHeader from '../profile/ProfileHeader';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";

const UserRentItem = () => {
  const rentItem = useSelector(state => state.rentItem)
  console.log(rentItem);
  
  return (
    <div className="main__box">
      <ProfileHeader />
      {
        rentItem.map(item => (
           <div className="host__item" key={item.id} >
             <img src={item.img.main} alt="img" />
             <FavoriteBorderOutlinedIcon className="host__item__heart fs-2" />

             <div className="host__item__info">
               <div className="host__item__infoTop">
                 <h3 className="fs-2 text-capitalize">{item.title}</h3>
                 <p>____</p>
                 <p className="fs-4">{item.desc}</p>
               </div>

               <div className="host__item__infoBottom">
                 <div className="host__item__stars">
                   <StarIcon className="host__item__star fs-2" />
                   <strong className="fs-4">{item.review}</strong>
                 </div>
                 <div className="host__items__price">
                   <h3>{item.price}/day</h3>
                 </div>
               </div>
             </div>
           </div>
        ))
      }
     
    </div>
  );
};

export default UserRentItem;
