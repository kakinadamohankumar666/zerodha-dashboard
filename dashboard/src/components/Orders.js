import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/allOrders`)
    .then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    })
    .catch((err) => {
      console.error("Failed to fetch orders:", err);
    });
}, []);

  return (
    <>
      <h3 className="tittle">Orders ({allOrders.length})</h3>

      {allOrders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">Get started</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;

