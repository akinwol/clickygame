import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/NavBar/nav"
import Header from "./components/Header/header.js"
import CharacterCard from "./components/Characters"
import Characters from "./characters.json"
import Container from "./components/Container/container.js"

class App extends Component {
  state = {
    Characters,
    selected: [],
    score: 0,
    topScore: 0

  }
  shuffle = (id) => {
    // this.state.selected.push(id)
    // console.log(this.state.selected)
    const Characters = this.state.Characters.sort(() => Math.random() - 0.5)
    this.setState(Characters)
  };
// clicked item is a prop 
  clickItem = (id) => {
    if (this.state.selected.includes(id)) {
      console.log(true);
      if (this.state.topScore < this.state.score) {
        this.setState({ score: 0, topScore: this.state.score, selected:[] })
      }
      else{
        this.setState({score: 0, selected:[]})
      }
    }
    else {
      console.log(false)
      this.state.selected.push(id)
      console.log(this.state.selected)
      this.setState({ score: this.state.score + 1 })
    }


    this.shuffle();

  };
// run the shuffle function once all the components are loaded 
  componentDidMount() {
    this.shuffle();
  };


  // scoreIncrament = () => {

  //   this.setState({ score: this.state.score + 1 })
  // };

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}>  </Nav>
        <Header />
        <Container>
          {this.state.Characters.map(Character => (
            <CharacterCard
              clickItem={this.clickItem}
              key={Character.id}
              id={Character.id}
              name={Character.name}
              image={Character.image} />
          ))}
        </Container>



      </div>


    );
  }
}

export default App;
