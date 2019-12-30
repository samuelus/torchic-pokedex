import React from 'react';
import './App.css';
import Pokemon from '../PokemonComponent';
import Torchic1 from '../../assets/Torchic1.jpg';
import Torchic2 from '../../assets/Torchic2.png';
import Torchic3 from '../../assets/Torchic3.png';
import CookieClicker from '../CookieClickerComponent';
import Clock from '../ClockComponent';
import Switch from '@material-ui/core/Switch';
import PokemonButtons from '../PokemonButtonsComponent';

class App extends React.Component {
    constructor(props) 
    {
        super(props)
        this.state = {
            PictureNumber: 0,

            descriptions: [
                "Fajny Torchic",
                "Bardziej Fajny Torchic",
                "Najbardziej Fajny Torchic"
            ],

            ShowClock: true
        }
    }

    descriptionUpdate = (event) =>
    {
        let descriptionsCopy = Array.from(this.state.descriptions)
        descriptionsCopy[this.state.PictureNumber] =  event.target.value
        this.setState({
            descriptions: descriptionsCopy
        })
    }

    changeState = (name, value) =>
    {
        this.setState({
            [name]: value
        })
    }

    render()
    {
        let pokemon = [
            { image: Torchic1 },
            { image: Torchic2 },
            { image: Torchic3 }
        ];
        
        return (
            <div className="App">
                <Switch
                    checked = {this.state.ShowClock}
                    onChange = {(event) => {this.changeState("ShowClock", (event.target.checked))}}
                />
                {/*(this.state.ShowClock) ? (<Clock/>):(null)*/}
                {(this.state.ShowClock) && <Clock/>}
                <Pokemon 
                    image={pokemon[this.state.PictureNumber].image} 
                    name={pokemon[this.state.PictureNumber].name}
                    description={this.state.descriptions[this.state.PictureNumber]}
                    descriptionChange={this.descriptionUpdate}
                    pokemonChange={() => {this.changeState("PictureNumber", (this.state.PictureNumber + 1) % 3)}}
                />
                <PokemonButtons
                    ButtonNumber={this.state.descriptions.length}
                    ChangePokemon={(index) => {this.changeState("PictureNumber", (index-1))}}
                />
                <CookieClicker />
            </div>
        );
    }
}

export default App;