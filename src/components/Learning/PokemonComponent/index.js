import React from 'react';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

class Pokemon extends React.Component
{
    render()
    {
        return (
            <Paper style={{
                margin: 30,
                padding: 30
            }}
                
                >
                <img 
                    alt="torchic"
                    style = {{
                        height: 300
                    }}
                    src = {this.props.image}
                />
                <h1>{this.props.description}</h1>
                <TextField 
                    variant = "outlined"
                    type="text"
                    onChange = {this.props.descriptionChange}
                    value = {this.props.description}
                />
                <br/>
                <Button variant="contained" color="primary" onClick={this.props.pokemonChange} style={{margin: 5}}>Next Pokemon</Button>
            </Paper>
        );
    }
}

export default Pokemon;