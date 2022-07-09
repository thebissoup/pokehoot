import React from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  Nav,
  Stack,
  Divider,
} from "rsuite";
import { QuizList } from "./QuizList";
import { Link } from "react-router-dom";

export function HomePage() {
  let QuizSets = [
    {
      title: "Pokemon Movesets",
      quantity: 10,
      createdBy: "dbissou",
      img: "https://www.nicepng.com/png/detail/485-4856027_pikachu-pikachu-ears-cute-pikachu-cute-pokemon-pokemon.png",
      description: "Take this quiz to test your pokemon moveset knowledge!",
    },
    {
      title: "Pokemon Origins",
      quantity: 15,
      createdBy: "dbissou",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      description: "Take this quiz to test your knowledge on pokemon origins!",
    },
  ];

  return (
    <Container>
      <Header>
        <div className={"custom-nav-style"}>
          <Nav reversed>
            <Nav.Item active href={"/"}>
              Home
            </Nav.Item>
            {/* <Nav.Item href={"/tutorial"}>Tutorial</Nav.Item> */}
            <Nav.Item href={"/create"}>Create</Nav.Item>
            <Nav.Item href={"/library"}>Library</Nav.Item>
          </Nav>
        </div>
      </Header>
      <Content>
        <div className="content-section section">
          <div className="box title-card">
            <div>
              <h1 className="">Welcome To Pokehoot</h1>
              <p className="faded">The free pokemon alternative to Kahoot!</p>
              <img
                className="pikachu"
                src="https://projectpokemon.org/images/normal-sprite/pikachu.gif"
                alt="pikachu"
              ></img>
            </div>
            <Stack spacing={3}>
              <Link to={"/create"}>
                <div class="ui primary vertical animated button" tabIndex="0">
                  <div class="hidden content">
                    <i class="long arrow alternate right icon"></i>
                  </div>
                  <div class="visible content">Demo</div>
                </div>
              </Link>
              <button class="ui button">Learn More</button>
            </Stack>
          </div>
        </div>

        <Divider />
        <div className="section"></div>
        <QuizList QuizSets={QuizSets}></QuizList>
      </Content>
      <Footer></Footer>
    </Container>
  );
}
