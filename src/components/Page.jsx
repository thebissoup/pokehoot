import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Content, Footer, Nav } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function PageLayout({ active, setActive }) {
  let navigate = useNavigate();

  const handleSelection = (string, event) => {
    setActive(string);
    if (string == "home") {
      navigate("/");
    } else {
      navigate("/" + string);
    }
  };

  return (
    <Container>
      <Header>
        <div className="nav-position">
          <Nav activeKey={active} onSelect={handleSelection} className="box">
            <Nav.Item eventKey="home">Home</Nav.Item>
            <Nav.Item eventKey="create">Create</Nav.Item>
            <Nav.Item eventKey="library">Library</Nav.Item>
          </Nav>
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </Container>
  );
}
