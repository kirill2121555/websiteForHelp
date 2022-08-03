import React from "react";
import s from './module.css'
import PostHelp from "./posthelpa";
import axios from "axios";

export default class ListHelp extends React.Component {
    state = {
      persons: []
    }
  
   componentDidMount() {
      axios.get(`http://localhost:5000/api/getAllPointHelp`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
    
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <PostHelp person={person} /> )}
        </ul>
      )
    }
  }
  