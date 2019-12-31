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
                        alt="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vksot560mgsl75tqvxbb.jpg"
                        image="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vksot560mgsl75tqvxbb.jpg"
                    />
                    </div>
                    <CardContent>
                        <Typography className={classes.desc}>
                            "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vksot560mgsl75tqvxbb.jpg"
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
export default withStyles(classes)(Pokemon)