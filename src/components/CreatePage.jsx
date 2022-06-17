import React from "react";
import { useState } from "react";
import { Container, Header, Content, Footer, Nav, Stack,} from "rsuite";
import { QuizForm } from "./QuizForm";

export function CreatePage(){
    
   
    return(
        <Container>
            <Header>
                <div class={"custom-nav-style"}>
                    <Nav activeKey={'create'} reversed>
                        <Nav.Item href={"/"}>Home</Nav.Item>
                        <Nav.Item href={"/tutorial"}>Tutorial</Nav.Item>
                        <Nav.Item href={"/create"} eventKey={"create"}>Create</Nav.Item>
                    </Nav>
                </div>
            </Header>
            <Content>
                <div class="page-width">
                    <Stack justifyContent={"space-between"} spacing={6}>
                        <h1>Quizzes</h1>
                        <button class="ui button">
                            <i class="plus icon"></i>
                            New Quiz
                        </button>
                    </Stack>
                
                    <hr class="dim-spaced"/>
                    <QuizForm />
                </div>
               
            </Content>
            <Footer>
            </Footer>
        </Container>
    )
}