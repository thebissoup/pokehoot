import React from 'react';
import { Container, Header, Content, Footer, Nav,} from "rsuite";
import { LibraryResources } from './LibraryResources';

export function LibraryPage(){
    return(
        <Container>
            <Header>
            <div className={"custom-nav-style"}>
                    <Nav reversed>
                        <Nav.Item href={"/"}>Home</Nav.Item>
                        {/* <Nav.Item href={"/tutorial"}>Tutorial</Nav.Item> */}
                        <Nav.Item href={"/create"} >Create</Nav.Item>
                        <Nav.Item active href={"/library"} >Library</Nav.Item>
                    </Nav>
                </div>
            </Header>
            <Content>
                <div className={"page-width"}>
                    <LibraryResources/>
                </div>
            </Content>
            <Footer>

            </Footer>
        </Container>
    )
}