import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { faBed, faCar, faTaxi, faPlane, faMagnet, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
const Header = ({type}) => {
	const navigate=useNavigate()
	const [ date, setDate ] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	const[destination,setDestination]=useState("")
	const handleChange =(e)=> {
		setDestination(e.target.value)
	}
    const[openDate,setOpenDate]=useState(false)
    const[openOptions,setOpenOptions]=useState(false)
	const [options,setOptions]=useState({
		adults:0,
		children:1,
		rooms:0
	})
	const handleSearch=()=>{
		navigate('/hotels',{state:{destination,options,date}})
	}
	const handleOption=(name,operation)=>{
	
		setOptions({...options,[name]:operation === "i" ? options[name]+1 : options[name] - 1})
	}
	return (
		<div className="header">
			<div className={type === "list" ? "headerContainer listMode":"headerContainer"}>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faMagnet} />
						<span>Attractions</span>
					</div>
				</div>
				{ type !== "list"  && <div><h1 className="headerHeading">A lifetime of Discountes? It's Genius</h1>
				<p className="headerDesc">
					Get a reward for your travels-unlock instant savings of 10% or more with a Abhi Booking account
				</p>
				<button className="regButton">Sign In/Register</button>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faBed} className="searchIcon" />
						<input placeholder="search Destination" type="text" className="headerSearchInput" name="destination" onChange={handleChange}/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faCalendarDays} 
                        className="searchIcon" 
                        onClick={()=>setOpenDate(!openDate)}
                        />
                        <span >{`${format(date[0].startDate,"MM/dd/yyy" )} to ${format(date[0].endDate,"MM/dd/yyy" )}`}</span>
						{openDate && <DateRange
							editableDateInputs={true}
							onChange={(item) => setDate([ item.selection ])}
							moveRangeOnFirstSelection={false}
							ranges={date}
                            className="date"
						/>}
					</div>
					<div className="headerSearchItem" >
						<FontAwesomeIcon icon={faPerson} className="searchIcon" onClick={()=>setOpenOptions(!openOptions)} />
						<span onClick={()=>setOpenOptions(!openOptions)}>{`adult : ${options.adult} - children : ${options.children} - rooms : ${options.rooms}`}</span>
						{openOptions && <div className='options'>
							<div className='optionItem'>
								<span className='optionText'>Adult</span>
								<div className='optionCounter'>
									<button disabled={options.adults <= 1} className='optionCounterButton' onClick={()=>handleOption("adults","d")}>-</button>
									<span className='optionCounterNumber'>{options.adults}</span>
									<button className='optionCounterButton' onClick={()=>handleOption("adults","i")}>+</button>
								</div>
							</div>
							<div className='optionItem'>
								<span className='optionText'>Children</span>
								<div className='optionCounter'>
									<button disabled={options.children <= 0} className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
									<span className='optionCounterNumber'>{options.children}</span>
									<button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
								</div>
							</div>
							<div className='optionItem'>
								<span className='optionText'>Rooms</span>
								<div className='optionCounter'>
									<button disabled={options.rooms <= 1} className='optionCounterButton' onClick={()=>handleOption("rooms","d")}>-</button>
									<span className='optionCounterNumber'>{options.rooms}</span>
									<button className='optionCounterButton' onClick={()=>handleOption("rooms","i")}>+</button>
								</div>	
							</div>
						</div>}
					</div>
					<button className="searchButton" onClick={handleSearch}>search</button>
				</div></div>}
			</div>
		</div>
	);
};
export default Header;
