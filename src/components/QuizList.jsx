import { QuizCard } from "./QuizCard";
import { Stack } from "rsuite";
import React from "react"

export function QuizList({QuizSets}){
        const listItems = QuizSets.map((data) =>
            <QuizCard data={data}></QuizCard>
        );

    return(
        <Stack spacing={20}>
            {listItems}
        </Stack>
    )
}