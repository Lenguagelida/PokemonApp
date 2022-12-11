import React from "react";
import PokemonCard from "./PokemonCard";

const Cards = ({ info }) => {
	return(
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            {
                info.map( poke=>(
                    <PokemonCard url={poke.url}/>
                ))
            }
        </div>
)};

export default Cards;
