import React from 'react'
import MaterialButton from '@material-ui/core/Button'

export default class Button extends React.Component {
    render() {
        return (
            <MaterialButton 
                color="secondary"
                {...this.props}
            />
        )
    }
}
