import React from "react";
import { Link } from "react-router-dom";

const ItemOrder = () => {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>20</td>
        <td>10</td>
        <td>
          <i className="fas fa-minus mr-2"></i>
          <span>4</span>
          <i className="fas fa-plus ml-2"></i>
        </td>
        <td>
          $10
          <Link style={{ color: "red" }} to="/">
            <i className="fas fa-trash float-right"></i>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ItemOrder;
