import React from "react";
import { useEffect } from "react";
import { ResourceCard } from "./ResourceCard";

export default function PokemonResources(){
    let pokemonArr =[];

    useEffect(() =>{
       getPokemonArray();
    })

    async function getPokemonArray(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0");
        let data = await response.json();
        retrievePokemonData(data);   
    }

    async function getPokemonObject(url){
        const response = await fetch(url);
        let data = await response.json();
        return data;
    }
    
    async function retrievePokemonData(arr){
        console.log(arr.results);
        arr.results.map((obj)=>{
            let pokeObj = getPokemonObject(obj.url);
            console.log(pokeObj)
        })
    }
    
    let pikachu = {src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", name: "Pikachu", type:"Electric", meta:["Static", "Lightning Rod"]}
    //use useState hook to fetch
    //it should also receive a filter
    //return a list
    return(
        <ResourceCard data={pikachu}/>
    )
}