import React from 'react';
import PostNeedHelp from './Postneedhelp';
import axios from 'axios';

export default class NeedhelpList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/getAllNeedHelp`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  
  render() {
    return (
      <ul>
        {this.state.persons.map(person => <PostNeedHelp person={person} />)}
      </ul>
    )
  }
}

