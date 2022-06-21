import { QuizCard } from "./QuizCard";
import { Stack } from "rsuite";
import React from "react"

export function QuizList({QuizSets}){
        const listItems = QuizSets.map((data,index) =>
            <QuizCard data={data} key={index}></QuizCard>
        );

    return(
        <Stack spacing={20}>
            {listItems}
        </Stack>
    )
}