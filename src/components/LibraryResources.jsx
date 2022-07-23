// we need to create a function that receives an object url and a string, fetches that data associated with that string

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ResourceViewer from "./ResourceVIewer";

import { Stack, Nav } from "rsuite";

export function LibraryResources() {
  let urls = [
    {
      resource_name: "pokemon",
      url: `https://pokeapi.co/api/v2/pokemon?limit=250&offset=0`,
    },
    {
      resource_name: "item",
      url: `https://pokeapi.co/api/v2/item?limit=250&offset=0`,
    },
  ];

  const [active, setActive] = useState("pokemon");
  const [pokemon, setPokemons] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getResourceArray(urls[0]);
    getResourceArray(urls[1]);
  }, []); // needs to keep track of active

  async function getResourceArray({ resource_name, url }) {
    //needs the name of the state resource
    const response = await fetch(url);
    let data = await response.json();
    let urls = data.results.map((obj) => obj.url); // creates an array of fetch urls
    fetchAll(resource_name, urls);
  }

  async function fetchAll(resource_name, urls) {
    const res = await Promise.all(
      urls.map((url, index) =>
        fetch(url).catch((err) =>
          console.log(resource_name, "error at ", index)
        )
      )
    );
    const jsons = await Promise.all(res.map((response) => response.json()));

    if (resource_name === "pokemon") {
      setPokemons(jsons);
    }
    if (resource_name === "item") {
      setItems(jsons);
    }

    // const size = new TextEncoder().encode(JSON.stringify(jsons)).length
    // const kiloBytes = size / 1024;
    // const megaBytes = kiloBytes / 1024;
  }

  return (
    <div>
      <Nav activeKey={active} appearance="tabs">
        <Nav.Item eventKey={"pokemon"} onClick={() => setActive("pokemon")}>
          PokeMon
        </Nav.Item>
        <Nav.Item eventKey={"item"} onClick={() => setActive("item")}>
          Items
        </Nav.Item>
        <Nav.Item eventKey={"misc"} onClick={() => setActive("misc")}>
          Misc.
        </Nav.Item>
      </Nav>
      <ResourceViewer
        view={active}
        pokemon={pokemon}
        item={items}
      ></ResourceViewer>
    </div>
  );
}
