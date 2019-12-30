import React from 'react';
import { Typography } from '@material-ui/core';

export default class Clock extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
            seconds: new Date().getSeconds().toLocaleString()
        };
    }

    componentDidMount()
    {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount()
    {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString(),
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
            seconds: new Date().getSeconds().toLocaleString()
      });
    }

    render()
    {        
        return (
            <Typography>
                {(this.state.hours.length === 1) ? ("0") : ("")}{this.state.hours}:
                {(this.state.minutes.length === 1) ? ("0") : ("")}{this.state.minutes}:
                {(this.state.seconds.length === 1) ? ("0") : ("")}{this.state.seconds}
            </Typography>
      );
    }
  }