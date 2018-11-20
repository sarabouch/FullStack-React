import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Container from "./components/Container/Container"
import EpisodeList from "./components/List/List"



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Container>
          <EpisodeList />
        </Container>
      </div>
    );
  }
}

export default App;