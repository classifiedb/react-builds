"use strict";

/**
 * The Rise of Single-Page Applications
 * "why do front-end frameworks like react exist and not just use vanila JavaScript?"
 * 1. JavaScript front-end frameworks exist because: keeping a user interface in sync with  data is really hard and a lot of work
 *  - front-end  frameworks solve this problem and take hard work away from developers
 *  (Angular, React, Vue) frameworks take the hardwork of synchronising data away from developers, so as we developers can focus on the data and building user interfaces
 * 2. They enforce a "correct" way of structuring and writing code (therefore contributing to solving the problem of "spagetti code")
 * 3. They give developers and teams a consistent way of building front-end appliactions.
 *
 * before 2010 all websites were rendered on the server (server-side rendering e.g all websites built with word press) jQuery was famously used back then
 * server side is also making a come back now days with next js and other
 *
 * Now we have Client-side rendering the load is shifted from the server to the client (single-page application) Data --> API
 *
 * Front-end we application are all about
 * 1. Handling data + displaying data in a user interface
 * 2. User interface needs to stay in sync with data (keeping UI in SYNC with Data)
 * 3. very hard problem to solve
 *
 * we can't use single-page applications with vanilla JavaScript
 * 1. Requires lots of direct DOM manipulation and traversing (imperative) 'spaghetti code'
 * 2. Data (state) is usually stored in the DOM, shared across entire app (hard to reason and a lot of bugs)
 *
 */

/**
 * What is React?
 * React - JavaScript Library for building user interfaces
 *  - react is an extremely popular declarative, component-based state-driven JavaScript library for building user interfaces, created by facebook
 *
 * 1. Based on components: components are the building blocks of user interfaces in React (and react gets all components and draws them on a web page)
 * 2. Declarative: each component must describe what it looks like; we describe how components look like and how they work using a declarative syntax called JSX
 *                  - Declarative; telling react what a component should look like, based on current data/state
 *                  - React is abstraction away from DOM: we never touch the DOM
 *                  - JSX: a syntax that combines HTML, CSS, JavaScript as well as referencing other components (react components)
 * 3. State-driven: (if react never touches the DOM how does it update the UI? and the UI is always supposed to be in sync with the data): React reacts to state changes
 *                  by re-rendering the UI (that's why react is called react in the first place)
 * 4. JavaScript Library: (is react a library or a framework): react is a library because react is only the 'view' layer. we need to pick multiple external libraries
 *                  to build a complete application. (NEXT.js and Remix are some built based of react)
 * 5. Extremely popular:- many large companies have adopted react (paypal, tesla, netflix, airbnb)
 *                      - Huge job market with hight demand for react developers
 *                      - Large and vibrant react developer community
 *                      - Gigantic third-party react library
 * 6. Created by facebook: Created 2011 by Jordan Walke, an engineer working at Facebook at the time
 *                          - react was open-sourced in 2013
 *
 * Summary: react is good for 2 things
 *          1. Rendering components on a webpage (UI) based on their current state
 *          2. Keeping the UI in sync with state, by re-rendering (reacting) when state changes
 */

/**
 * Setting up a real world react project: the options
 * 1. Create-react-app: 'starter kit' with already configured ESLint, prettier, Jest, etc
 *                      - problem is it was created years ago and includes some slow and outdated technologies ie webpack
 *                      - it could be used for tutorials or experiments (Don't use for a real-world app)
 *
 *
 * 2. VITE: Modern build tool that contains a template for setting up React applications
 *          - Need to manually set up ESLint, prettier and a testing libray (setting up ESLint to play nice with react could be tough)
 *          - VITE is extremely fast hot module replacement (HMR) and bundling (page will update instantly once saved)
 *          - use VITE for modern real-world apps
 *
 * - React advices developers to use NEXT.js(contains solutions for routing, data fetching, service side rendering) or Remix for new react projects
 *  (simply building react application on react library and not just using vanila react)
 *  this is for production appliactions
 */

/**
 * DEBUGGING react
 * 1. make sure the app is running
 * 2. If app is running, stop the app and re run it (npm start)
 * 3. Do a hard reload on the browser
 * 4. Always keep the terminal open and the dev tools on the browser
 * 5. Incase of syntax errors, react App has a built in that will display the errors and you can copy and google the errors
 * 6. work with eslint (warning that apper on the lines you are typing on the IDE)
 */
