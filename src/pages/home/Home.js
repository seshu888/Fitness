import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header' 
import Feature from '../../components/feature/Feature'
import PropertyList from '../../components/property/PropertyList'
import FeatureProperty from '../../components/featureProperty/FeatureProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Home=()=>{
    return(
        <div>   
            <Navbar/>
            <Header/>
            <div className='homeContainer'>
                <Feature/>
                <h1 className='homeTitle'>Browse property by Type</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Properteis Guests Love</h1>
                <FeatureProperty/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Home