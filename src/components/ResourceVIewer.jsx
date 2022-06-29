import React from "react";
import PokemonResources from "./PokemonResources";
import ItemResources from "./ItemResources";

export default function ResourceViewer({view, pokemon, item}){
    if(view === "pokemon") return <PokemonResources resources={pokemon}/>
    if(view === "item") return <ItemResources resources={item} />
}