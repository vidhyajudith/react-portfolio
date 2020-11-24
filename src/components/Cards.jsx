import React from "react";
import CardItem from "./CardItem";
import keeper from "../images/keeper.png";
import hawaii from "../images/hawaii.png";
import drum from "../images/drum.png";
import toDoList from "../images/to-do-list.png";
import memory from "../images/memory.png";
import photoPortfolio from "../images/photo-portfolio.png";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem
            path="https://7n3su.csb.app/"
            category="ReactJS"
            imgSrc={keeper}
            imgAlt="keeper-img"
            title="Keeper App "
            info="A notes keeping app (codesandbox)"
          />

          <CardItem
            path="https://9p28k.csb.app/"
            category="ReactJS"
            imgSrc={toDoList}
            imgAlt="to-do-list-img"
            title="To Do list"
            info="To do list web app with basic functionality (codesandbox)"
          />

          <CardItem
            path="https://vidhyajudith.github.io/memory-game/"
            category="JavaScript"
            imgSrc={memory}
            imgAlt="memory-game-img"
            title="Memory Game"
            info="Simple memory game using JavaScript"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            path="https://vidhyajudith.github.io/hawaii/"
            category="JS,Bootstrap"
            imgSrc={hawaii}
            imgAlt="hawaii-img"
            title="Hawaii"
            info="Travel website main page, using HTML,CSS,Bootstrap and Javascript"
          />

          <CardItem
            path="https://vidhyajudith.github.io/drum-kit/"
            category="JavaScript"
            imgSrc={drum}
            imgAlt="drumkit-img"
            title="Drum-Kit"
            info="An online drum-kit."
          />

          <CardItem
            path="https://vidhyajudith.github.io/perspective-portfolio/"
            category="HTML5, CSS"
            imgSrc={photoPortfolio}
            imgAlt="photography"
            title="Photography Portfolio"
            info="Photography portfolio Website."
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
