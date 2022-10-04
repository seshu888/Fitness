import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './hotel.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
const Hotel=()=>{
    const Images=[
        "https://media-cdn.tripadvisor.com/media/photo-s/01/1e/df/89/mumbai-bombay.jpg",
        "https://video-images.vice.com/_uncategorized/1539696294069-Taj-Mumbai-If-These-Walls-Could-Talk-6-of-12.jpeg",
        "https://i.pinimg.com/736x/1f/9b/bd/1f9bbdd41f73812f5fd4e6763631f3d3--luxury-hotels-hotels-in.jpg",
        "https://www.cardexpert.in/wp-content/uploads/2020/01/taj-towers-check-in-counters-1024x683.jpg",
        "https://www.cntravellerme.com/2021/05/vurlMxSB-taj%20mahal%20palace%20hotel%20mumbai%20india%20(5)%20-%20lead.jpg",
        "http://2.bp.blogspot.com/-sBM0NVJ1zuA/Tpl9y4wDxFI/AAAAAAAAAa8/MUm5lp1Ap7M/s1600/1.jpg"
    ]
    return(
        <div className='hotel'>
        <Navbar/>
        <Header type="list"/>
        <div className='hotelContainer'>
            <div className='hotelWrapper'>
                <h1 className='hotelTitle'>Hotel Taj</h1>
                <div className='hotelAdress'>
                    <FontAwesomeIcon icon={faLocation}/>
                    <span className='hotelLocation'>Address: GJC8+MPV, Vinchipeta, Vijayawada, Andhra Pradesh 520001</span>
                    <button className='bookBtn'>Reserve or Book Now!</button>
                </div>
                <div className='hotelDIstance'>
                <span className='hotelDist'>Hotel is 500mts from the station</span>
                <span className='hotelOffer'>Book a room more than rRs.5000 and get a Airpot taxi</span>
                </div>
            
                <div className='hotelImages'>
                    {Images.map((elem)=>{
                        return  <img src={elem} key={elem} alt="avatar" className='img'/>
                    })}
                </div>
                <div  className='hotelDetails'>
                    <div className='hotelDesc'>
                        <h2>Just stay in the Taj</h2>
                        <p>In 1980, the Taj Group opened its first hotel outside India, the Taj Sheba
                         Hotel in Sana'a, in Yemen and in the late 1980s, acquired interests in the 
                         St. James' Court Hotel (now comprising Taj 51 Buckingham Gate Suites and Residences 
                        and St. James' Court, A Taj Hotel) in London. In 1984, the Taj Group acquired,
                        under a license agreement, each of the Taj West End in Bangalore, Taj Connemara,
                         in Chennai and Savoy Hotel in Ooty. The five-star deluxe hotel, Taj Bengal in Kolkata, 
                         was opened in the year 1989, and with this, the Taj Group became the only hotel chain in India
                          with a presence in the six major metropolitan cities of India, namely Mumbai, Delhi, Kolkata, Bangalore, Hyderabad, and Chennai.</p>
                    </div>
                    <div className='hotelRoomRate'>
                            <h3>Perfect for 9 night-stay</h3>
                            <p>Located in the real heart of vijayawada,
                            this property  has an excellent location score 9.8</p>
                            <span><b>Rs.9999</b> (for 9 nights)</span>
                            <button>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
        </div>
        <MailList/>
        <Footer/>
        </div>
    )
}
export default Hotel