import React from 'react'

class Clock extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            CurrentTime: 0
        }
    }

    AddTime = () => {
        this.setState({
            CurrentTime: this.state.CurrentTime + 1
        })
    }

    componentDidMount() {
        this.interval  = setInterval(
            this.AddTime,
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render()
    {
        return (
            <div>
                {this.state.CurrentTime}
            </div>
        )
    }
}

export default Clock;