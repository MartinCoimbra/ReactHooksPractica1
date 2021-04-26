//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

import Contador from "./component/numerador.js";
/* Importamos modulos - "./ubicacion" */

function App() {
	return (
		<div>
			<h1>Hola Mundo Soy React</h1>
			<Contador />
		</div>
	);
}
/* Lo agregamos a el div del #app del documento */
ReactDOM.render(<App />, document.querySelector("#app"));
