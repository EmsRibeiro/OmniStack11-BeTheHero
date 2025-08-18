import React from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import {Link} from 'react-router-dom'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="frase Be The Hero" />

        <form>
          <h1>Faça seu Logon!</h1>
          <input placeholder="Sua ID aqui!"></input>
          <button type="submit" className="button">Entrar!</button>

          <Link className="back-link" to ="/register">
            <FiLogIn size={17} color="#E02041"/>
            Não tenho cadastro ainda
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="várias pessoas abraçadas" />
    </div>
  );
}
