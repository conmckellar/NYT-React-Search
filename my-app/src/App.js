import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import { BrowserRouter as Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";


class App extends Component {

  state = {
    articles: [],
    articleSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles update the articles state
    event.preventDefault();
    API.getArticles(this.state.articleSearch)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Wrapper>
          <Container>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/saved" component={Saved} />
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;
