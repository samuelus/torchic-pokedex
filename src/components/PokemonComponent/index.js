import React from 'react';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const classes = theme => ({
    card: {
        width: 180,
        margin: 10,
        padding: 5,
        boxShadow: 8,
        borderRadius: 10
    },

    desc: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '1.35mm',
        textAlign: 'center',
        alignItems: 'center',
    }

})

class Pokemon extends React.Component {
    render() {
        const classes = this.props.classes
        return (
            <Card className={classes.card} raised={true} elevation={4}>
                <CardActionArea>
                    <div style={{height: 170}}>
                    <CardMedia
                        component="img"
                        alt={this.props.pokemon.name}
                        image={this.props.pokemon.img}
                    />
                    </div>
                    <CardContent>
                        <Typography className={classes.desc}>
                            {this.props.pokemon.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
export default withStyles(classes)(Pokemon)