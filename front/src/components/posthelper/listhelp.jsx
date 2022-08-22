import React from "react";
import PostHelp from "./posthelpa";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPointHelp, searchph } from "../http/feth";

const ListHelp = (props) => {
  const [persons, setPersons] = useState([])
  const [sort, setSort] = useState('date')
  const [textsearch, settextsearch] = useState('')
  const [indicate, Setindicate] = useState('')

  useEffect(() => {
    if (textsearch === '') {
      getAllPointHelp('', sort).then(data => setPersons(data))
      Setindicate('')
    }
    if (textsearch !== '' && sort !== '') {
      getAllPointHelp(textsearch, sort).then(data => setPersons(data))
      Setindicate('')
    }
  }, [sort, indicate])

  console.log(sort)
  return (
    <div>
      <p>Сортировать:
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}>
          <option value='like'>По лайкам</option>
          <option value='views'>По просмотрам</option>
          <option value='date'>По дате</option>
        </select>
      </p>
      <div class="d-flex" role="search">

        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          value={textsearch}
          onChange={e => settextsearch(e.target.value)}
        ></input>
        <button class="btn btn-outline-success" type="submit" onClick={() => Setindicate(true)}>Search</button>
      </div>

      <ul>
        {persons.length !== 0 ?
          persons.map(person => <PostHelp person={person} />) :
          <h1>Совпаденпия не найдены</h1>
        }
      </ul>
    </div>
  )
}

export default ListHelp