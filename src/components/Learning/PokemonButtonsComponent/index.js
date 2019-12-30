import React from 'react'

export default class PokemonButtons extends React.Component {

    render() {

        let Buttons = [];
        for (let index = 1; index <= this.props.ButtonNumber; ++index)
        {
            Buttons.push(
                <button
                    onClick={() => { this.props.ChangePokemon(index) }}
                    key={index}
                >
                    {index}
                </button>
            )
        }

        return (
            <div>
                {Buttons}
            </div>
        )
    }
}
