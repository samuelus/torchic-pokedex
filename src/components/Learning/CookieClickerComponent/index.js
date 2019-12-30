import React from 'react';
import NameSelector from '../NameSelectorComponent';
import Paper from '@material-ui/core/Paper'
import Button from '../ButtonComponent'

class CookieClicker extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            CookieAmount: 0,
            Name: "Kukiz"
        }
    }

    MakeCookies = () =>
    {
        this.setState({
            CookieAmount: this.state.CookieAmount + 1
        })
    }

    ClearCookies = () =>
    {
        this.setState({
            CookieAmount: 0
        })
    }

    UpdateName = (event) =>
    {
        this.setState({
            Name: event.target.value
        })
    }

    render()
    {
        return(
            <Paper style = {{
                margin: 30,
                padding: 30
            }}>
                <Button onClick={this.MakeCookies}>Click to make {this.state.Name} Happy ^^</Button>
                <br/>
                <span>{this.state.CookieAmount}</span>
                <br/>
                <Button onClick={this.ClearCookies}>Reset to make {this.state.Name} Sad :'(</Button>
                <NameSelector 
                    name = {this.state.Name}
                    update = {this.UpdateName}
                />
            </Paper>
        )
    }
}

export default CookieClicker