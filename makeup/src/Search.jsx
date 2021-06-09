import axios from 'axios'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');



  const getMakeup = () => {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${search}`)
      .then((response) => {
        console.log("get", response.data)
        setData(response.data)
      }).catch((err) => {
        console.log("error", err);
      })
  }

  const list =data.map((m, i) => {
    return (

      <div className="col">
      <div className="cards">
        <div className="card-body">
          <div className="card-header">{m.name}</div>
          <img className="img1" src={m.image_link} alt="" style={{ width: "100px", height: "100px" }} />
          <div className="card-body">{m.description}</div>
          <div className="card-footer">Price: {m.price}</div>

        </div>
      </div>
      </div>
    )
  })

  return (
    <div class="container mt-4">

      <div class="row align-items-center">

        <div class="col">
          <div className="col-sm-4 mb-3">
          <div class="input-group">
            <input type="text" class="form-control " onChange={(e) => setSearch(e.target.value)} />
            <div class="input-group-append">
              <button type="button" class="btn btn-warning" onClick={getMakeup}>Search</button>
            </div>
          </div>
          </div>
          <div className="row">
          {list}
          </div>
        </div>
      </div>
    </div>


  )
}






