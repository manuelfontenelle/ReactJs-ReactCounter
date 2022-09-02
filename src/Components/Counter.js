import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Counter = ({ count, setCount }) => {
	return (
		<>
			<div className="counter">
				<FontAwesomeIcon
					onClick={() => setCount(count - 1)}
					className="minus"
					icon="minus"
					size="3x"
				/>
				<div className="result">{count}</div>
				<FontAwesomeIcon
					onClick={() => setCount(count + 1)}
					className="plus"
					icon="plus"
					size="3x"
				/>
			</div>
			<div onClick={() => setCount(0)} className="reset">
				Reset
			</div>
		</>
	)
}

export default Counter
