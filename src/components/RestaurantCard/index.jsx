import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'
import Skeleton from '../Skeleton'

import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles'

const RestaurantCard = ({restaurant, onClick}) =>{
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rate} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.fromatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto 
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl(): restaurante} 
        onLoad ={()=> setImageLoaded(true)}
        alt="foto restaurante" 
      />
      {!imageLoaded && <Skeleton width='100px' height='100px' />}
    </Restaurant>
  )
}

export default RestaurantCard