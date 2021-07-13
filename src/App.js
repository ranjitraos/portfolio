import React from "react";
import logo from "./logo.svg";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

function App({ children }) {
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      {children}
      <Navbar></Navbar>
      <main className="container">
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Redirect from="/" exact to="/home"></Redirect>
        </Switch>
      </main>

      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
