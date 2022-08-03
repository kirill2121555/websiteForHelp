import React, { useContext, useEffect } from "react";
import s from './module.css'
import PostCanHelp from "./postcanhelpa";
import axios from "axios";

export default class CanHelp extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/getAsistant`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
     
      <ul>
        {this.state.persons.map(person => <PostCanHelp person={person} />)}
      </ul>
    )
  }
}