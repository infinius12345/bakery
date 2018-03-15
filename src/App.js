import React from 'react';
import {Route, Link} from 'react-router-dom'
import Nav from './components/Nav'
import Products from './components/Products'
import Checkout from './components/Checkout'
import Modal from './components/Modal'

class App extends React.Component {
    render() {
        return (
            <div className="App-main">

                <header className="App-header">
                    <Nav/>

                </header>
                <Modal/>
                <Route exact path="/" component={Products}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/checkout" component={Checkout}/>
            </div>
        );
    }
}

export default App;