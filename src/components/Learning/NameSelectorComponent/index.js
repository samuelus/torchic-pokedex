import React from 'react'
import TextField from '@material-ui/core/TextField'

class NameSelector extends React.Component
{
    render()
    {
        return(
            <div>
                <TextField
                    type="text"
                    onChange = {this.props.update}
                    value = {this.props.name}
                />
            </div>
        )

    }
}

export default NameSelector