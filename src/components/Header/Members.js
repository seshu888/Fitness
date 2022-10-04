import React, { useState } from 'react';
import './members.css';
const Members = () => {
	const [ adult, setAdult ] = useState(0);
	const [ children, setChildren ] = useState(0);
	const [ rooms, setRooms ] = useState(0);
	return (
		<div className="members">
			<div className="membersWrapper">
				<div>
					<p>
						adult :<button onClick={() => setAdult(adult - 1)}>-</button>
						 {adult} 
						<button onClick={() => setAdult(adult + 1)}>+</button>
					</p>
				</div>
				<div>
					<p>
						children :<button onClick={() => setChildren(children - 1)}>-</button>
						 {children} 
						<button onClick={() => setChildren(children + 1)}>+</button>
					</p>
				</div>
				<div>
					<p>
						rooms : <button>-</button>
						 {rooms} 
						<button onClick={() => setRooms(rooms + 1)}>+</button>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Members;
