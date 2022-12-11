import { useState } from "react";
import UseFetch from "./Datos/UseFetch";
import Cards from "./Cards";

const PokemonContainer = () => {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
	const pokemonList = UseFetch(url);
	const { loading, data } = pokemonList;
	loading ? console.log("Loading..") : console.log(data);

	return (
		<>
			<section className="container mt-3">
				{loading ? (
					<div className="text-center">
						<div className="spinner-grow" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					<Cards info={data.results} />
				)}
			</section>
			<nav className="d-flex justify-content-center p-3">
                {/* {
                    data.previous != null ?
                    <button className="btn btn-outline-dark mx-1" onClick={()=>setUrl(data.previous)}>Prev.</button>
                    :
                    <button className="btn btn-outline-dark mx-1" disabled >Prev.</button>
                } */}
                <button className="btn btn-outline-dark mx-1" onClick={()=>setUrl(data.previous)}>Prev.</button>
                <button className="btn btn-outline-dark mx-1" onClick={()=>setUrl(data.next)}>Next</button>
            </nav>
		</>
	);
};

export default PokemonContainer;
