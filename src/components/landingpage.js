import React, { Component } from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-mdl';



class LandingPage extends Component {
    render() {
        return (
            <div style={{}}>
                <section style={{
                    background: "rgb(0,54,246)",
                    background: "linear-gradient(80deg, rgba(0,54,246,1) 0%, rgba(168,58,41,1) 100%)", height:'82.25vh'
                }}>
                    <h1 style={{marginTop: '0px', color: 'white', }}>Hi Everyone</h1>
                    <p>What is up!</p>
                </section>
            </div>
        )
    }
}
export default LandingPage;