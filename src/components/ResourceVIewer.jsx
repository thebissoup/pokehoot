import React from "react";
import PokemonResources from "./PokemonResources";
import ItemResources from "./ItemResources";

export default function ResourceViewer({view}){
    if(view === "pokemon") return <PokemonResources/>
    if(view === "item") return <ItemResources/>
}