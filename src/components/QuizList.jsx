import { Card } from "./Card";
import { Stack } from "rsuite";
import React from "react"

export function QuizList({QuizSets}){
        const listItems = QuizSets.map((data) =>
            <Card data={data}></Card>
        );

    return(
        <Stack spacing={20}>
            {listItems}
        </Stack>
    )
}