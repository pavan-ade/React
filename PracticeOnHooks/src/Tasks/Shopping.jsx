import React, { useState } from "react";

const Shopping = () => {
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState("");
  const [quntity, setQuntity] = useState();
  const [price, setPrice] = useState();

  const hanfleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
    console.log(item, quntity, price);
    setListItems([...listItems, { item : item,quntity : quntity, price :price }]);
    setItem("");
    setQuntity("");
    setPrice("");
  };

  return (
    <div>
      <div>
        <form onSubmit={hanfleSubmit}>
          <label>
            Item :
            <input
              type="text"
              placeholder="Enter Item Name"
              onChange={(e) => setItem(e.target.value)}
              value={item}
            />
          </label>
          <br />
          <br />
          <label>
            Quntity :
            <input
              type="number"
              placeholder="Enter Quntity"
              onChange={(e) => setQuntity(e.target.value)}
              value={quntity}
            />
          </label>
          <br />
          <br />
          <label>
            Price :
            <input
              type="number"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
          <br />
          <br />
          <button type="submit">sumbit</button>
        </form>
      </div>

      <div>
        <h2>List of Items</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {listItems.map(({ item, quntity, price }, index) => (
                <tr key={index}>
                  <td>{item}</td>
                  <td>{quntity}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
