import React from "react";
import PostHelp from "./posthelpa";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPointHelp, searchph } from "../http/feth";

const ListHelp = (props) => {
  const [persons, setPersons] = useState([])
  const [sort, setSort] = useState('date')
  const [textsearch, settextsearch] = useState('')
  useEffect(() => {
    getAllPointHelp(sort).then(data => setPersons(data))
    if(textsearch!==''){

    }
  }, [sort])

  const search = async () => {
    const a =await searchph(textsearch)

  }

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
        <button class="btn btn-outline-success" type="submit" onClick={search}>Search</button>
      </div>

      <ul>
        {persons.map(person => <PostHelp person={person} />)}
      </ul>
    </div>
  )
}

export default ListHelp