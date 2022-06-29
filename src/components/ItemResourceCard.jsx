import React from 'react';

export default function ItemResourceCard({data}){

    return(
                <div class="ui card">
        <div class="image">
            <img className='shrink' src={data.sprites.default}/>
        </div>
        <div class="content">
            <a class="header">{data.name}</a>
            <div class="meta">
            <span class="date">{data.category.name}</span>
            </div>
            <div class="description">
            {data.effect_entries[0].short_effect}
            </div>
        </div>
        <div class="extra content">
            <a>
            Cost: {data.cost}
            <i class="ruble icon"></i>
            
            </a>
        </div>
        </div>
    )
}