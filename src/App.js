import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import "./components/style.css"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/html">Html</NavLink></li>
            <li><NavLink activeClassName="active" to="/css">CSS</NavLink></li>
            <li><NavLink activeClassName="active" to="/js">Javascript</NavLink></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/html">
            <HtmlDefinition />
          </Route>
          <Route path="/css">
            <CssDefinition />
          </Route>
          <Route path="/js">
            <JsDefinition />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Bienvenue jeune curieux !</h2>
      <p>Cette page est un test pour un atelier de cours de la Wild Code School</p>
      <p>Voici quelques définitions de notions que l'on aborde lors de la formation, cliquez pour vous baladez à travers les différentes définitions</p>
    </div>
    )
  }

function HtmlDefinition() {
  return (
  <div className="container">
    <h2>What is HTML ?</h2>
    <p>Le HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web.C’est un langage permettant d’écrire de l’hypertexte, d’où son nom. HTML permet également de structurer sémantiquement et logiquement et de mettre en forme le contenu des pages, d’inclure des ressources multimédias dont des images, des formulaires de saisie et des programmes informatiques. 
        Il permet de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web. Il est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS). HTML est inspiré du Standard Generalized Markup Language (SGML). Il s'agit d'un format ouvert.</p>
  </div>
  )
}

function CssDefinition() {
  return (
    <div className="container">
      <h2>What is CSS ?</h2>
      <p>Les feuilles de style en cascade1, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000.</p>
    </div>
  )
}

function JsDefinition() {
  return (
    <div className="container">
      <h2>What is JavaScript ?</h2>
      <p>JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs2 avec l'utilisation (par exemple) de Node.js3. C'est un langage orienté objet à prototype, c'est-à-dire que les bases du langage et ses principales interfaces sont fournies par des objets qui ne sont pas des instances de classes, mais qui sont chacun équipés de constructeurs permettant de créer leurs propriétés, et notamment une propriété de prototypage qui permet d'en créer des objets héritiers personnalisés. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel. JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 20174.</p>
      <p>JavaScript a été créé en 1995 par Brendan Eich. Il a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. Le standard ECMA-262 en est actuellement à sa 8e édition. JavaScript n'est depuis qu'une implémentation d'ECMAScript, celle mise en œuvre par la fondation Mozilla. L'implémentation d'ECMAScript par Microsoft (dans Internet Explorer jusqu'à sa version 9) se nomme JScript, tandis que celle d'Adobe Systems se nomme ActionScript.</p>
      <p>Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web5. Le langage JavaScript permet des pages web interactives, et à ce titre est une partie essentielle des applications web. Une grande majorité des sites web l'utilisent6, et la majorité des navigateurs web disposent d'un moteur JavaScript dédié pour l'interpréter, indépendamment des considérations de sécurité qui peuvent se poser le cas échéant.</p>
    </div>
  )
}
