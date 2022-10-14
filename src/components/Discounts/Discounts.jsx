import React from 'react'
import adidas from "../../assets/images/adidas.png"
const Discounts = () => {
  return (
    <div className='discounts'>
        <div className='logo'>Logo</div>
        <div className='user-details'>
            <div className='user-name'>Welcome <b>John</b></div>
            <div> My discounts</div>
        </div>
        <div className='all-discounts'>
            <div className='discount'>
                <div className='brand-logo'><img src={adidas}/></div>
                <div className='discount-details'>
                    <div className='offer-percent'>10% OFF</div>
                    <div className='brand-name'>adidas</div>
                    <div className='expires'>Expires in 15 days</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discounts