import React from "react";
import { useState } from "react";
import { ResourceCard } from "./ResourceCard";
import { Stack, Input, InputGroup, Loader } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';

export default function PokemonResources({resources}){

    const [filter, setFilter] = useState("");
    const re = new RegExp(filter,"i");

    let filtered = resources.filter((obj) => re.test(obj.name) ? obj : null)
    let resourceList = filtered.map((obj, index) => <ResourceCard key={index} data={obj}/>)

    if(resources.length === 0){
        return(<Stack className={"dim-spaced"} wrap spacing={15}><Loader center size={"lg"} content="Loading" /></Stack>)
    }

    return(
        <div>
            <InputGroup inside style={{width: "30%", margin: "10px 0"}} >
                <Input placeholder="Filter search..." onChange={(text) => setFilter(text)}/>
            <InputGroup.Button>
            <SearchIcon />
                </InputGroup.Button>
            </InputGroup>
            <Stack className={"dim-spaced"} wrap spacing={15}>
                {resourceList}
            </Stack>
        </div>
    )
}