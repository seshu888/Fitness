import React from "react";
import './property.css'
const PropertyList=()=>{
    return(
        <div className="pList">
            <div className="pListItem">
                <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201506151420554162-ed9e67f468c311e9815b0242ac110002.jpg?&output-quality=75&downsize=583:388&output-format=jpg"
                className="pListImage"
                alt="avatar"/>
                <div className="propertyTitles">
                    <h1>Hotels</h1>
                    <h2>423 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/9b/44/ca/nirali-resorts.jpg" 
                className="pListImage"
                alt="avatar"/>
                <div className="propertyTitles">
                    <h1>Resorts</h1>
                    <h2>1023 resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.3dpower.in/images/2021/bungalow/tiruchirappalli/Tiruchirappalli-modern-bungalow-design-day-view-3d-modeling-and-rendering-services.jpg" 
                className="pListImage"
                alt="avatar"/>
                <div className="propertyTitles">
                    <h1>Bunglaws</h1>
                    <h2>673 bunglaws</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://premiermaldives.com/wp-content/uploads/2019/07/Villa-41-5.jpg" 
                className="pListImage"
                alt="avatar"/>
                <div className="propertyTitles">
                    <h1>Villas</h1>
                    <h2>353 villas</h2>
                </div>
            </div>
            
        </div>
    )
}
export default PropertyList