import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container } from 'reactstrap';

import Header from './Header';
import Footer from './Footer';

import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
    <BrowserRouter>
        
        <div className="d-flex flex-column">
            <Header />

            <Container className="themed-container" style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Route exact path='/' component={List}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/detail/:id' component={Detail}/>
            </Container >

            <Footer />
        </div>

    </BrowserRouter>
)

export default Root;