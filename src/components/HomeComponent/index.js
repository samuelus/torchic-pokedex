import React from 'react';
import {Container} from '@material-ui/core';
import Header from './HeaderComponent';

class Home extends React.Component
{
    render() {
        return (
            <Container>
                <Header/>
            </Container>
        )
    }
}

export default (Home)