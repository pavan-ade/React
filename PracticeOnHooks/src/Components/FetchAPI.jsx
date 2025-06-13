import React, { useEffect, useState } from "react";
import "../styles/FatchAPI.css";

const FetchAPI = () => {
  const [value, setValue] = useState([]);

  async function dataFetching() {
    try {
      const api = await fetch("https://fakestoreapi.com/users");
      const data = await api.json();
      setValue(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div className="container">
      <h2>Fetch API</h2>
      {value.map(
        ({
          id,
          name: { firstname, lastname },
          email,
          username,
          phone,
          address: {
            geolocation: { lat, long },
            city,
            street,
            number,
            zipcode,
          },
        }) => (
          <section key={id}>
            <div>
              <h3>Personal Data</h3>
              <div>
                <p>
                  Name: {firstname} {lastname}
                </p>
                <p>Email: {email}</p>
                <p>Username: {username}</p>
                <p>Phone: {phone}</p>
              </div>
            </div>
            <div>
              <h3>Address</h3>
              <div>
                <p>City: {city}</p>
                <p>Street: {street}</p>
                <p>Number: {number}</p>
                <p>Zipcode: {zipcode}</p>
              </div>
            </div>
            <div>
              <h3>Geolocation</h3>
              <div>
                <p>Lat: {lat}</p>
                <p>Long: {long}</p>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default FetchAPI;
