import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/323415402.webp?k=c5f4f0f495e7ef5cc632894dc444d196d110f8c9f35004d9861843e2ca3e654f&o=&s=1" alt="" className="siImage" />
        <div className="siDesc">
            <h1 className="siTitle">Rose Palace Hotel</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Hotel having luxury rooms
            </span>
            <span className="siFeatures"> 
            Entire studio 1 bathroom 21m² 1 full bed 
            </span> 
            <span className="siCancel0p">Free cancellation </span> 
            <span className="siCancel0pSubtitle"> You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRatings">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsText">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Including taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
                
            </div>
        </div>
    </div>
  )
}

export default SearchItem