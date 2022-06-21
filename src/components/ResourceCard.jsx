import React from "react";
import {Tag, TagGroup} from "rsuite";

export function ResourceCard({data}){
    return(
        <div class="ui card">
            <div class="image">
                <img src={data.src} alt=""/>
            </div>
            <div class="content">
                <a class="header" href="#">{data.name}</a>
                <div class="meta">
                <span class="date">{data.type}</span>
                </div>
                {/* <div class="description">
                Kristy is an art director living in New York.
                </div> */}
            </div>
            <div class="extra content">
                <TagGroup>
                    {data.meta.map((meta) => <Tag>{meta}</Tag>)}
                </TagGroup>
            </div>
        </div>
    )
}