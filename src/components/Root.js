import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
    <BrowserRouter>
        <Header />

            <div className='content'>
                <Route exact path='/' component={List}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/detail/:id' component={Detail}/>
            </div>

        <Footer />

    </BrowserRouter>
)

export default Root;