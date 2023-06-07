import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:8080/api/vi/gotchy')
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data: ', error);
    //   });
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      {data.map(item => (
        <div key={item.id}>
          <p>Location: {item.location}</p>
          <p>Date: {item.date}</p>
          <p>Gender: {item.gender}</p>
          <p>Participants: {item.participants}</p>
        </div>
      ))}
    </div>
  );
}

export default DataComponent;
