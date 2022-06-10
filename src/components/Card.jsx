import React from "react"
export function Card({data}){
        console.log(data);
    return(
        <div class="ui card">
            <div class="image">
                <img src={data.img}/>
            </div>
            <div class="content">
                <div class="header">{data.title}</div>
                <div class="meta">
                    <span class="date">{data.createdBy}</span>
                </div>
                <div class="description">
                        {data.description}
                </div>
             </div>
            <div class="extra content">
                <a>
                    <i class="book icon"></i>
                    {data.quantity} Cards
                </a>
            </div>
        </div>
    )
}