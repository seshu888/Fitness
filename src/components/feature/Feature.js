import React from 'react';
import './feature.css';
const Feature = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img className='featuredImage'
					src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/ireland/dublin/destinations-dublin-banner-mobile-1024x553.jpg"
					alt="avatar"
				/>
				<div className='featuredTitles'>
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img className='featuredImage'
					src="https://www.travelandleisure.com/thmb/WkKTjtXvNDn9yZsQC6xcyM2kBKg=/1600x1200/smart/filters:no_upscale()/skyline-river-austin-texas-ATXTHINGS0122-4f095568988a408b8eadf93c530f1344.jpg"
					alt="avatar"
				/>
				<div className='featuredTitles'>
					<h1>Austin</h1>
					<h2>433 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img    className='featuredImage'
					src="https://www.narcity.com/media-library/america-s-best-small-city-is-reno-which-reigns-in-at-number-one-for-2020.jpg?id=25985867&width=1245&quality=85&coordinates=0%2C314%2C0%2C314&height=700"
					alt="avatar"
				/>
				<div className='featuredTitles'>
					<h1>Reno</h1>
					<h2>253 properties</h2>
				</div>
			</div>
		</div>
	);
};
export default Feature;
