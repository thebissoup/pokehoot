import React from "react";
import { Badge, Tag } from "rsuite";

export function CreateChoose() {
  return (
    <div className="side-by-side section">
      <div className="ui card" href="/">
        <div className="image">
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png"
            }
            alt=""
          />
        </div>
        <div className="content">
          <div className="header" href="#">
            <button class="fluid compact huge ui blue button">
              Start Demo
            </button>
          </div>
        </div>
      </div>

      <a className="ui card" href="/new">
        <div className="image">
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
            }
            alt=""
          />
        </div>
        <div className="content">
          <div className="header" href="#">
            <button class="fluid compact huge ui button">
              {" "}
              <i class="plus icon"></i>New Quiz
            </button>
          </div>
          {/* <div class="description">
                Kristy is an art director living in New York.
                </div> */}
        </div>
      </a>
    </div>
  );
}
