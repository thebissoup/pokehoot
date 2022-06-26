import React from "react";
import {Tag, TagGroup, Badge} from "rsuite";

export function ResourceCard({data}){
    const metaList = data.abilities.map((obj) => <Tag>{obj.ability.name}</Tag>)
    return(
        <a className="ui card" href="/">
            <div className="image">
                <img src={data.sprites.front_default} alt=""/>
            </div>
            <div className="content">
                <div className="header" href="#">{data.name}</div>
                <div className="meta">
                <span className="date"><Badge style={{background: 'grey'}} content={data.types[0].type.name} /></span>
                </div>
                {/* <div class="description">
                Kristy is an art director living in New York.
                </div> */}
            </div>
            <div className="extra content">
                <TagGroup>
                    {metaList}
                </TagGroup>
            </div>
        </a>
    )
}