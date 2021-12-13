import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white', }} to="/">Data Butler</Link>} scroll>
            <Navigation>
              <Link to="/pricing">Pricing</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>}>
            <Navigation>
              <Link to="/pricing">Pricing</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main></Main>

          </Content>
          <Footer>
            <p style={{ textAlign: 'center', color: 'white', verticalAlign: 'center', }}>Data Butler © 2022</p>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;