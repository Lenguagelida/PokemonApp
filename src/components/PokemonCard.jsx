import React from "react";
import UseFetch from "./Datos/UseFetch";

const PokemonCard = ({ url }) => {
	const pokeInfo = UseFetch(url);
	const { loading, data } = pokeInfo;

	return (
		<>
			{loading ? (
				<div className="text-center">
					<div className="spinner-grow" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="col" key={data.name}>
					<div className="card h-100">
						<div className="card-header text-center">
							{data.types.map(t=>(
								<span className="text-uppercase mx-1" style={{fontSize:16}}>{t.type.name}</span>
							))}
						</div>
						<div className="card-body d-flex flex-column">
							<img
								className="mx-auto"
								src={
									data.sprites.other.home.front_default
								}
								style={{ maxWidth: 100, maxHeight: 100 }}
								alt={data.name}
							/>
							<h5 className="card-title text-capitalize mx-auto">
								{data.name}
							</h5>
							<p className="card-text mx-auto">N.°: {data.id}</p>
							<button className="btn btn-outline-info mt-auto">
								Details
							</button>
						</div>
						<div className="card-footer"> Footer </div>
					</div>
				</div>
			)}
		</>
	);
};

export default PokemonCard;
