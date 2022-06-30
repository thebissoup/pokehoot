import React from "react";
import { Container, Header, Content, Footer, Nav,} from "rsuite";
import { QuizForm } from "./QuizForm";

export function CreatePage(){
    
   
    return(
        <Container>
            <Header>
                <div class={"custom-nav-style"}>
                    <Nav activeKey={'create'} reversed>
                        <Nav.Item href={"/"}>Home</Nav.Item>
                        {/* <Nav.Item href={"/tutorial"}>Tutorial</Nav.Item> */}
                        <Nav.Item href={"/create"} eventKey={"create"}>Create</Nav.Item>
                        <Nav.Item href={"/library"} >Library</Nav.Item>
                    </Nav>
                </div>
            </Header>
            <Content>
                <div class="page-width">
                    <QuizForm />
                </div> 
            </Content>
            <Footer>
            </Footer>
        </Container>
    )
}