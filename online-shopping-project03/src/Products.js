import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resopnse) => {
      console.log(resopnse.data);
      setProducts(resopnse.data);
    });
  }, []);

  const buying = () => {
    alert(" Buying succeeded");
  };

  return (
    <div className="container px-4 px-lg-5 " style={{ padding: 50 + "px" }}>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {products.map((product, index) => (
          <div key={index} className="col" style={{ paddingBottom: 30 + "px" }}>
            <div
              class="card"
              style={{
                width: 25 + "rem",
                alignItems: "center",
                margin: 20 + "px",
              }}
            >
              <div
                className="card-body"
                style={{ alignItems: "center", padding: 20 + "px" }}
              >
                <img
                  class="rounded float-start"
                  src={product.image}
                  style={{
                    width: 350 + "px",
                    height: 350 + "px",
                    paddingLeft: 20 + "px",
                  }}
                />
                <div class="card-body" style={{ alignItems: "center" }}>
                  <div style={{ fontSize: 20 + "px", textAlign: "center" }}>
                    {product.title}
                  </div>
                  <h6>price:{product.price} SR</h6>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={buying}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
