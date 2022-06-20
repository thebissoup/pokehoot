import React from "react";


export function QuizCard({data}){
    return(
        <div class="ui card">
            <div class="image">
                <img src={data.img}/>
            </div>
            <div class="content">
                <div class="header">{data.title}                
                </div>
                <div class="meta">
                <div>
                    <i class="book icon"></i>
                    {data.quantity} Questions
                </div>
                    <span class="date">created by {data.createdBy}</span>
                </div>
                <div class="description">
                        {data.description}
                </div>
                
             </div>
             
            <div class="extra content">
                <div class="compact ui green vertical animated button" tabIndex="0">
                    <div class="hidden content">
                    <i class="long arrow alternate right icon"></i>
                    </div>
                    <div class="visible content">
                        Play
                    </div>
                </div>
                <div class="compact ui vertical animated button" tabIndex="0">
                    <div class="hidden content">
                    <i class="bars icon"></i>
                    </div>
                    <div class="visible content">
                        View
                    </div>
                </div>
            </div>
        </div>
    )
}