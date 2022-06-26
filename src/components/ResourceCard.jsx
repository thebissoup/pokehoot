import React from "react";
import {Tag, TagGroup, Badge} from "rsuite";

export function ResourceCard({data}){
    const abilityList = data.abilities.map((obj) => <Tag>{obj.ability.name}</Tag>)
    const metaList = data.types.map((obj,index) => {
        return(
            <span key={index} className={"date " + obj.type.name} >
                <Badge style={{background: 'transparent'}} content={obj.type.name} />
            </span>
        )
    } )
    return(
        <a className="ui card" href="/">
            <div className="image">
                <img src={data.sprites.front_default} alt=""/>
            </div>
            <div className="content">
                <div className="header" href="#">{data.name}</div>
                <div className="meta">
                    {metaList}
                </div>
                {/* <div class="description">
                Kristy is an art director living in New York.
                </div> */}
            </div>
            <div className="extra content">
                <TagGroup>
                    {abilityList}
                </TagGroup>
            </div>
        </a>
    )
}