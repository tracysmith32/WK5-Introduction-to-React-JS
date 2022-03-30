import React, { useState } from 'react';

const Hook = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="count-container">
			<div className="dislike" onClick={() => setCount(count - 1)}>
				Dislike
			</div>
			<h1 className="count-h1">Number of likes :{count}</h1>
			<div className="like" onClick={() => setCount(count + 1)}>
				like
			</div>
		</div>
	);
};

export default Hook;
