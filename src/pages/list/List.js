import React, { useState } from 'react'
import './list.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
const List=()=>{
    const location=useLocation()
    const [openDate,setOpenDate]=useState(false)
    const[destination,setDestination]=useState(location.state.destination)
    const[date,setDate]=useState(location.state.date)
    const[options,setOptions]=useState(location.state.options)
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='searchTitle'>Search </h1>
                        <div className='lsItem'>
                            <span>Destination</span>
                            <input placeholder={destination} />
                        </div>
                        <div className='lsItem'>
                            <span>Check In</span>
                            <h3 onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyy" )} to ${format(date[0].endDate,"MM/dd/yyy" )}`}</h3>
                           { openDate && <DateRange
							editableDateInputs={true}
							onChange={(item) => setDate([ item.selection ])}
							moveRangeOnFirstSelection={false}
							ranges={date}
                            className="date"
						/>}
                        </div>
                        <h3 className='lsOptionsHeading'>Options</h3>
                        <div className='lsfileds'>
                            <span>Min price</span>
                            <input type="number"/>
                        </div>
                        <div className='lsfileds'>
                            <span>Max price</span>
                            <input type="number"/>
                        </div>
                        <div className='lsfileds'>
                            <span>Adults</span>
                            <input type="number" placeholder={options.adults}/>
                        </div>
                        <div className='lsfileds'>
                            <span>Children</span>
                            <input type="number"placeholder={options.children}/>
                        </div>
                        <div className='lsfileds'>
                            <span>Rooms</span>
                            <input type="number" placeholder={options.rooms}/>
                        </div>
                        <button className='lsSearchBtn'>Search</button>
                    </div>
                    <div className='listResult'>
                            <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List