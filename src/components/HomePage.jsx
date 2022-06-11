import React from 'react';
import { Container, Header, Content, Footer, Nav, Carousel, Divider} from "rsuite";
import { Link } from "react-router-dom";
import { QuizList } from './QuizList';

export function HomePage(){
    let QuizSets = [{
        title: "Pokemon Movesets",
        quantity: 10,
        createdBy: "dbissou",
        img: "https://www.nicepng.com/png/detail/485-4856027_pikachu-pikachu-ears-cute-pikachu-cute-pokemon-pokemon.png",
        description:'Take this quiz to test your pokemon moveset knowledge!'
    },{
        title: "Pokemon Origins",
        quantity: 15,
        createdBy: "dbissou",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        description:'Take this quiz to test your knowledge on pokemon origins!'
    }]

    return(
        <Container>
            <Header>
                <div class={"custom-nav-style"}>
                    <Nav reversed>
                        <Nav.Item active href={"/"}>Home</Nav.Item>
                        <Nav.Item href={"/tutorial"}>Tutorial</Nav.Item>
                        <Nav.Item href={"/create"} >Create</Nav.Item>
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
                    <QuizList QuizSets={QuizSets}></QuizList>
            </Content>
            <Footer>
            </Footer>
        </Container>
    )
}