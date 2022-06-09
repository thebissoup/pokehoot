import React from 'react';
import { Container, Header, Content, Footer, Nav, Carousel, Divider, Stack} from "rsuite";

export function HomePage(){

    return(
        <Container>
            <Header>
                <div class={"custom-nav-style"}>
                    <Nav appearance={'tabs'} reversed>
                        <Nav.Item active>Home</Nav.Item>
                        <Nav.Item>Tutorial</Nav.Item>
                        <Nav.Item>Create</Nav.Item>
                    </Nav>
                </div>
            </Header>
            <Content>
                <Carousel autoplay>
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
                </Carousel>
                <Divider />
                <Stack wrap>
                    
                </Stack>
            </Content>
            <Footer>
            </Footer>
        </Container>
    )
}