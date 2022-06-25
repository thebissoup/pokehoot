import React from "react";
import { ResourceCard } from "./ResourceCard";
import { Stack, Placeholder, Loader } from "rsuite";

export default function PokemonResources({resources}){

    let resourceList = resources.map((obj) => <ResourceCard data={obj}/>)
    console.log(resources[0])
    if(resources.length == 0){
        return(
           <Stack className={"dim-spaced"} wrap spacing={15}>
            <Loader center size={"lg"} content="Loading" />
           </Stack>
        )
    }

    return(
    <Stack className={"dim-spaced"} wrap spacing={15}>
        {resourceList}
    </Stack>
    )
}