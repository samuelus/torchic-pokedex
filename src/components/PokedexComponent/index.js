import React from 'react';
import List1 from '../../assets/pokedex.json';
import List2 from '../../assets/pokemon.json';
import Pokemon from '../PokemonComponent';
import {Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const classes = theme => ({
    pokeWrapper: {
        maxHeight: '75vh',
        overflow: 'auto',
        margin: 30,
        display: 'flex',
        flexWrap: 'wrap'
    }
})

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.pokemons = List1.map((value, index) => ({
            ...value,
            description: List2[index].description
        }))
    }

    render() {
        const classes = this.props.classes
        return (
            <div>
                Lista Pokemonuf
                <Paper className={classes.pokeWrapper}>
                    {this.pokemons.map((pokemon) => (
                        <Pokemon key = {pokemon.id} pokemon={pokemon}/>
                    ))}
                </Paper>
            </div>
        )
    }
}

export default withStyles(classes)(Pokedex)