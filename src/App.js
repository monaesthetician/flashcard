import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import firebase from 'firebase/app';
import 'firebase/database';

import { DB_CONFIG } from './Config/Firebase/db_config';

class App extends Component {
  constructor(props) {
    super(props);
    
   
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard =  this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
       }
    }

    componentWillMount(){
      const currentCards = this.state.cards;
      this.database.on('child_added', snap => {
        currentCards.push({
          id: snap.key,
          eng: snap.val().eng,
          thai: snap.val().thai,
          ex: snap.val().ex
        })
      
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    })
    }

    getRandomCard(currentCards) {
         var card = currentCards[Math.floor(Math.random() * currentCards.length)]
         return(card);
      } 
  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  render() {
    return (
        <div className="App">
          <div className="cardRow">
            <Card eng={this.state.currentCard.eng} 
                thai={this.state.currentCard.thai} 
                ex={this.state.currentCard.ex}
                />
          </div>
          <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} />
          </div>
        </div>
     );
    }
  }
   
  export default App;






