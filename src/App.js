import React, {Component} from 'react';
import Joke from './Joke';
import Norris from './Norris.jpg';
import './App.css';
import 'tachyons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: 'click the green thing above'    
    }

  }


  

  

  render() {

    const chuckJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response=> response.json())
        .then(result=> this.setState({joke: result.value}))
    }
      

    return(  
    <div className="tc fl w-100 pa2">
      <img className="" src={Norris}/>
      <div className="center fl w-100 pa3">
        <button className="bg-dark-green white courier" onClick={chuckJoke}>Tell Me a Chuck Norris Joke PLZ...</button>
      </div> 
      <div className="center mw5 pa3" >
        <Joke text={this.state.joke} />
      </div>
    </div>
    );
    
  }

}


    

export default App;