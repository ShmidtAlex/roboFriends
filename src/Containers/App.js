import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField } from "../actions";
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import  ErrorBoundry from '../Components/ErrorBoundry';

import './App.css';

const mapStateToProps = (state) => {
  console.log(state);
  //console.log(state.searchRobots)
  return {
    //this searchRobots comes from reducers.js
    searchField: state.searchRobots.searchField,
  }
}
//dispatch is the trigger of action
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      //since we have no hardcode, the state should be empty array initially
      robots: [],
      searchfield: '',
    }
    //this.onSearchChange = this.onSearchChange.bind(this);
  }
  componentDidMount(){
    /*//check if our redux store woriking (it only works BEFORE wrapping of App to <Provider>)
    console.log(this.props.store.getState());*/

    //fetching robot's data from third-part API
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({ robots: users }));  
  }
  onSearchChange(event) {
    //assign new state to searchfield
    this.setState({ searchField: event.target.value });
    //event = changing searchfield, target = searchfield itself, value = which character was typed    
  };
  render() {
    //in order to remove redundant states, (see /*this.state*/), implement ES6 destructing feature:
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!robots.length) {/*it's more convenient and clear than (robots.length === 0)*/
      
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
        {/*pass this arbitrarily named function, onSearchChange to children component SearchBox*/}
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);