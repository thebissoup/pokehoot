import React from "react";
import { useState } from "react";
import { Container, Header, Content, Footer, Nav, Stack, Modal} from "rsuite";
import { Link } from "react-router-dom";


export function CreatePage(){
    const [open,setOpen] = useState(false);
    return(
        <Container>
            <Header>
                <div class={"custom-nav-style"}>
                    <Nav activeKey={'create'}  reversed>
                        
                        <Nav.Item href={"/"}>Home</Nav.Item>
                        <Nav.Item href={"/tutorial"}>Tutorial</Nav.Item>
                        <Nav.Item href={"/create"} eventKey={"create"}>Create</Nav.Item>
                    </Nav>
                </div>
            </Header>
            <Content>
               <Stack justifyContent={"space-between"} spacing={6}>
                    <h1>Quizzes</h1>
                    <button onClick={() =>{
                        setOpen(true);
                    }}class="ui button">
                        <i class="plus icon"></i>
                        New Quiz
                    </button>
               </Stack>
               <hr class="dim-spaced"/>
            </Content>
            <Footer>
            </Footer>
        </Container>
    )
}