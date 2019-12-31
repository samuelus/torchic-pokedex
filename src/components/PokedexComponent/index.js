import React from 'react';
import List1 from '../../assets/pokedex.json';
import List2 from '../../assets/pokemon.json';
import Pokemon from '../PokemonComponent';
import {Paper, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Scrollbars from 'react-custom-scrollbars';

const classes = theme => ({
    pokeWrapper: {
        maxHeight: '75vh',
        overflow: 'auto',
        margin: 30,
        display: 'flex',
        flexWrap: 'wrap'
    },

    pokeContent: {
        display: 'flex',
        flexWrap: 'wrap'
    },

    title: {
        margin: theme.spacing(5),
        marginLeft: theme.spacing(10),
        letterSpacing: '1.35mm',
        fontSize: 20,
        fontWeight: theme.typography.fontWeightLight,
        textTransform: 'uppercase',
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
                <Typography className={classes.title}>Pokédex</Typography>
                <div className={classes.pokeWrapper}>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        style={{
                            width: "100%",
                            height: "75vh",
                    }} >
                        <Paper className={classes.pokeContent}>
                            {this.pokemons.map((pokemon) => (
                                <Pokemon key = {pokemon.id} pokemon={pokemon}/>
                            ))}
                        </Paper>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default withStyles(classes)(Pokedex)