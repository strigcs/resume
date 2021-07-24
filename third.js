import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Tel from "../Components/tel.png";
import Vk from "../Components/vk.jpg";
import Gram from "../Components/insta.jpg";
import "../Components/joe.css";

export default class third extends Component {
  render() {
    return (
      <div class="cont">
        <h1>strigcs</h1>
        <h3>Мои контактные данные:</h3>
        <a class="yt" href="https://t.me/strigcs" target="_blank">
          <img src={Tel} height="100" />
        </a>
        <a class="yt" href="https://vk.com/kozta2" target="_blank">
          <img class="vk" src={Vk} height="100" />
        </a>
        <a
          class="yt"
          href="https://www.instagram.com/kostya_strigcs/"
          target="_blank"
        >
          <img class="insta" src={Gram} height="100" />
        </a>
        <h3>Мой телефон:</h3>
        <h2>+7 961 508 70 47</h2>
        <h3>Моя почта:</h3>
        <h2>strigcs@gmail.com</h2>
        <a href="http://localhost:3000/5"><button class="batu3">Написать</button></a>
      </div>
    );
  }
}
