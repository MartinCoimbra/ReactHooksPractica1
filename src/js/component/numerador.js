import React, { useState, Fragment } from "react";

//create your first component
const Contador = () => {
	/* Logica de JavaScript */
	const [numero, setNumero] = useState(0);
	const aumentar = () => {
		if (numero == 5) {
			setNumero(numero + 10);
		} else {
			setNumero(numero + 1);
		}
	};
	/* Antes del return va logica de JavaScript */
	return (
		<Fragment>
			<h3>Mi primer component {numero}</h3>
			<button onClick={aumentar}>Aumentar</button>
		</Fragment>
	);
};

export default Contador;
