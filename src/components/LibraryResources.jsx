import React from "react";
import {useState} from "react";
import ResourceViewer from "./ResourceVIewer";

import { Stack, Nav } from "rsuite";

export function LibraryResources(){
    const [active,setActive] = useState("pokemon");
    return(
        <div>
            <Stack justifyContent={"space-between"} spacing={6}>
                <h1>Library</h1>
            </Stack>

            <hr class="dim-spaced"/>
            <Nav activeKey={active} appearance="tabs">
                <Nav.Item eventKey={"pokemon"} onClick={()=> setActive("pokemon")}>
                    PokeMon
                </Nav.Item>
                <Nav.Item eventKey={'item'} onClick={()=> setActive("item")}>Items</Nav.Item>
                <Nav.Item eventKey={'misc'} onClick={()=> setActive("misc")}>Misc.</Nav.Item>
                
            </Nav>
            <Stack className={"dim-spaced"} wrap spacing={15}>
                <ResourceViewer view={active}></ResourceViewer>
            </Stack>
        </div>
    )
}