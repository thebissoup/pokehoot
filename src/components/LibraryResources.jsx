import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import ResourceViewer from "./ResourceVIewer";

import { Stack, Nav } from "rsuite";

export function LibraryResources(){
    
    const [active,setActive] = useState("pokemon");
    const [resources, setResources] = useState([]);

     useEffect(() =>{
         getResourceArray(active);
         console.log(active);
     },[])
    

    async function getResourceArray(active){
        const response = await fetch(`https://pokeapi.co/api/v2/${active}?limit=2000&offset=0`);
        let data = await response.json();
        let urls = data.results.map((obj) => obj.url);
        fetchAll(urls);
    }

    async function fetchAll(urls){
        const res = await Promise.all(urls.map(url => fetch(url)));
        const jsons = await Promise.all(res.map(response => response.json()))
        setResources(jsons);
        console.log(jsons);
    }

    return(
        <div>
            <Stack justifyContent={"space-between"} spacing={6}>
                <h1>{active}</h1>
            </Stack>

            <hr className={"dim-spaced"}/>
            <Nav activeKey={active} appearance="tabs">
                <Nav.Item eventKey={"pokemon"} onClick={()=> setActive("pokemon")}>
                    PokeMon
                </Nav.Item>
                <Nav.Item eventKey={'item'} onClick={()=> setActive("item")}>Items</Nav.Item>
                <Nav.Item eventKey={'misc'} onClick={()=> setActive("misc")}>Misc.</Nav.Item>
                
            </Nav>
            
                 <ResourceViewer view={active} resources={resources}></ResourceViewer>

        </div>
    )
}