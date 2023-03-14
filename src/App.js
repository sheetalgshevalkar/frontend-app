import React, { useState, useEffect } from 'react';
import axios from 'axios';
<h1> hello web server please call backend</h1>
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data').then((response) => {
      setData(response.data);
    });
  }, []);
  
 

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <h1>hello web server please call backend</h1>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default App;
