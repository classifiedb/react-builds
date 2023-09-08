//webpex expects index.js so the file need to be named index.js
import React from "react";
import ReactDom from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//creating app component (doesn't necessary have to be called app it's just a convention and has to be uppercase)
function App() {
  //since we can only return one element in a component (nesting component would help get all components together)
  return (
    <div>
      <h1>Hello React😃</h1>
      <Pizza />
      {/* reusing the component 
      <Pizza />
      <Pizza />
      <Pizza /> */}

      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//header component
function Header() {
  return <h1>Fast React Company Co.</h1>;
}

//menu component
function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

//footer component
function Footer() {
  return (
    <Footer>{new Date().toLocaleDateString()}. We're Currenly Open</Footer>
  );
  // return React.createElement("footer", null, "we are Currently open!");
}

/**
 * we could also write the components as arrow function or as declarative functions
 *
 * const Test = () =>
 */

//creating a component and reuseability
//each component can only return one element
//in react we write components using functions (2 important rule function name has to start with uppercase letter and 2. it has to return some markup)
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h2>Pizza Spinaci🍕</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

//way we render the root or the react app in version 18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//before react 18
// React.render(<App />, document.getElementById("root"));

/**
 * Components as Building blocks in React
 * - everything in react is either a component or inside a component
 *
 * Components: react applications are entirely made ot of components
 *          - Bulding blocks of user interfaces in React
 *          - piece of UI that has its own data, logic, and appearance (how it works and looks)
 *          - we build complex UIs by building multiple components and combining them
 *          - Nesting and combining components is a key way of using components in react
 * Eg: question components, video component, (refine questions(parent component) --> filters (child component))
 */

/**
 * What is JSX
 * JSX: is a declarative syntax to describe what components look like and how they work
 *    - components must return a block of JSX
 *    - Extension of JavaScript that allows us to embed JavaScript CSS and React components into HTML
 *    - Each JSX element is converted to a React.createElement function call
 *    - we could actually use React without JSX
 *
 * JSX is DECLARATIVE: - Describe what UI should look like using JSX, based on current data
 *              - React is an abstraction away from DOM: we never touch the DOM
 *              - Instead, we think of the UI as a reflection of the current data
 *              (basically we tell React what we want on the screen, but not how)
 *
 * IMPERATIVE: manual DOM element selections and DOM traversing
 *          - Step-by-step DOM mutations until we reach the desired UI
 *            (vanilla react, basically tell react how to do things step by step)
 */
