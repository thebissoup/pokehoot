import React from "react";
import {Tag, TagGroup} from "rsuite";

export function ResourceCard({data}){
    const metaList = data.abilities.map((obj) => <Tag>{obj.ability.name}</Tag>)
    return(
        <a class="ui card ">
            <div class="image">
                <img src={data.sprites.front_default} alt=""/>
            </div>
            <div class="content">
                <a class="header" href="#">{data.name}</a>
                <div class="meta">
                <span class="date">{data.types[0].type.name}</span>
                </div>
                {/* <div class="description">
                Kristy is an art director living in New York.
                </div> */}
            </div>
            <div class="extra content">
                <TagGroup>
                    {metaList}
                </TagGroup>
            </div>
        </a>
    )
}