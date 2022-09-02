import React, { useState } from "react"
import "./App.css"

import Header from "./Components/Header"
import Counter from "./Components/Counter"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
	faCalculator,
	faPlus,
	faMinus,
} from "@fortawesome/free-solid-svg-icons"
library.add(faCalculator, faPlus, faMinus)

function App() {
	const [count, setCount] = useState(0)
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Counter count={count} setCount={setCount} />
			</div>
		</div>
	)
}

export default App
