import React, { Component } from 'react';
import classes from './Layout.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <div className = { classes.Layout }>

                <div className = { classes.Navbar }>
                    <Navbar />
                </div>

                <div className = { classes.Toolbar }>
                    <Toolbar />
                </div>
                    
                <div className = { classes.LayoutContent }>
                    { this.props.children }
                </div>  

                <div className = { classes.Footer }>
                    <Footer />
                </div>

            </div>
        );
    }
}


export default Layout;
