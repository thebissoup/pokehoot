import React from "react";
import PokemonResources from "./PokemonResources";
import ItemResources from "./ItemResources";

export default function ResourceViewer({view, resources}){
    if(view === "pokemon") return <PokemonResources resources={resources}/>
    if(view === "item") return <ItemResources/>
}