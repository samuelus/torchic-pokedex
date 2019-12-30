import React from 'react';
import {Card} from '@material-ui/core';

export default class Pokemon extends React.Component {
    render() {
        return (
            <Card style={{width: 180, margin: 10, padding: 5}}>
                <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={this.props.pokemon.img} alt=""/>
            </Card>
        )
    }
}
