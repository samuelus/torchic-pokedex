import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Scrollbars from 'react-custom-scrollbars';
import Pokemon from "../PokemonComponent";

const classes = theme => ({
    pokeWrapper: {
        maxHeight: '70vh',
        overflow: 'auto',
        margin: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap'
    },

    pokeContent: {
        display: 'flex',
        flexWrap: 'wrap'
    },

    title: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(10),
        letterSpacing: '1.35mm',
        fontSize: 20,
        fontWeight: theme.typography.fontWeightLight,
        textTransform: 'uppercase',
    }
})

class Android extends React.Component {
    constructor(props) {
        super(props)
        this.state = {pokemons: ['{"articles":[{}]}']}
    }
    componentWillMount() {
        fetch('https://newsapi.org/v2/everything?q=Android&?q=Android&apiKey=c25a7118fd48458dbe1caa67d06e3d6b')
            .then(res => res.json())
            .then((data) => {
                this.setState({pokemons: data})
            })
    }

    render() {
        const pikamon = this.state.pokemons;
        const classes = this.props.classes;
        console.log(pikamon)
        return (
            <div>
                <Typography className={classes.title}>Android</Typography>
                <div className={classes.pokeWrapper}>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        style={{
                            width: "100%",
                            height: "70vh",
                    }} >
                        <Paper className={classes.pokeContent}>
                            {pikamon.map((pokemon) => (
                                <Pokemon key = {pokemon.name} pokemon={pokemon}/>
                            ))}
                        </Paper>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}
export default withStyles(classes)(Android)