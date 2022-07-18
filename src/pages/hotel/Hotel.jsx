import React, {useState} from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {

  const [slide, setSlider] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415417.jpg?k=fa813221a1d5c7ed304a483e0ed2bdb40251bd6273220f0e6c94dd38c6df6735&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415610.jpg?k=ed7aeea0a34d47616ba424a7ed1e6ffa49aacb78a9988cea2d30df8d8778f7ed&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415584.jpg?k=85e942844a2dd7169edd53e282a6e929b111e59adf9a183266fb56417e723739&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415420.jpg?k=482f2a2ffd463841275a883faf74231e31f10f4c7758c2e68c0da0524800fba9&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415409.jpg?k=4b6c627f68a9b183139ce6fbbdf38df2faa53eece8d4f38190391ac188a7632b&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415453.jpg?k=0cbc49c0dc8f900f957322cff560e48a0b193e4c3204934f5ca9f16e60dfdb75&o=&hp=1",
    },
  ];



const handleOpen = (i) =>{
  setSlider(i);
  setOpen(true);

}

const handleMove =(direction)=>{
let newSlideNumber;

if(direction === "l"){
  newSlideNumber = slide === 0 ? 5 : slide-1
}
else{
  newSlideNumber = slide === 5 ? 0: slide+1
}
setSlider(newSlideNumber)
}



  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">

        { open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)} />  
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
        <div className="sliderWrapper">
          <img src={photos[slide].src} alt="" className="sliderImg" /></div>  
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")} />  
          
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $120 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the Rose Palace Hotel</h1>
              <p className="hotelDesc">
                Located in Lahore, 22.5 km from Wagah Border, Rose Palace Hotel,
                Gulberg provides accommodations with a restaurant, free private
                parking, a fitness center and a shared lounge. With free WiFi,
                this 3-star hotel has a garden and barbecue facilities. The
                property has a 24-hour front desk, room service and currency
                exchange for guests. At the hotel, all rooms include a balcony.
                Complete with a private bathroom equipped with a shower and
                slippers, guest rooms at Rose Palace Hotel, Gulberg have a
                flat-screen TV and air conditioning, and selected rooms contain
                a seating area. At the accommodation each room includes bed
                linen and towels. Continental and buffet breakfast options are
                available daily at Rose Palace Hotel, Gulberg. The hotel has a
                playground. Popular points of interest near Rose Palace Hotel,
                Gulberg include Pace Shopping Mall, Fortress Square and Lahore
                Gymkhana. The nearest airport is Allama Iqbal International
                Airport, 5 km from the accommodation. Families in particular
                like the location – they rated it 8.4 for a stay with kids.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>Top Location: Highly rated by recent guests (9.8)</span>
              <h2> <b>Rs 10,000</b> (9 nights) </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
