import React from "react";
import {Tag, TagGroup} from "rsuite";

export function ResourceCard(){
    return(
        <div class="ui card">
            <div class="image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
            </div>
            <div class="content">
                <a class="header">Pikachu</a>
                <div class="meta">
                <span class="date">Electric</span>
                </div>
                {/* <div class="description">
                Kristy is an art director living in New York.
                </div> */}
            </div>
            <div class="extra content">
                <TagGroup>
                    <Tag>Lightning Rod</Tag>
                    <Tag>Static</Tag>
                </TagGroup>
            </div>
        </div>
    )
}