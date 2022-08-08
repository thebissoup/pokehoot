import React from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Container, Header, Content, Footer, Nav } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function PageLayout() {
  let navigate = useNavigate();

  const [active, setActive] = useOutletContext();
  const [hidden, setHidden] = useState("");

  const handleSelection = (string) => {
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
          <Nav
            activeKey={active}
            onSelect={handleSelection}
            className={"box " + hidden}
          >
            <Nav.Item eventKey="home">Home</Nav.Item>
            <Nav.Item eventKey="create">Create</Nav.Item>
            <Nav.Item eventKey="library">Library</Nav.Item>
            <Nav.Item eventKey="play">Play</Nav.Item>
          </Nav>
        </div>
      </Header>
      <Content>
        <Outlet context={[setHidden, setActive]} />
      </Content>
      <Footer></Footer>
    </Container>
  );
}
